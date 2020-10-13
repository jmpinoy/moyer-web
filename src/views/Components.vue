<template>
  <div class="components">
    <HeroImage />
    <Testimonials />
    <WorkSamples />
  </div>
</template>

<script>
import WorkSamples from '@/components/WorkSamples'
import Testimonials from '@/components/Testimonials'
import HeroImage from '@/components/HeroImage'

export default {
  name: 'Components',
  components: {
    WorkSamples,
    Testimonials,
    HeroImage,
  }
}
</script>
