<template>
  <v-container id="contactSection">
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
          <v-col cols="12">
            <v-row class="display-1 font-weight-black py-4">
              {{ title }}
            </v-row>
            <v-row class="title font-weight-medium py-4">
              {{ description }}
            </v-row>
            <v-row justify="start" align="center" class="py-4">
              <v-btn outlined large color="blue" :to="button.route">
                {{ button.name }}
              </v-btn>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ContactSection',
    data: () => ({
      image: "/img/teamPlaceholder.png",
      title: "A call to action: contact us!",
      description: "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.",
      button: {
        name: 'Contact page',
        route: '/contact'
      }
    }),
  }
</script>
