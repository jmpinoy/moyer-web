<template>
  <v-container fluid id="residential">
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
      galleryid="residentialGallery"
      :rooms="residentialGallery"
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
  name: 'Residential',
  components: {
    Gallery
  },
  data: () => ({
    subtitle: 'Gallery',
    title: 'Residential Work',
  }),
  computed: {
    ...mapState(['residentialGallery', 'residentialFilters']),
    colors() {
      return this.residentialFilters && this.residentialFilters.length > 0 ? this.residentialFilters[0].filters : [];
    },
    roomTypes() {
      return this.residentialFilters && this.residentialFilters.length > 0 ? this.residentialFilters[1].filters : [];
    },
    styles() {
      return this.residentialFilters && this.residentialFilters.length > 0 ? this.residentialFilters[2].filters : [];
    }
  },
}
</script>
