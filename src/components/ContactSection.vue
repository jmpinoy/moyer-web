<template>
  <v-container fluid id="contactSection" class="background pt-16">
    <v-row justify="center">
      <v-col cols="11" md="10" lg="9" xl="7">
        <v-row align="center" justify="space-around">
          <v-col cols="12" md="6">
            <v-card flat class="px-8 background">
              <v-img
              contain
              :src="image"
              style="border-radius: 25px;" />
            </v-card>
          </v-col>
          <v-col justify="center" align="left" cols="12" md="6">
            <v-card flat class="px-8 background">
              <v-col cols="12" class="pt-4">
                <v-row class="display-2 pb-6" v-html="title" />
                <div id="divider" class="pa-0 ma-0" style="background-color:#D6001C; height: 4px; width:48px; border-radius: 25px;" />
                <v-row class="title pt-7">
                  {{ description }}
                </v-row>
                <v-row class="pt-7">
                  <v-col cols="12" md="8" lg="3" class="pa-0 ma-0">
                    <v-btn dark large class="body-2 primary font-weight-bold" to="/contact">
                      Contact Us
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
    name: 'ContactSection',
    data: () => ({
      image: "https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Fhome-7.jpg?alt=media&token=c81ecbce-e05e-4023-993d-596cf45967ce",
      title: "Got an idea? We'll make it happen",
      description: "With state-of-the-art tools and technologies, our team will help you find the perfect cabinet solution that fits your needs.",
    }),
    methods: {
      GoTo(route) {
        return this.$router.push(route);
      }
    }
  }
</script>
