<template>
  <v-container id="heroImage">
    <v-row align="center" justify="space-around">
      <v-col cols="11" md="6">
        <v-card flat class="px-8">
          <v-img
          contain
          :src="image" />
        </v-card>
      </v-col>
      <v-col cols="11" md="6">
        <v-card flat class="px-8">
          <v-col cols="8">
            <v-row class="display-3 font-weight-bold py-4">
              {{ title }}
            </v-row>
            <v-row class="title font-weight-bold py-4">
              {{ description }}
            </v-row>
            <v-row justify="start" align="center" class="py-4">
              <v-col cols="12" md="4" v-for="button in buttons" :key="button.name">
                  <v-btn dark rounded large color="#b51600" :to="button.route">
                    {{ button.name }}
                  </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HeroImage',
    data: () => ({
      image: "/img/moyerDiagram.png",
      title: "We aren't ******* around here.",
      description: "Listen. Here's some good looking stuff for you to look at and you'd better get your *** in our shop now.",
      buttons: [
          {
              name: "Residential",
              route: "/residential",
          },
          {
              name: "Commercial",
              route: "/commercial",
          },
      ],
    }),
  }
</script>
