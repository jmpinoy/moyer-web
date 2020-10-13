<template>
  <div class="components">
    <ContactSection />
    <Statement />
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
import ContactSection from '@/components/ContactSection'

export default {
  name: 'Components',
  components: {
    WorkSamples,
    Testimonials,
    HeroImage,
    Statement,
    ContactSection,
  }
}
</script>
