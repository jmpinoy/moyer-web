<template>
  <div id="resources">
    <Descriptor
      :descriptorId="heroImage.id"
      :subtitle="heroImage.subtitle"
      :title="heroImage.title"
      orientation="left"
      :image="heroImage.img"
      :description="heroImage.description"
      class="pb-16" />

    <Tiles
      tileId="terms"
      tileSubtitle="Common Terms"
      tileTitle="Common cabinet terms"
      :tiles="terms"
      class="pb-16" />

    
    <Cards
      cardId="partners"
      cardSubtitle="Our Partners"
      cardTitle="A headline about vendors"
      :cards="partners"
      class="pb-16" />
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
      img: 'img/diagram.png',
      description: 'Something about knowing the common terms, and being empowered to learn a little bit before you even come into the shop for a consultation.'
    },
    partners: [
      {
        title: 'Vendor name 1',
        description: 'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.',
        link: 'Link to vendor site'
      },
      {
        title: 'Vendor name 2',
        description: 'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.',
        link: 'Link to vendor site'
      },
      {
        title: 'Vendor name 3',
        description: 'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.',
        link: 'Link to vendor site'
      },
      {
        title: 'Vendor name 4',
        description: 'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.',
        link: 'Link to vendor site'
      },
    ],
  }),
  computed: {
    ...mapState(['terms'])
  }
}
</script>
