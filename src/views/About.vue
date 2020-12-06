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
      img: 'https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Fabout-1.jpg?alt=media&token=d6744439-c826-40c5-a3f4-224474657663',
      description: 'Charles Moyer founded Moyer Cabinets with a simple philosophy: "The customer is always right.” After 46 years in business, that basic principle still holds true.<br><br>Although the methods of designing and building cabinets have changed over the years, one thing has not: the quality and craftsmanship we put into every cabinet we make.'
    },
    shop: {
      id: 'shop',
      title: 'Serving the Omaha area since 1965',
      img: 'https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Fabout-2.jpg?alt=media&token=2e948889-af66-42ac-b785-1ff4ec680d45',
      description: 'Our shop sits in the historic Vinton Street neighborhood, where we have the finest tools and technologies to make sure you get exactly what you want — perfection. We invite you to join the Moyer family today.'

    }
  }),
  computed: {
    ...mapState(['employees'])
  }
}
</script>
