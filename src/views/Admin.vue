<template>  
  <v-container id="admin">
    <v-row>
      <v-col>
        <v-col align="center" justify="center">
          <v-row justify="center" class="title blue--text font-weight-black">
            Login
          </v-row>
          <v-row justify="center" class="display-1 font-weight-black py-3">
            Site Manager
          </v-row>
          <v-row align="center" justify="center" class="pa-16 ma-16">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation>
              <v-text-field
                v-model="user.email"
                :rules="emailRules"
                label="E-mail"
                required />
              <v-text-field
                v-model="user.password"
                :rules="passwordRules"
                label="Password"
                required />
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="login">
                Validate
              </v-btn>
            </v-form>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Admin',
  components: {
  },
  data: () => ({
    valid: true,
    user: {
      email: '',
      password: ''
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must be at least 8 characters',
    ],
  }),
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.user.email,
        password: this.user.password
      })
    }
  }
}
</script>
