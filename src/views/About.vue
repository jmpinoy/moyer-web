<template>
  <div class="about">
    <Descriptor
      :descriptorId="story.id"
      :subtitle="story.subtitle"
      :title="story.title"
      :image="story.img"
      :description="story.description" />

    <Tiles
      tileId="team"
      tileTitle="Meet the team"
      :tiles="employees"
      :btn="join" />

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
import Tiles from '@/components/Tiles.vue'

export default {
  name: 'About',
  components: {
    Descriptor,
    Tiles
  },
  data: () => ({
    story: {
      id: 'story',
      subtitle: 'Our Story',
      title: 'A family business',
      img: 'img/cabinetPlaceholder.png',
      description: 'Some opening dialogue to set the scene, Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. Ad nam minimum ponderum.<br><br>A second paragraph, shorter this time. Est audiam animal molestiae te. Ex duo eripuit mentitum.'
    },
    shop: {
      id: 'shop',
      subtitle: 'The Shop',
      title: 'Headline about the shop',
      img: 'img/cabinetPlaceholder.png',
      description: 'Our shop is located n a great place. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. Ad nam minimum ponderum.<br><br>A second paragraph, shorter this time. Est audiam animal molestiae te. Ex duo eripuit mentitum.'

    },
    employees: [
      {
        title: 'Rollie',
        description: 'Position',
        img: '/img/imagePlaceholder.png'
      },
      {
        title: 'Eric',
        description: 'Position',
        img: '/img/imagePlaceholder.png'
      },
      {
        title: 'Matt',
        description: 'Position',
        img: '/img/imagePlaceholder.png'
      },
      {
        title: 'Caleb',
        description: 'Position',
        img: '/img/imagePlaceholder.png'
      },
      {
        title: 'Employee1',
        description: 'Position',
        img: '/img/imagePlaceholder.png'
      },
      {
        title: 'Employee2',
        description: 'Position',
        img: '/img/imagePlaceholder.png'
      },
      {
        title: 'Employee3',
        description: 'Position',
        img: '/img/imagePlaceholder.png'
      },
      {
        title: 'Employee4',
        description: 'Position',
        img: '/img/imagePlaceholder.png'
      },
    ],
    join: {
      title: 'Join our team',
      text: 'See Careers',
      route: '/'
    }
  }),
}
</script>
