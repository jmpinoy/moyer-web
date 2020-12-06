<template>
  <v-container fluid id="commercial">
    <v-row>
      <v-col>
        <v-col cols="12">
          <v-row justify="center" class="display-2">
            {{ title }}
          </v-row>
        </v-col>
      </v-col>
    </v-row>
    <Gallery
      galleryid="commercialGallery"
      :rooms="commercialGallery"
      :colors="colors"
      :roomTypes="roomTypes"
      :styles="styles" />      
    <v-row justify="center" align="center" class="background">
      <v-col cols="11">
        <v-row justify="center" class="text-center display-2 py-10">
          Don't see what you're looking for?
        </v-row>
        <v-row justify="center">            
          <v-btn large class="primary title" to="/contact">
            Contact Us
          </v-btn>
        </v-row>
        <v-row justify="center" class="text-center title py-10">
          We can build it custom for you, no problem. Just give us a ring.
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
import { mapState } from 'vuex'

export default {
  name: 'Commercial',
  components: {
    Gallery
  },
  data: () => ({
    subtitle: 'Gallery',
    title: 'Commercial Work',
  }),
  computed: {
    ...mapState(['commercialGallery', 'commercialFilters']),
    colors() {
      return this.commercialFilters && this.commercialFilters.length > 0 ? this.commercialFilters[0].filters : [];
    },
    roomTypes() {
      return this.commercialFilters && this.commercialFilters.length > 0 ? this.commercialFilters[1].filters : [];
    },
    styles() {
      return this.commercialFilters && this.commercialFilters.length > 0 ? this.commercialFilters[2].filters : [];
    }
  }
}
</script>
