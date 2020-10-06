<template>
  <div class="components">
    <HelloWorld />
    <WorkSamples />
    <HelloWorld />
    <Testimonials />


  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import WorkSamples from '@/components/WorkSamples'
import Testimonials from '@/components/Testimonials'

export default {
  name: 'Components',
  components: {
    HelloWorld,
    WorkSamples,
    Testimonials,
  }
}
</script>
