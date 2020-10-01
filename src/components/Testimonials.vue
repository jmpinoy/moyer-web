<template>
  <v-container id="testimonials">
    <v-row align="center" justify="space-around">
      <v-col cols="11" md="5" v-for="testimonial in testimonials" :key="testimonial.client">
        <v-card flat class="px-8">
          <v-row>
            <v-col>
              <v-row align="center" justify="center" class="font-weight-bold display-1">
                {{ testimonial.client }}
              </v-row>
              <v-row align="center" justify="center" class="font-weight-meduim display-0">
                {{ testimonial.description }}
              </v-row>
              <v-row align="center" justify="center" class="font-weight-meduim display-0">
                {{ testimonial.company }}
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Testimonials',

    data: () => ({
      testimonials: [
        {
          client: 'Client 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ',
          company: 'Client name, Company'
        },
        {
          client: 'Client 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ',
          company: 'Client name, Company'
        },
      ],
    }),
  }
</script>
