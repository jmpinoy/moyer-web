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
      :rooms="commercialGallery"
      :colors="colors"
      :roomTypes="roomTypes"
      :styles="styles" />
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
