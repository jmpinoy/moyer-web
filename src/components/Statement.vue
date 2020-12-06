<template>
  <v-container fluid id="statement">
    <v-row justify="center">
      <v-col cols="11" md="10" lg="9" xl="7">
        <v-row align="center" justify="space-around">
          <v-col justify="center" align="left" cols="12" md="6">
            <v-card flat class="px-8">
              <v-col cols="12" class="pt-4">
                <v-row class="display-2 pb-6" v-html="title" />
                <div id="divider" class="pa-0 ma-0" style="background-color:#D6001C; height: 4px; width:48px; border-radius: 25px;" />
                <v-row class="title pt-7" v-html="description" />
                <v-row class="pt-7">
                  <v-col cols="12" md="8" lg="3" class="pa-0 ma-0">
                      <v-btn dark large class="body-2 primary font-weight-bold" to="/contact">
                        Get a Quote
                      </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-card>
          </v-col>
          <v-col cols="11" md="6">
            <v-card flat class="px-8">
              <v-img
              contain
              :src="image"
              style="border-radius: 25px;" />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Statement',
    data: () => ({
      image: "https://firebasestorage.googleapis.com/v0/b/tutorial-crud-app.appspot.com/o/siteImages%2Fhome-2.jpg?alt=media&token=caf52af3-a9b9-4cbb-86b2-ad46038e4c6a",
      title: "Quality in every cabinet",
      description: "Most cabinet makers charge extra for things like wood drawers, soft-close hinges, and glides. But at Moyer, we offer high standards no matter the job. It’s just what we do."
    }),
  }
</script>
