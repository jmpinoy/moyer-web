<template>
  <div id="about">
    <Descriptor
      :descriptorId="story.id"
      :subtitle="story.subtitle"
      :title="story.title"
      :image="story.img"
      :description="story.description"
       class="pb-16" />

    <Tiles
      tileId="team"
      tileTitle="Meet the team"
      :tiles="employees"
      :btn="join"
      class="pb-16" />

    <Descriptor
      :descriptorId="shop.id"
      :subtitle="shop.subtitle"
      :title="shop.title"
      orientation="left"
      :image="shop.img"
      :description="shop.description"
      class="pb-16" />
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
      img: 'img/welcome.jpg',
      description: 'Charles Moyer founded Moyer Cabinets with a simple philosophy: "The customer is always right.” After 46 years in business, that basic principle still holds true.</br></br>Although the methods of designing and building cabinets have changed over the years, one thing has not: the quality and craftsmanship we put into every cabinet we make.'
    },
    shop: {
      id: 'shop',
      title: 'Serving the Omaha area since 1965',
      img: 'img/old_moyer.jpg',
      description: 'Our shop sits in the historic Vinton Street neighborhood, where we have the finest tools and technologies to make sure you get exactly what you want — perfection. We invite you to join the Moyer family today.'

    },
    join: {
      title: 'Join our team',
      text: 'See Careers',
      route: 'https://www.indeed.com/'
    }
  }),
  computed: {
    ...mapState(['employees'])
  }
}
</script>
