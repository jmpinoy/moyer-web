<template>
  <div class="about">
    <Descriptor
      :descriptorId="story.id"
      :subtitle="story.subtitle"
      :title="story.title"
      :image="story.img"
      :description="story.description" />

    <Team />

    <Descriptor
      :descriptorId="shop.id"
      :subtitle="shop.subtitle"
      :title="shop.title"
      orientation="left"
      :image="shop.img"
      :description="shop.description" />
  </div>
</template>

<script>
import Descriptor from '@/components/Descriptor.vue'
import Team from '@/components/Team.vue'

export default {
  name: 'About',
  components: {
    Descriptor,
    Team
  },
  data: () => ({
    story: {
      id: 'ourStory',
      subtitle: 'Our Story',
      title: 'A family business',
      img: '/img/cabinetPlaceholder.png',
      description: 'Some opening dialogue to set the scene, Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. Ad nam minimum ponderum.<br><br>A second paragraph, shorter this time. Est audiam animal molestiae te. Ex duo eripuit mentitum.'
    },
    shop: {
      id: 'shop',
      subtitle: 'The Shop',
      title: 'Headline about the shop',
      img: '/img/cabinetPlaceholder.png',
      description: 'Our shop is located in a great place. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. Ad nam minimum ponderum.<br><br>A second paragraph, shorter this time. Est audiam animal molestiae te. Ex duo eripuit mentitum.'
    }
  }),
}
</script>
