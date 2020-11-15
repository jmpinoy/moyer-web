<template>
  <div id="contact">
    <Descriptor
      :descriptorId="story.id"
      :subtitle="story.subtitle"
      :title="story.title"
      :image="story.img"
      :description="story.description"
      class="pb-16" />

    <Cards cardId="testimonials" :cards="testimonials" class="pb-16" />
    <WorkSamples class="pb-16" />
    
  </div>
</template>

<script>
import Descriptor from '@/components/Descriptor.vue'
import Cards from '@/components/Cards.vue'
import WorkSamples from '@/components/WorkSamples.vue'

export default {
  name: 'Contact',
  components: {
    Descriptor,
    Cards,
    WorkSamples,
  },
  data: () => ({
    story: {
      id: 'contact',
      subtitle: 'Contact Us',
      title: 'Build your custom cabinet today',
      img: 'img/cabinetPlaceholder.png',
      description: '402.709.2039<br>moyercabinets@gmail.com<br>1630 Vinton St. Omaha, NE 68108<br>Open 7am - 3:30pm, M - F'
    },
    testimonials: [
      {
        title: 'Client 3',
        description: 'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittanture necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.',
        subDescription: 'Client name, Company',
        link: ''
      },
      {
        title: 'Client 4',
        description: 'Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittanture necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.',
        subDescription: 'Client name, Company',
        link: ''
      },
    ],
  }),
}
</script>
