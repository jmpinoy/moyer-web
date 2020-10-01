<template>
  <div id="testimonials">
    <v-row>
      <v-col v-for="testimonial in testimonials" :key="testimonial.client">
        <v-card class="pa-md-8 ma-15">
          <v-row align="center" justify="center" class="font-weight-bold display-1 mb-3">
              {{ testimonial.client }}
          </v-row>
          <v-row align="center" justify="center" class="font-weight-medium display-0 mb-5">
            {{ testimonial.description }}
          </v-row>
          <v-row align="center" justify="center" class="font-weight-medium display-0">
            {{ testimonial.company }}
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
