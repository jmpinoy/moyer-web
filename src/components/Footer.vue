<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="11">
        <v-row justify="center">
          <v-col cols="8" md="3">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Fmoyer-stacked.svg?alt=media&token=1fa2cfda-6bd2-4dc0-a477-4c7baac44bad" contain width="250px" />
          </v-col>
          <v-col cols="8" md="3" class="pt-8">
            <p class= "title"> <a class="primary--text" href="mailto:moyercabinets@gmail.com" target="_blank">moyercabinets@gmail.com</a><br>
            402-709-2039<br>
            7AM - 3:30PM, Mon - Fri<br>
            1630 Vinton St, Omaha, NE 68108<br></p>
          </v-col>
          <v-col cols="12" md="6">
            <v-row justify="center" class="primary--text headline">
              Checkout our Instagram
            </v-row>
            <v-row justify="center">
              <v-col class="pt-6" v-for="image in images" :key="image.img" cols="3">
                <v-card flat href="https://www.instagram.com/moyercabinets/" target="_blank">
                  <v-img
                    :src="image.img"
                    contain
                    style="border-radius: 20px;" />
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
  name: 'Footer',
  data: () => ({
    images: [
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Ffooter-1.jpg?alt=media&token=2c62fafa-8135-47dd-8026-2bbcf2890b68'
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Ffooter-2.jpg?alt=media&token=77c7b5eb-c1f3-480d-9b15-026ddd0b8ecd'
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Ffooter-3.jpg?alt=media&token=9e57aeeb-41f9-4d93-895f-076491ebcafd'
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Ffooter-4.jpg?alt=media&token=26063de7-f2f2-49ab-a6bc-a29a94b8c98b'
      }
    ]
  })}
</script>