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
                outlined />
            </v-col>
            <v-col cols="8" md="3">
              <v-select
                :items="roomTypes"
                label="Room Type"
                v-model="roomTypeFilter"                
                @input="filter()"
                outlined />
            </v-col>
            <v-col cols="8" md="3">
              <v-select
                :items="styles"
                label="Style"
                v-model="styleFilter"
                @input="filter()"
                outlined />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-btn
              @click='reset()'
              text
              outlined
              color="rgb(30,75,180)"
              class="body-2">Clear</v-btn>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
    <v-row justify="center" class="pb-10">
      <v-col
      v-for="(room, r) in rooms"
      :key="r"
      class="d-flex child-flex"
      cols="6" md="3">
        <v-card
        class="text-center"
        flat>
          <v-img
            :src="room.img"
            class="align-end">
            <v-row style="background:rgba(50,120,230,.1); color:rgb(30,75,180);">
              <v-card-text>{{ room.color }}, {{ room.room }}, {{ room.style }}</v-card-text>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="display-1 font-weight-black py-10">
      Don't see what you're looking for?
    </v-row>
    <v-row justify="center">            
      <v-btn outlined large color="blue" to="/contact">
        Contact Us
      </v-btn>
    </v-row>
    <v-row justify="center" class="body-1 font-weight-light py-10">
      We can build it custom for you, no problem. Just give us a ring.
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Residential',
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
      colorFilter: '',
      roomTypeFilter: '',
      styleFilter: '',
      filteredRooms: []
    }),
    methods: {
      reset() {
        this.colorFilter = '';
        this.roomTypeFilter = '';
        this.styleFilter = '';
      },
      filter() {
        for(var room in rooms) {
          if()
          // stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions
        }
      }
    }
  }
</script>
