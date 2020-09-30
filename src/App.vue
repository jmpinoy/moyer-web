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
