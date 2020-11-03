<template>
  <v-container id="terms-admin">
    <v-row>
      <v-col>
        <v-col align="center" justify="center">
          <v-row justify="center" class="title blue--text font-weight-black">
            Moyer Cabinets Web Manager
          </v-row>
          <v-row justify="center" class="display-1 font-weight-black py-3">
            Terms
          </v-row>
          <v-row justify="center" class="subtitle-1 font-weight-black py-3">
          <p>
            Click term to edit
          </p>
          </v-row>
          <v-row justify="center">          
            <v-btn
              color="blue"
              dark>
              Add
            </v-btn>
          </v-row>
          <v-row align="center" justify="center" class="my-8">
            <v-col
            v-for="(term, t) in terms"
            :key="t"
            cols="6" md="3">
              <v-card class="text-center transparent" flat>
                <v-img
                  height="300"
                  contain
                  :src="term.img"
                  class="grey lighten-2" />              
                  <v-card-text class="title font-weight-bold">
                    {{ term.title }}
                  </v-card-text>
                  <v-card-text class="subtitle-1 font-weight-medium">
                    {{ term.description }}
                  </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>  
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TermsAdmin',
  data: () => ({
    card: {
      title: '',
      description: '',
      img: ''
    }
  }),
  computed: {
    ...mapState(['terms'])
  },
  methods: {
    
  }
}
</script>