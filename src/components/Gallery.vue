<template>
  <v-container :id="galleryid">
    <v-row justify="center">
      <v-col cols="11" md="10" lg="9" xl="7">
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
    <v-row justify="center">
      <v-col cols="12">
        <v-row justify="center" class="pb-10">
          <v-col
          v-for="(room, r) in filteredRooms"
          :key="r"
          cols="12" sm="6" md="4" lg="3">
            <v-card
            class="text-center"
            flat
            dark
            style="border-radius: 25px;"
            @click="image = room.index; overlay = true">
              <v-img
                :src="room.img"
                class="align-end"
                style="border-radius: 25px;">
                <v-row class="primary">
                  <v-card-text>{{ room.color }}, {{ room.roomType }}, {{ room.style }}</v-card-text>
                </v-row>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-overlay
        v-model="overlay">
        <v-card 
          v-click-outside="outside"
          :width="cardWidth"
          flat>
          <v-window
            v-model="image"
            hide-delimiters>
            <v-window-item
              v-for="(room, r) in filteredRooms"
              :key="r">
              <v-card class="primary">
                <v-card-actions class="justify-end">
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
                  :src="room.img"
                  contain
                  class="align-end">
                  <v-card-actions class="justify-space-between">
                    <v-btn
                      color="white"
                      class="black--text"
                      @click="prev">
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn
                      color="white"
                      class="black--text"
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
    },    
    cardWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'md': return 350
        case 'lg': return 400
        case 'xl': return 500
        default: return 350
      }
    },
  }
}
</script>
