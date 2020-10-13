<template>
  <div class="home">
    <HeroImage />
    <Statement />
    <WorkSamples />
    <Testimonials />
  </div>
</template>

<script>
import HeroImage from '@/components/HeroImage.vue'
import Statement from '@/components/Statement.vue'
import WorkSamples from '@/components/WorkSamples.vue'
import Testimonials from '@/components/Testimonials.vue'

export default {
  name: 'Home',
  components: {
    HeroImage,
    Statement,
    WorkSamples,
    Testimonials
  }
}
</script>
