<template>
  <div class="components">
    <Statement />
    <Footer />
    <HeroImage />
    <Testimonials />
    <WorkSamples />
  </div>
</template>

<script>
import WorkSamples from '@/components/WorkSamples'
import Testimonials from '@/components/Testimonials'
import HeroImage from '@/components/HeroImage'
import Statement from '@/components/Statement'
import Footer from '@/components/Footer'

export default {
  name: 'Components',
  components: {
    Footer,
    WorkSamples,
    Testimonials,
    HeroImage,
    Statement,
  }
}
</script>
