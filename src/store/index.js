import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

fb.employeesCollection.onSnapshot(snapshot => {
  let employeesArray = []

  snapshot.forEach(doc => {
    let employee = doc.data()
    employee.id = doc.id
    employeesArray.push(employee)
  })

  store.commit('setEmployees', employeesArray)
})

fb.termsCollection.onSnapshot(snapshot => {
  let dataArray = []

  snapshot.forEach(doc => {
    let data = doc.data()
    data.id = doc.id
    dataArray.push(data)
  })

  store.commit('setTerms', dataArray)
})

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

      // change route to dashboard
      if (router.currentRoute.path === '/admin/login') {
        router.push('/admin/dashboard')
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
    // EMPLOYEES
    async createEmployee(data) {
      await fb.employeesCollection.add({
        title: data.name,
        description: data.position,
        img: data.img
      }).then(function() {
        console.log("Employee successfully removed.");
      }).catch(function(err) {
        console.error("Error removing employee: ", err);
      });
    },
    async updateEmployee(data) {
      fb.employeesCollection.doc(data.id).update({        
        title: data.name,
        description: data.position,
        img: data.img
      }).then(function() {
        console.log("Employee successfully removed.");
      }).catch(function(err) {
        console.error("Error removing employee: ", err);
      });
    },
    async removeEmployee(data) {
      fb.employeesCollection.doc(data.id).delete().then(function() {
        console.log("Employee successfully removed.");
      }).catch(function(err) {
        console.error("Error removing employee: ", err);
      });
    },
    // RESIDENTIAL GALLERY
    async createResidentialPost(data) {
      await fb.residentialGalleryCollection.add({
        img: data.img,
        description: data.description,
        color: data.color,
        roomType: data.roomType,
        style: data.style,
        index: data.index
      }).then(function() {
        console.log("Post successfully created.");
      }).catch(function(err) {
        console.error("Error creating post: ", err);
      });
    },
    async updateResidentialPost(data) {
      fb.residentialGalleryCollection.doc(data.id).update({
        img: data.img,
        description: data.description,
        color: data.color,
        roomType: data.roomType,
        style: data.style,
        index: data.index
      }).then(function() {
        console.log("Post successfully updated.");
      }).catch(function(err) {
        console.error("Error updating post: ", err);
      });
    },
    async removeResidentialPost(data) {
      fb.residentialGalleryCollection.doc(data.id).delete().then(function() {
        console.log("Post successfully removed.");
      }).catch(function(err) {
        console.error("Error removing post: ", err);
      });
    },
    // RESIDENTIAL FILTERS
    // COMMERCIAL GALLERY
    async createCommercialPost(data) {
      await fb.commercialGalleryCollection.add({
        img: data.img,
        description: data.description,
        color: data.color,
        roomType: data.roomType,
        style: data.style,
        index: data.index
      }).then(function() {
        console.log("Post successfully created.");
      }).catch(function(err) {
        console.error("Error creating post: ", err);
      });
    },
    async updateCommercialPost(data) {
      fb.commercialGalleryCollection.doc(data.id).update({
        img: data.img,
        description: data.description,
        color: data.color,
        roomType: data.roomType,
        style: data.style,
        index: data.index
      }).then(function() {
        console.log("Post successfully updated.");
      }).catch(function(err) {
        console.error("Error updating post: ", err);
      });
    },
    async removeCommercialPost(data) {
      fb.commercialGalleryCollection.doc(data.id).delete().then(function() {
        console.log("Post successfully removed.");
      }).catch(function(err) {
        console.error("Error removing post: ", err);
      });
    },
    // COMMERCIAL FILTERS
    // TERMS
    async createTerm(data) {
      await fb.termsCollection.add({
        title: data.name,
        description: data.definition,
        img: data.img
      }).then(function() {
        console.log("Term successfully created.");
      }).catch(function(err) {
        console.error("Error creating term: ", err);
      });
    },
    async updateTerm(data) {
      fb.termsCollection.doc(data.id).update({
        title: data.name,
        description: data.definition,
        img: data.img
      }).then(function() {
        console.log("Term successfully updated.");
      }).catch(function(err) {
        console.error("Error updating term: ", err);
      });
    },
    async removeTerm(data) {
      fb.employeesCollection.doc(data.id).delete().then(function() {
        console.log("Term successfully removed.");
      }).catch(function(err) {
        console.error("Error removing term: ", err);
      });
    },
  }
})

export default store