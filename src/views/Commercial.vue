<template>
  <v-container id="commercial">
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
      galleryid="commercialGallery"
      :rooms="cards"
      :colors="colors"
      :roomTypes="roomTypes"
      :styles="styles" />
  </v-container>
</template>

<script>
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'Commercial',
  components: {
    Gallery
  },
  data: () => ({
    subtitle: 'Gallery',
    title: 'Commercial Work',
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
    cards: [
      {
        img: '/img/imagePlaceholder.png',
        color: 'Blue',
        room: 'Bedroom',
        style: 'Modern'
      },
      {
        img: '/img/imagePlaceholder.png',
        color: 'Yellow',
        room: 'Bedroom',
        style: 'Rustic'
      },
      {
        img: '/img/imagePlaceholder.png',
        color: 'Yellow',
        room: 'Living Room',
        style: 'Modern'
      },
      {
        img: '/img/imagePlaceholder.png',
        color: 'Blue',
        room: 'Living Room',
        style: 'Rustic'
      },
      {
        img: '/img/imagePlaceholder.png',
        color: 'Yellow',
        room: 'Kitchen',
        style: 'Minimalist'
      },
      {
        img: '/img/imagePlaceholder.png',
        color: 'Blue',
        room: 'Bedroom',
        style: 'Minimalist'
      },
      {
        img: '/img/imagePlaceholder.png',
        color: 'Red',
        room: 'Living Room',
        style: 'Minimalist'
      },
      {
        img: '/img/imagePlaceholder.png',
        color: 'Blue',
        room: 'Bedroom',
        style: 'Minimalist'
      },
      {
        img: '/img/imagePlaceholder.png',
        color: 'Red',
        room: 'Bedroom',
        style: 'Modern'
      },
      {
        img: '/img/imagePlaceholder.png',
        color: 'Blue',
        room: 'Kitchen',
        style: 'Modern'
      },
      {
        img: '/img/imagePlaceholder.png',
        color: 'Red',
        room: 'Kitchen',
        style: 'Rustic'
      },
      {
        img: '/img/imagePlaceholder.png',
        color: 'Blue',
        room: 'Living Room',
        style: 'Rustic'
      },
    ]
  })
}
</script>
