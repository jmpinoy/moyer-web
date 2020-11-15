<template>
  <v-container id="login">
    <v-row>
      <v-col>
        <v-col align="center" justify="center">
          <v-row justify="center" class="title blue--text font-weight-black">
            Login
          </v-row>
          <v-row justify="center" class="display-1 font-weight-black py-3">
            Moyer Cabinets Web Manager
          </v-row>
          <v-snackbar
            light
            v-model="alert"
            :timeout="timeout"
            top>
            <p>
              {{ errorMsg }}
            </p>
            <template v-slot:action="{ attrs }">
              <v-btn
                color="blue"
                text
                v-bind="attrs"
                @click="alert = false" >
                Close
              </v-btn>
            </template>
          </v-snackbar>
          <v-row v-if="!forgot" align="center" justify="center" class="pa-16 ma-16">
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
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
                label="Password"
                required />
                <v-col cols="6">
                  <v-row justify="center">
                    <v-btn
                      :disabled="!valid"
                      color="blue"
                      dark
                      @click="login()"
                      class="ma-4">
                      Login
                    </v-btn>
                  </v-row>
                  <v-row justify="center">
                    <v-btn
                      color="blue"
                      small
                      text
                      @click="forgot = true" >
                      Forgot Password
                    </v-btn>
                  </v-row>
                </v-col>
            </v-form>
          </v-row>
          <v-row v-else align="center" justify="center" class="pa-16 ma-16">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation>
              <v-text-field
                v-model="user.email"
                :rules="emailRules"
                label="E-mail"
                required />
                <v-col cols="6">
                  <v-row justify="center">
                    <v-btn
                      :disabled="!valid"
                      color="blue"
                      dark
                      @click="resetPassword()"
                      class="ma-4">
                      Send
                    </v-btn>
                  </v-row>
                  <v-row justify="center">
                    <v-btn
                      color="blue"
                      small
                      text
                      @click="forgot = false" >
                      Sign In
                    </v-btn>
                  </v-row>
                </v-col>
            </v-form>
          </v-row>
        </v-col>
      </v-col>
    </v-row>    
    <router-view />
  </v-container>
</template>

<script>
import { auth } from '@/firebase'

export default {
  name: 'Login',
  components: {
  },
  data: () => ({
    forgot: false,
    valid: false,
    show: false,
    errorMsg: '',
    alert: false,
    timeout: 2500,
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
    async login() {
      this.errorMsg = '';

      try {
        const { user } = await auth.signInWithEmailAndPassword(this.user.email, this.user.password);
        this.$store.dispatch('login', {
          email: this.user.email,
          password: this.user.password
        });
      } catch (err) {
          this.errorMsg = err.message;
          this.alert = true;
      }
    },    
    async resetPassword() {
      this.errorMsg = '';

      try {
          await auth.sendPasswordResetEmail(this.user.email);
          this.errorMsg = "Success! Check your email for a reset link.";
          this.alert = true;
      } catch (err) {
          this.errorMsg = err.message;
          this.alert = true;
      }
    },
  }
}
</script>
