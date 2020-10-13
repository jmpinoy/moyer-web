<template>
  <v-app>
    <SiteNav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SiteNav from './components/SiteNav';

export default {
  name: 'App',

  components: {
    SiteNav,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Mulish');

$body-font-family: 'Mulish', sans-serif;
$title-font-family: 'Mulish', sans-serif;
$heading-font-family: 'Cardo', sans-serif;

.v-application {
  font-family: $body-font-family, sans-serif !important;
  .headline, .title, .subtitle-1, .subtitle-2, .display-1, .display-2 {
    font-family: $title-font-family, sans-serif !important;
  }
  .display-3, .display-4 {
    font-family: $heading-font-family, sans-serif !important;
  }
}
</style>
