<template>
  <v-container id="heroImage">
    <v-row align="center" justify="space-around">
      <v-col cols="11" md="6">
        <v-card flat class="px-8">
          <v-col cols="10">
            <v-row class="display-1 font-weight-black py-4">
              <v-col>
                {{ title }}
              </v-col>
            </v-row>
            <v-row class="title font-weight-medium py-4">
              <v-col cols="10" md="6" v-for="service in services" :key="service.icon">
                <v-row>
                  <v-icon color="blue" large>
                    {{ service.icon }}
                  </v-icon>
                </v-row>
                <v-row>
                  {{ service.description }}
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="11" md="6">
        <v-card flat class="px-8">
          <v-img
          contain
          :src="image" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HeroImage',
    data: () => ({
      image: "/img/cabinetPlaceholder.png",
      title: "Our mission statement",
      description: "Listen. Here's some good looking stuff for you to look at and you'd better get your *** in our shop now.",
      services: [
          {
              icon: "mdi-cube-outline",
              description: "We do one thing. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.",
          },
          {
              icon: "mdi-truck-outline",
              description: "We do two thing. Est audiam animal molestiae te. Ex duo eripuit mentitum.",
          },
      ],
    }),
  }
</script>
