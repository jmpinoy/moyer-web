<template>
  <div id="resources">
    <Descriptor
      :descriptorId="heroImage.id"
      :title="heroImage.title"
      orientation="left"
      :image="heroImage.img"
      :description="heroImage.description"
      class="pb-16" />

    <Tiles
      tileId="terms"
      tileSubtitle="Common Terms"
      tileTitle="Common cabinetry terms"
      :tiles="terms"
      class="pb-16" />

    <Cards
      bottom
      title="Our Vendors"
      cardId="partners"
      cardSubtitle="Our Partners"
      cardTitle="A headline about vendors"
      :cards="partners"
      class="pb-16" />
      
    <v-row justify="center" align="center" class="background">
      <v-col cols="11">
        <v-row justify="center" class="text-center display-2 py-10">
          Interested in partnering?
        </v-row>
        <v-row justify="center">            
          <v-btn large class="primary title" to="/contact">
            Contact Us
          </v-btn>
        </v-row>
        <v-row justify="center" class="text-center title py-10">
          We’re always looking for new vendors and partners.
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Descriptor from '@/components/Descriptor.vue'
import Tiles from '@/components/Tiles.vue'
import Cards from '@/components/Cards.vue'
import { mapState } from 'vuex'

export default {
  name: 'Resources',
  components: {
    Descriptor,
    Tiles,
    Cards
  },
  data: () => ({
    heroImage: {
      id: 'commonTerms',
      subtitle: 'Common Terms',
      title: "A cabinet maker's vocabulary",
      img: 'https://firebasestorage.googleapis.com/v0/b/tutorial-crud-app.appspot.com/o/siteImages%2Fresources-1.jpg?alt=media&token=efaac2b6-309c-4fc6-925a-67e3f175b7b7',
      description: 'When you’re in the market for custom cabinets, it’s helpful to equip yourself with some common cabinetry terms.<br><br>The more you know, the more you can imagine.'
    },
    partners: [
      {
        title: 'Daniels Olsen Products',
        description: 'Melamine Sheet Goods',
        link: ''
      },
      {
        title: 'Liberty Hardwoods',
        description: 'Hardwood Lumber (Oak, Birch, Beech, Maple , Walnut)',
        link: ''
      },
      {
        title: 'Oharco',
        description: 'Blum Hinges',
        link: ''
      },
      {
        title: 'Hardware Resources',
        description: 'Drawer Glides, Drawer Boxes',
        link: ''
      },
      {
        title: 'Diamond Vogel',
        description: 'Aquinity Paint',
        link: ''
      },
      {
        title: 'Jeffrey Alexander',
        description: 'Decorative Hardware',
        link: ''
      }
    ],
  }),
  computed: {
    ...mapState(['terms'])
  }
}
</script>
