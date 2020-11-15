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
        title: 'Client 1',
        description: 'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittanture necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.',
        subDescription: 'Client name, Company',
        link: ''
      },
      {
        title: 'Client 2',
        description: 'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittanture necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.',
        subDescription: 'Client name, Company',
        link: ''
      },
    ],
  }),
}
</script>
