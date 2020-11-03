<template>
  <v-container :id="tileId" class="py-16">
    <v-row justify="center" align="center">
      <v-col>
        <v-row justify="center" v-if="tileSubtitle" class="title blue--text font-weight-black py-4">
          {{ tileSubtitle }}
        </v-row>
        <v-row justify="center" class="display-2 font-weight-black pb-15">
          {{ tileTitle }}
        </v-row>
        <v-row justify="center" align="center">
          <v-col
          v-for="(tile, t) in tiles"
          :key="t"
          cols="6" md="3">
            <v-card class="text-center transparent" flat>
              <v-img
                height="300"
                contain
                :src="tile.img"
                class="grey lighten-2" />              
                <v-card-text class="title font-weight-bold">
                  {{ tile.title }}
                </v-card-text>
                <v-card-text class="subtitle-1 font-weight-medium">
                  {{ tile.description }}
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-if="btn" justify="center" class="display-1 font-weight-black py-10">
          {{ btn.title }}
        </v-row>
        <v-row v-if="btn" justify="center">            
          <v-btn outlined large color="blue" :href="btn.route">
            {{ btn.text }}
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
