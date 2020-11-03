<template>
  <v-container id="residential">
    <v-row>
      <v-col>
        <v-col cols="12">
          <v-row justify="center" class="title blue--text font-weight-black">
            {{ subtitle }}
          </v-row>
          <v-row justify="center" class="display-1 font-weight-black py-3">
            {{ title }}
          </v-row>
        </v-col>
      </v-col>
    </v-row>
    <Gallery
      galleryid="residentialGallery"
      :rooms="residentialGallery"
      :colors="colors"
      :roomTypes="roomTypes"
      :styles="styles" />
  </v-container>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
import { mapState } from 'vuex'

export default {
  name: 'Residential',
  components: {
    Gallery
  },
  data: () => ({
    subtitle: 'Gallery',
    title: 'Residential Work',
    colors: [
      'Blue',
      'Red',
      'Yellow'
    ],
    roomTypes: [
      'Bedroom',
      'Living Room',
      'Kitchen'
    ],
    styles: [
      'Modern',
      'Rustic',
      'Minimalist'
    ],
    // rooms: [
    //   {
    //     img: '/img/teamPlaceholder.png',
    //     description: 'This is a test description',
    //     color: 'Blue',
    //     roomType: 'Bedroom',
    //     style: 'Modern',
    //     index: 0
    //   },
    //   {
    //     img: '/img/imagePlaceholder.png',
    //     description: 'This is a test description',
    //     color: 'Yellow',
    //     roomType: 'Bedroom',
    //     style: 'Rustic',
    //     index: 1
    //   },
    //   {
    //     img: '/img/cabinetPlaceholder.png',
    //     description: 'This is a test description',
    //     color: 'Yellow',
    //     roomType: 'Living Room',
    //     style: 'Modern',
    //     index: 2
    //   },
    //   {
    //     img: '/img/imagePlaceholder.png',
    //     description: 'This is a test description',
    //     color: 'Blue',
    //     roomType: 'Living Room',
    //     style: 'Rustic',
    //     index: 3
    //   },
    //   {
    //     img: '/img/moyerDiagram.png',
    //     description: 'This is a test description',
    //     color: 'Yellow',
    //     roomType: 'Kitchen',
    //     style: 'Minimalist',
    //     index: 4
    //   },
    //   {
    //     img: '/img/imagePlaceholder.png',
    //     description: 'This is a test description',
    //     color: 'Blue',
    //     roomType: 'Bedroom',
    //     style: 'Minimalist',
    //     index: 5
    //   },
    //   {
    //     img: '/img/imagePlaceholder.png',
    //     description: 'This is a test description',
    //     color: 'Red',
    //     roomType: 'Living Room',
    //     style: 'Minimalist',
    //     index: 6
    //   },
    //   {
    //     img: '/img/imagePlaceholder.png',
    //     description: 'This is a test description',
    //     color: 'Blue',
    //     roomType: 'Bedroom',
    //     style: 'Minimalist',
    //     index: 7
    //   },
    //   {
    //     img: '/img/imagePlaceholder.png',
    //     description: 'This is a test description',
    //     color: 'Red',
    //     roomType: 'Bedroom',
    //     style: 'Modern',
    //     index: 8
    //   },
    //   {
    //     img: '/img/imagePlaceholder.png',
    //     description: 'This is a test description',
    //     color: 'Blue',
    //     roomType: 'Kitchen',
    //     style: 'Modern',
    //     index: 9
    //   },
    //   {
    //     img: '/img/imagePlaceholder.png',
    //     description: 'This is a test description',
    //     color: 'Red',
    //     roomType: 'Kitchen',
    //     style: 'Rustic',
    //     index: 10
    //   },
    //   {
    //     img: '/img/imagePlaceholder.png',
    //     description: 'This is a test description',
    //     color: 'Blue',
    //     roomType: 'Living Room',
    //     style: 'Rustic',
    //     index: 11
    //   },
    // ]
  }),
  computed: {
    ...mapState(['residentialGallery', 'residentialFilters'])
  }
}
</script>
