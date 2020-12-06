<template>
  <div id="home">
    <HeroImage class="pb-16" />
    <Statement class="pb-16" />
    <WorkSamples class="pb-16" />
    <Cards cardId="testimonials" :cards="testimonials" class="pb-16" />
    <Contact class="pb-16" />
  </div>
</template>

<script>
import HeroImage from '@/components/HeroImage.vue'
import Statement from '@/components/Statement.vue'
import WorkSamples from '@/components/WorkSamples.vue'
import Cards from '@/components/Cards.vue'
import Contact from '@/components/ContactSection.vue'

export default {
  name: 'Home',
  components: {
    HeroImage,
    Statement,
    WorkSamples,
    Cards,
    Contact
  },
  data: () => ({
    testimonials: [
      {
        title: 'Matt R.',
        description: '“Thank you so much for all your hard work. You made our dream a reality. Our kitchen remodel turned out so much better than I had imagined it.”',
      },
      {
        title: 'Pier M.',
        description: '“I want to say your company was very nice to work with. Your attention to detail and your craftsmanship were second to none. “',
      },
    ],
  }),
}
</script>
