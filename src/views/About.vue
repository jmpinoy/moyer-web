<template>
  <div id="about">
    <Descriptor
      :descriptorId="story.id"
      :title="story.title"
      :image="story.img"
      :description="story.description" />

    <Tiles
      tileId="team"
      tileTitle="Meet the team"
      :tiles="employees" />

    
    <v-row class="pb-10">
      <v-col>
        <v-row justify="center" class="display-2 py-10">
          Join our team
        </v-row>
        <v-row justify="center">            
          <v-btn large color="primary" href="https://www.indeed.com/" target="_blank">
            See Careers
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <Descriptor
      :descriptorId="shop.id"
      :title="shop.title"
      orientation="left"
      bgColor="background"
      button
      bname="Contact Us"
      broute="/contact"
      :image="shop.img"
      :description="shop.description" />
  </div>
</template>

<script>
import Descriptor from '@/components/Descriptor.vue'
import Tiles from '@/components/Tiles.vue'
import { mapState } from 'vuex'

export default {
  name: 'About',
  components: {
    Descriptor,
    Tiles
  },
  data: () => ({
    story: {
      id: 'story',
      title: 'Welcome to the family',
      img: 'https://firebasestorage.googleapis.com/v0/b/tutorial-crud-app.appspot.com/o/siteImages%2Fabout-1.jpg?alt=media&token=67f6747a-08db-4461-abf5-e4e31ee95daa',
      description: 'Charles Moyer founded Moyer Cabinets with a simple philosophy: "The customer is always right.” After 46 years in business, that basic principle still holds true.<br><br>Although the methods of designing and building cabinets have changed over the years, one thing has not: the quality and craftsmanship we put into every cabinet we make.'
    },
    shop: {
      id: 'shop',
      title: 'Serving the Omaha area since 1965',
      img: 'https://firebasestorage.googleapis.com/v0/b/tutorial-crud-app.appspot.com/o/siteImages%2Fabout-2.jpg?alt=media&token=2c2c1e61-f726-4899-905c-668b672f2187',
      description: 'Our shop sits in the historic Vinton Street neighborhood, where we have the finest tools and technologies to make sure you get exactly what you want — perfection. We invite you to join the Moyer family today.'

    }
  }),
  computed: {
    ...mapState(['employees'])
  }
}
</script>
