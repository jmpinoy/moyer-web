<template>
  <v-container id="manage">
    <v-row>
      <v-col>
        <v-col align="center" justify="center">
          <v-row justify="center" class="display-1 font-weight-black py-3">
            Site Manager
          </v-row>
          <v-spacer />
          <v-row align="center" justify="center">
            <v-btn @click="logout">
              Logout
            </v-btn>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Manage',
  components: {
  },
  data: () => ({
  }),
  methods: {
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
  }
}
</script>
