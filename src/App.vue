<template>
  <v-app>
    <SiteNav v-if="switchNav" />
    <AdminNav v-if="!switchNav" />
    <v-main>
      <router-view />
    </v-main>
    <Footer  />
  </v-app>
</template>

<script>
import SiteNav from './components/SiteNav';
import AdminNav from './components/admin/AdminNav';
import Footer from './components/Footer';
import { 
  mapState,
  mapMutations,
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'App',

  components: {
    SiteNav,
    AdminNav,
    Footer
  },
  computed: {
    ...mapState(['userProfile']),
    switchNav() {
      return Object.keys(this.userProfile).length < 1;
    }
  },
  created() {
    this.initializeStore();
    if (Object.keys(this.userProfile).length < 1) {
      window.addEventListener('beforeunload', this.logout);
    }
  },
  methods: {
    ...mapActions([
      'fetchEmployees',
      'fetchResidentialGallery',
      'fetchResidentialFilters',
      'fetchCommercialGallery',
      'fetchCommercialFilters',
      'fetchTerms',
      'logout'
    ]),
    initializeStore() {
      this.fetchEmployees();
      this.fetchResidentialGallery();
      this.fetchResidentialFilters();
      this.fetchCommercialGallery();
      this.fetchCommercialFilters();
      this.fetchTerms();
    }
  },
  data: () => ({
  }),
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Sans');

.v-application {
  font-family: 'PT Sans', sans-serif !important;  
  .display-3, .display-4 {
    font-family: 'PT Sans', sans-serif !important;
    font-size: 44px;
    font-weight: bold;
  }
  .headline, .display-1, .display-2 {
    font-family: 'PT Sans', sans-serif !important;
    font-size: 24px;
    font-weight: bold;
  }
  .title, .subtitle-1 {
    font-family: 'PT Sans', sans-serif !important;
    font-size: 18px;
    font-weight: normal;
  }
  .subtitle-2, .body-1, .body-2 {
    font-family: 'PT Sans', sans-serif !important;
    font-size: 14px;
    font-weight: normal;
  }
}
</style>
