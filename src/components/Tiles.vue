<template>
  <v-container fluid :id="tileId" class="background">
    <v-row justify="center" align="center" class="py-10">
      <v-col justify="center" align="center" cols="11" md="10" lg="9" xl="7">
        <v-row justify="center" class="display-2 pb-10">
          {{ tileTitle }}
        </v-row>
        <v-row justify="center" align="start">
          <v-col
          v-for="(tile, t) in tiles"
          :key="t"
          class="d-flex child-flex"
          cols="6" md="3">
            <v-card class="transparent" flat>
              <v-img
                height="250"
                contain
                :src="tile.img" />
                <v-card-text class="headline text-center">
                  {{ tile.title }}
                </v-card-text>
                <v-card-text class="title text-center">
                  {{ tile.description }}
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as fb from '@/firebase'

export default {
  name: 'Team',
  props: {
      tileId: {
        type: String,
        default: ''
      },
      tileTitle: {
        type: String,
        default: ''
      },
      tileSubtitle: {
        type: String,
        default: ''
      },
      tiles: {
        type: Array,
        default: () => []
      },
      btn: {
        type: Object,
        default: () => {}
      },
  },
  data: () => ({  
  }),
}
</script>
