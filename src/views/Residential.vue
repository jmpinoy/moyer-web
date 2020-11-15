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
