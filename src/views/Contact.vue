<template>
  <div id="contact">
    <Descriptor
      :descriptorId="story.id"
      :title="story.title"
      :image="story.img"
      :description="story.description"
      class="pb-16" />

    <Cards
      cardId="testimonials"
      :cards="testimonials"
      bgColor="background"
      class="pb-16" />    
  </div>
</template>

<script>
import Descriptor from '@/components/Descriptor.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'Contact',
  components: {
    Descriptor,
    Cards
  },
  data: () => ({
    story: {
      id: 'contact',
      title: 'Build your custom cabinet today',
      img: 'https://firebasestorage.googleapis.com/v0/b/tutorial-crud-app.appspot.com/o/siteImages%2Fcontact-1.jpg?alt=media&token=8bef7f2d-ff07-479c-9ad5-9ff27ef2dbee',
      description: '402.709.2039<br>moyercabinets@gmail.com<br>1630 Vinton St. Omaha, NE 68108<br>Open 7am - 3:30pm, M - F'
    },
    testimonials: [
      {
        title: 'Mary T.',
        description: '“What makes your company stand out: you were able to install my kitchen already painted. Other companies said no when your company said yes.”',
        link: ''
      },
      {
        title: 'Scott L.',
        description: '“I can’t thank you enough for your hard work. My kitchen is amazing. Sitting down with you with the design process, I was able to see my kitchen before you started. Thank you.”',
        link: ''
      },
    ],
  }),
}
</script>
