<template>
  <v-container fluid id="worksamples" class="background">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="9" xl="7">
        <v-row justify="center" align="center">
          <v-col cols="10">
            <v-row justify="center" class="display-2 pt-8 pb-3">
              Our standards
            </v-row>
            <v-row justify="center" align="start" class="mx-12">
              <v-col class="pt-6" v-for="sample in samples" :key="sample.title" cols="12" md="3">
                <v-card flat class="px-6 background">
                  <v-row align="center" justify="center">
                    <v-img
                      :src="sample.src"
                      contain
                      style="border-radius: 20px;" />
                  </v-row>
                  <v-row align="center" justify="center" class="headline pt-5 pb-2">
                      {{ sample.title }}
                  </v-row>
                  <v-row align="center" justify="center" class="body-1 text-center">
                    <p>
                      {{ sample.description }}
                    </p>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'WorkSamples',

    data: () => ({
      samples: [ 
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Fhome-3.jpg?alt=media&token=a7c1e6b1-6d5e-4e79-b12b-a1e7c9d8501b',
          title: 'Prefinished',
          description: 'Finishing our cabinets in the shop minimizes disruptions in your home or business'
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Fhome-4.jpg?alt=media&token=7898dafc-2d8d-4ef1-a850-befe248809de',
          title: 'Frameless',
          description: 'Offering a sleek, modern look with more shelf and drawer space'
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Fhome-5.jpg?alt=media&token=8235bbc7-53b8-4b2e-84b0-dbfebb21cec9',
          title: 'Wood Drawers',
          description: 'Giving your cabinets a high-class, handmade feel'
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Fhome-6.jpg?alt=media&token=43116308-ee45-4652-b604-0d3a40334e8f',
          title: 'Soft-Close Hinges Glides',
          description: 'No more damaging door and drawer slams'
        },
      ],
    }),
  }
</script>
