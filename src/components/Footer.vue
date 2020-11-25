<template>
  <v-container id="footer" fluid class="pa-0 ma-0">
    <v-row>
      <v-col class="pa-0 ma-0">
        <v-footer>
          <v-row class="pa-8 ma-8">
            <v-col cols="10" md="3">
              <v-row class="text-h5 font-weight-medium ma-4"> MOYER CABINETS </v-row>
              <v-row class= "text-subtitle-2 ml-4 my-1"> 402-709-2039 </v-row> 
              <v-row class= "text-subtitle-2  mx-4 my-1"> moyercabinets@gmail.com </v-row>
              <v-row class ="text-subtitle-2 mx-4 my-1"> Monday - Friday: 7:00AM - 3:30PM </v-row>
              <v-row class ="text-subtitle-2 mx-4 my-1"> 1630 Vinton st Omaha, NE 68108 </v-row>
              <v-btn
              rounded
              text
              icon
              color="blue"
              class="white--text"
              href="https://www.instagram.com/moyercabinets/"
              target="_blank">
                <v-icon>
                  mdi-instagram
                </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="10" md="8">
              <v-row>
                <v-col
                v-for="(tile, t) in images"
                :key="t"
                class="d-flex child-flex"
                cols="6" md="2">
                  <v-card class="text-center" flat>
                    <v-img
                      :src="tile.img"
                      class="grey lighten-2" />
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <!-- <v-col cols="10" md="8">
              <v-row>
                <v-col
                class="d-flex child-flex"
                cols="6" md="2">
                  <v-card class="text-center" flat>
                    <v-img
                      src="https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/122463650_2754523071499957_1477315772379951028_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&amp;_nc_cat=101&amp;_nc_ohc=yJioLQ4m5OQAX8QToRh&amp;_nc_tp=15&amp;oh=e6a46f7042f2aa82cd2ad9f13a165eed&amp;oe=5FC3BA99"
                      class="grey lighten-2" />
                  </v-card>
                </v-col>
                <v-col
                class="d-flex child-flex"
                cols="6" md="2">
                  <v-card class="text-center" flat>
                    <v-img
                      src="https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/122121112_996024900808733_3251785603120775078_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&amp;_nc_cat=105&amp;_nc_ohc=KFgTz-5oVSsAX_rHoH_&amp;_nc_tp=15&amp;oh=e21901bc8e2fb4f9fc19f9e011c39eed&amp;oe=5FC2C3EB"
                      class="grey lighten-2" />
                  </v-card>
                </v-col>
                <v-col
                class="d-flex child-flex"
                cols="6" md="2">
                  <v-card class="text-center" flat>
                    <v-img
                      src="https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/122226761_399473024788769_2672556447415238284_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&amp;_nc_cat=105&amp;_nc_ohc=CpMiOp1CCkUAX-Cul5q&amp;_nc_tp=15&amp;oh=38bf415f186a3ab6bc826a4508c4cfc6&amp;oe=5FC43618"
                      class="grey lighten-2" />
                  </v-card>
                </v-col>
                <v-col
                class="d-flex child-flex"
                cols="6" md="2">
                  <v-card class="text-center" flat>
                    <v-img
                      src="https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/121262050_336415987648179_6074263452273981338_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=Xbglf0wQFCEAX89CU7z&amp;_nc_tp=15&amp;oh=edcadb6c31bfc351ce967046421059d5&amp;oe=5FC20991"
                      class="grey lighten-2" />
                  </v-card>
                </v-col>
                <v-col
                class="d-flex child-flex"
                cols="6" md="2">
                  <v-card class="text-center" flat>
                    <v-img
                      src="https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/e35/121575126_349151192956507_806180815483675270_n.jpg?_nc_ht=scontent-dfw5-2.cdninstagram.com&amp;_nc_cat=107&amp;_nc_ohc=rHDFs3X0NrQAX9DY6i9&amp;tp=18&amp;oh=544445e8418d25299c0377ad6e1ce153&amp;oe=5F9CFBCC"
                      class="grey lighten-2" />
                  </v-card>
                </v-col>
                <v-col
                class="d-flex child-flex"
                cols="6" md="2">
                  <v-card class="text-center" flat>
                    <v-img
                      src="https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/121329322_663596104541537_8279165797795453548_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&amp;_nc_cat=105&amp;_nc_ohc=cHFT0QDIqacAX8FwyHS&amp;_nc_tp=15&amp;oh=b61b41c452194479376317ea63acf544&amp;oe=5FC45BD0"
                      class="grey lighten-2" />
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <v-btn
              rounded
              color="blue"
              class="white--text"
              href="https://www.instagram.com/moyercabinets/"
              target="_blank">
                <v-icon>
                  mdi-instagram
                </v-icon>
              </v-btn>
            </v-col> -->
          </v-row>
        </v-footer>
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
        img: '/img/insta1.jpg'
      },
      {
        img: '/img/insta2.jpg'
      },
      {
        img: '/img/insta3.jpg'
      },
      {
        img: '/img/insta4.jpg'
      },
      {
        img: '/img/insta5.jpg'
      },
      {
        img: '/img/insta6.jpg'
      },
    ]
  })}
</script>