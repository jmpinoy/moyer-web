import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
          primary: '#D6001C',
          secondary: '#FBE6E8',
          accent: '#333333',
          background: '#F7F7F7',
      }
    }
  }
});
