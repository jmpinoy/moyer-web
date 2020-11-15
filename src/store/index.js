import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userProfile: {},
    employees: [],
    residentialGallery: [],
    residentialFilters: [],
    commercialGallery: [],
    commercialFilters: [],
    terms: []
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setEmployees(state, val) {
      state.employees = val;
    },
    setResidentialGallery(state, val) {
      state.residentialGallery = val;
    },
    setResidentialFilters(state, val) {
      state.residentialFilters = val;
    },
    setCommercialGallery(state, val) {
      state.commercialGallery = val;
    },
    setCommercialFilters(state, val) {
      state.commercialFilters = val;
    },
    setTerms(state, val) {
      state.terms = val;
    },
  },
  actions: {
    // USERS
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())

      // change route to employees
      if (router.currentRoute.path === '/admin/login') {
        router.push('/admin/employees')
      }
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut()

      // clear user data from state
      commit('setUserProfile', {})

      // redirect to login view
      router.push('/admin/login')
    },
    // STORAGE
    async fetchImageUrl({ commit }, data) {
      var { temp } = '';
      await fb.storage.ref().child(data).getDownloadURL()
        .then(function(result) {
          temp = result;
        });
      return 
    },
    async removeImage({ commit }, data) {

      await fb.storage.ref().child(data).delete()
        .then(function() {
        }).catch(function(err) {
          console.log('Failed to remove: ', err);
        });
    },
    // EMPLOYEES
    async fetchEmployees({ commit }) {
      fb.employeesCollection.onSnapshot(snapshot => {
        let dataArray = []      
        snapshot.forEach(doc => {
          let data = doc.data()
          data.id = doc.id
          dataArray.push(data)
        })
        dataArray.sort((a, b) => (a.index > b.index) ? 1 : -1);
        commit('setEmployees', dataArray)
      })
    },
    async createEmployee({ commit }, data) {
      await fb.employeesCollection.add(data)
      .then(function() {
      }).catch(function(err) {
        console.error("Error creating employee: ", err);
      });
    },
    async updateEmployee({ commit }, data) {
      let update = {
        title: data.title,
        description: data.description
      };
      fb.employeesCollection.doc(data.id).update(update)
      .then(function() {
      }).catch(function(err) {
        console.error("Error updating employee: ", err);
      });
    },
    async removeEmployee({ commit }, data) {
      fb.employeesCollection.doc(data).delete().then(function() {
        fb.employeesCollection.onSnapshot(snapshot => {
          let dataArray = []      
          snapshot.forEach(doc => {
            let data = doc.data()
            data.id = doc.id
            dataArray.push(data)
          })
          dataArray.sort((a, b) => (a.index > b.index) ? 1 : -1);
          var i = 0
          dataArray.forEach(data => {
            fb.employeesCollection.doc(data.id).update({
              index: i
            })
            i++
          })
        })
      }).catch(function(err) {
        console.error("Error removing employee: ", err);
      });
    },
    // RESIDENTIAL GALLERY
    async fetchResidentialGallery({ commit }) {
      fb.residentialGalleryCollection.onSnapshot(snapshot => {
        let dataArray = []      
        snapshot.forEach(doc => {
          let data = doc.data()
          data.id = doc.id
          dataArray.push(data)
        })
        dataArray.sort((a, b) => (a.index > b.index) ? 1 : -1);      
        commit('setResidentialGallery', dataArray)
      })
    },
    async createResidentialPost({ commit }, data) {
      await fb.residentialGalleryCollection.add(data)
      .then(function() {
      }).catch(function(err) {
        console.error("Error creating post: ", err);
      });
    },
    async updateResidentialPost({ commit }, data) {
      fb.residentialGalleryCollection.doc(data.id).update({
        color: data.color,
        roomType: data.roomType,
        style: data.style
      }).then(function() {
      }).catch(function(err) {
        console.error("Error updating post: ", err);
      });
    },
    async removeResidentialPost({ commit }, data) {
      fb.residentialGalleryCollection.doc(data).delete().then(function() {
        fb.residentialGalleryCollection.onSnapshot(snapshot => {
          let dataArray = []      
          snapshot.forEach(doc => {
            let data = doc.data()
            data.id = doc.id
            dataArray.push(data)
          })
          dataArray.sort((a, b) => (a.index > b.index) ? 1 : -1);
          var i = 0
          dataArray.forEach(data => {
            fb.residentialGalleryCollection.doc(data.id).update({
              index: i
            })
            i++
          })
        })
      }).catch(function(err) {
        console.error("Error removing post: ", err);
      });
    },
    // RESIDENTIAL FILTERS
    async fetchResidentialFilters({ commit }) {
      fb.residentialFiltersCollection.onSnapshot(snapshot => {
        let dataArray = []      
        snapshot.forEach(doc => {
          let data = doc.data()
          data.id = doc.id
          dataArray.push(data)
        })      
        commit('setResidentialFilters', dataArray)
      })
    },
    async addResidentialFilters({ commit }, data) {
      fb.residentialFiltersCollection.doc(data.id).update({
        filters: fb.fv.arrayUnion(data.data)
      })
      .then(function() {
      }).catch(function(err) {
        console.error(`Error updating ${data.id}: , ${err}`);
      });
    },
    async removeResidentialFilters({ commit }, data) {
      fb.residentialFiltersCollection.doc(data.id).update({
        filters: fb.fv.arrayRemove(data.data)
      }).then(function() {
      }).catch(function(err) {
        console.error(`Error removing ${data.id}: , ${err}`);
      });
    },
    // COMMERCIAL GALLERY
    async fetchCommercialGallery({ commit }) {
      fb.commercialGalleryCollection.onSnapshot(snapshot => {
        let dataArray = []      
        snapshot.forEach(doc => {
          let data = doc.data()
          data.id = doc.id
          dataArray.push(data)
        })
        dataArray.sort((a, b) => (a.index > b.index) ? 1 : -1);      
        commit('setCommercialGallery', dataArray)
      })
    },
    async createCommercialPost({ commit }, data) {
      await fb.commercialGalleryCollection.add(data)
      .then(function() {
      }).catch(function(err) {
        console.error("Error creating post: ", err);
      });
    },
    async updateCommercialPost({ commit }, data) {
      fb.commercialGalleryCollection.doc(data.id).update({
        color: data.color,
        roomType: data.roomType,
        style: data.style
      }).then(function() {
      }).catch(function(err) {
        console.error("Error updating post: ", err);
      });
    },
    async removeCommercialPost({ commit }, data) {
      fb.commercialGalleryCollection.doc(data).delete().then(function() {
        fb.commercialGalleryCollection.onSnapshot(snapshot => {
          let dataArray = []      
          snapshot.forEach(doc => {
            let data = doc.data()
            data.id = doc.id
            dataArray.push(data)
          })
          dataArray.sort((a, b) => (a.index > b.index) ? 1 : -1);
          var i = 0
          dataArray.forEach(data => {
            fb.commercialGalleryCollection.doc(data.id).update({
              index: i
            })
            i++
          })
        })
      }).catch(function(err) {
        console.error("Error removing post: ", err);
      });
    },
    // COMMERCIAL FILTERS
    async fetchCommercialFilters({ commit }) {
      fb.commercialFiltersCollection.onSnapshot(snapshot => {
        let dataArray = []      
        snapshot.forEach(doc => {
          let data = doc.data()
          data.id = doc.id
          dataArray.push(data)        })
      
        commit('setCommercialFilters', dataArray)
      })
    },
    async addCommercialFilters({ commit }, data) {
      fb.commercialFiltersCollection.doc(data.id).update({
        filters: fb.fv.arrayUnion(data.data)
      })
      .then(function() {
      }).catch(function(err) {
        console.error(`Error updating ${data.id}: , ${err}`);
      });
    },
    async removeCommercialFilters({ commit }, data) {
      fb.commercialFiltersCollection.doc(data.id).update({
        filters: fb.fv.arrayRemove(data.data)
      }).then(function() {
      }).catch(function(err) {
        console.error(`Error removing ${data.id}: , ${err}`);
      });
    },
    // TERMS
    async fetchTerms({ commit }) {
      fb.termsCollection.onSnapshot(snapshot => {
        let dataArray = []      
        snapshot.forEach(doc => {
          let data = doc.data()
          data.id = doc.id
          dataArray.push(data)
        })
        dataArray.sort((a, b) => (a.index > b.index) ? 1 : -1);      
        commit('setTerms', dataArray)
      })
    },
    async createTerm({ commit }, data) {
      await fb.termsCollection.add(data).then(function() {
      }).catch(function(err) {
        console.error("Error creating term: ", err);
      });
    },
    async updateTerm({ commit }, data) {
      fb.termsCollection.doc(data.id).update({
        title: data.title,
        description: data.description
      })
      .then(function() {
      }).catch(function(err) {
        console.error("Error updating term: ", err);
      });
    },
    async removeTerm({ commit }, data) {
      fb.termsCollection.doc(data).delete().then(function() {
        fb.termsCollection.onSnapshot(snapshot => {
          let dataArray = []      
          snapshot.forEach(doc => {
            let data = doc.data()
            data.id = doc.id
            dataArray.push(data)
          })
          dataArray.sort((a, b) => (a.index > b.index) ? 1 : -1);
          var i = 0
          dataArray.forEach(data => {
            fb.termsCollection.doc(data.id).update({
              index: i
            })
            i++
          })
        })
      }).catch(function(err) {
        console.error("Error removing term: ", err);
      });
    },
  }
})

export default store