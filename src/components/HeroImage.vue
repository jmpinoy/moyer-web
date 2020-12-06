<template>
  <v-container fluid id="heroImage">
    <v-row justify="center">
      <v-col cols="11" md="10" lg="9" xl="7">
        <v-row align="center" justify="space-around">
          <v-col cols="12" md="6">
            <v-card flat>
              <v-img
              contain
              :src="image"
              style="border-radius: 25px;" />
            </v-card>
          </v-col>
          <v-col justify="center" align="left" cols="12" md="6">
            <v-card flat class="px-8">
              <v-col cols="12" class="pt-4">
                <v-row class="display-2 pb-6" v-html="title" />
                <div id="divider" class="pa-0 ma-0" style="background-color:#D6001C; height: 4px; width:48px; border-radius: 25px;" />
                <v-row class="title pt-7">
                  {{ description }}
                </v-row>
                <v-row class="pt-7">
                  <v-col cols="12" lg="5" xl="4" v-for="button in buttons" :key="button.name">
                    <v-btn dark large class="body-2 primary font-weight-bold" :to="button.route">
                      {{ button.name }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HeroImage',
    data: () => ({
      image: "https://firebasestorage.googleapis.com/v0/b/tutorial-crud-app.appspot.com/o/siteImages%2Fhome-1.jpg?alt=media&token=7ce2c0a0-2b7d-4a8b-9fec-a9c82091fbd7",
      title: "Custom cabinets.<br>Fair prices",
      description: "Since 1953, our family has delivered quality cabinets to the Omaha metro area and helped thousands of customers craft their dreams. No cabinet is too custom for Moyer.",
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
