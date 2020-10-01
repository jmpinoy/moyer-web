<template>
  <div class="components">
      <HelloWorld />
      <Footer />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Footer from '@/components/Footer'


export default {
  name: 'Components',
  components: {
    HelloWorld,
    Footer
  }
}
</script>
