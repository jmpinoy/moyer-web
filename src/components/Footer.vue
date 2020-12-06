<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="11">
        <v-row justify="center">
          <v-col cols="8" md="3">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/tutorial-crud-app.appspot.com/o/siteImages%2Fmoyer-stacked.svg?alt=media&token=11ec2380-60f5-41c4-ab1c-58e1114f44c5" contain height="145px" />
          </v-col>
          <v-col cols="8" md="3" class="pt-8">
            <p class= "title"> <a class="primary--text" href="mailto:moyercabinets@gmail.com" target="_blank">moyercabinets@gmail.com</a><br>
            402-709-2039<br>
            7AM - 3:30PM, Mon - Fri<br>
            1630 Vinton St, Omaha, NE 68108<br></p>
          </v-col>
          <v-col cols="8" md="6">
            <v-row justify="center">
              <v-col class="pt-6" v-for="image in images" :key="image.img" cols="10" md="2">
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
        img: 'https://firebasestorage.googleapis.com/v0/b/tutorial-crud-app.appspot.com/o/siteImages%2Ffooter-1.jpg?alt=media&token=b58e86b3-df36-4cda-be2b-9ddbb41716c8'
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/tutorial-crud-app.appspot.com/o/siteImages%2Ffooter-2.jpg?alt=media&token=43e6832d-3128-42c2-8955-ca4c7c44a5bd'
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/tutorial-crud-app.appspot.com/o/siteImages%2Ffooter-3.jpg?alt=media&token=6f041699-4017-430e-b262-739722727204'
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/tutorial-crud-app.appspot.com/o/siteImages%2Ffooter-4.jpg?alt=media&token=89eb2592-f547-4c10-86bc-73651994adaa'
      }
    ]
  })}
</script>