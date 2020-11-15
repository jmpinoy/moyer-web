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
