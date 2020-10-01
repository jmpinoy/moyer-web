<template>
  <div class="components">
    <HelloWorld />
    <WorkSamples />
    <HelloWorld />


  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import WorkSamples from '@/components/WorkSamples'

export default {
  name: 'Components',
  components: {
    HelloWorld,
    WorkSamples,
  }
}
</script>
