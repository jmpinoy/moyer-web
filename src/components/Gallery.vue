<template>
  <v-container :id="galleryid">
    <v-row>
      <v-col>
        <v-col cols="12">
          <v-row justify="center" class="title font-weight-black">
            Filters
          </v-row>
          <v-row justify="center">
            <v-col cols="8" md="3">
              <v-select
                :items="colors"
                label="Color"
                v-model="colorFilter"
                @input="filter()"
                multiple
                small-chips
                deletable-chips
                :menu-props="{ bottom: true, offsetY: true }"
                attach
                clearable
                outlined />
            </v-col>
            <v-col cols="8" md="3">
              <v-select
                :items="roomTypes"
                label="Room Type"
                v-model="roomTypeFilter"                
                @input="filter()"
                multiple
                small-chips
                deletable-chips
                :menu-props="{ bottom: true, offsetY: true }"
                attach
                clearable
                outlined />
            </v-col>
            <v-col cols="8" md="3">
              <v-select
                :items="styles"
                label="Style"
                v-model="styleFilter"
                @input="filter()"
                multiple
                small-chips
                deletable-chips
                :menu-props="{ bottom: true, offsetY: true }"
                attach
                clearable
                outlined />
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
    <v-row justify="center" class="pb-10">      
      <v-col
      v-for="(room, r) in filteredRooms"
      :key="r"
      class="d-flex child-flex"
      cols="6" md="3">
        <v-card
        class="text-center"
        flat
        outlined
        @click="image = room.index; overlay = true">
          <v-img
            height="200"
            :src="findImage(room.img)"
            contain
            class="align-end">
            <v-row style="background:rgba(50,120,230,.1); color:rgb(30,75,180);">
              <v-card-text>{{ room.color }}, {{ room.roomType }}, {{ room.style }}</v-card-text>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-overlay
        v-model="overlay">
        <v-card 
          v-click-outside="outside"
          flat>
          <v-window
            v-model="image"
            hide-delimiters>
            <v-window-item
              v-for="(room, r) in filteredRooms"
              :key="r">
              <v-card style="background:rgb(50,120,230);">
                <v-card-actions class="justify-end">
                    <v-btn
                      color="white"
                      rounded
                      small
                      icon
                      @click.prevent="downloadImage(findImage(room.img), room.img)">
                      <v-icon>mdi-download</v-icon>
                    </v-btn>
                    <v-btn
                      color="white"
                      rounded
                      small
                      icon
                      @click="overlay = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-card-actions>
                <v-img
                  :src="findImage(room.img)"
                  contain
                  class="align-end pa-0 ma-0">
                  <v-card-actions class="justify-space-between">
                    <v-btn
                      text
                      color="black"
                      @click="prev">
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn
                      text
                      color="black"
                      @click="next">
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-img>
                <v-row class="px-5 py-2">
                  <v-card-text>
                    <div class="title pb-2">
                      {{ room.description }}
                    </div>
                    <div>
                      {{ room.color }}, {{ room.roomType }}, {{ room.style }}
                    </div>
                  </v-card-text>
                </v-row>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card>
      </v-overlay>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="11">
        <v-row justify="center" class="text-center display-1 font-weight-black py-10">
          Don't see what you're looking for?
        </v-row>
        <v-row justify="center">            
          <v-btn outlined large color="blue" to="/contact">
            Contact Us
          </v-btn>
        </v-row>
        <v-row justify="center" class="text-center body-1 font-weight-light py-10">
          We can build it custom for you, no problem. Just give us a ring.
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as fb from '@/firebase'
export default {
  name: 'Gallery',
  props: {
    galleryid: {
      type: String,
      default: ''
    },
    rooms: {
      type: Array,
      default: () => []
    },
    colors: {
      type: Array,
      default: () => []
    },
    roomTypes: {
      type: Array,
      default: () => []
    },
    styles: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    images: [],
    colorFilter: [],
    roomTypeFilter: [],
    styleFilter: [],
    overlay: false,
    image: 0
  }),
  methods: {
    next () {
      this.image = this.image + 1 === this.filteredRooms.length
        ? 0
        : this.image + 1
    },
    prev () {
      this.image = this.image - 1 < 0
        ? this.filteredRooms.length - 1
        : this.image - 1
    },
    outside () {
      this.overlay = false;
    },
    findImage(data) {
      var tmp = {};
      if (this.images.length < this.rooms.length) {
        this.displayImage(data);
      }
      this.images.forEach(image => {
        if (image.location === data) {
          tmp = image;
        }
      });
      return tmp.url;
    },
    async displayImage(data) {
      var tmp = "";
      await fb.storage.ref().child(data).getDownloadURL()
        .then(function(result) {
          tmp = result;
        });
        this.images.push({
          location: data,
          url: tmp
        })
      return tmp;
    },
    downloadImage(data, name) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = name;
        link.click();
        URL.revokeObjectURL(link.href);
      };
      xhr.open('GET', data);
      xhr.send();
    }
  },
  computed: {
    filteredRooms() {
      var filters = {
        color: this.colorFilter,
        roomType: this.roomTypeFilter,
        style: this.styleFilter
      }
      var filtered = this.rooms;
      var temp = [];
      for (var filter in filters) {
        if (filters[filter].length != 0) {
          for (var j = 0; j < filter.length; j++) {
            for (var i = 0; i < filtered.length; i++) {
              if (filtered[i][filter] === filters[filter][j]) {
                temp.push(filtered[i]);
              }
            }
          }
          filtered = temp;
          temp = [];
        }
      }
      return filtered;
    }
  }
}
</script>
