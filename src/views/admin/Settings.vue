<template>
  <v-container id="settings-admin">
    <v-row>
      <v-col>
        <v-col align="center" justify="center">
          <v-row justify="center" class="title blue--text font-weight-black">
            Moyer Cabinets Web Manager
          </v-row>
          <v-row justify="center" class="display-1 font-weight-black py-3">
            Settings
          </v-row>
          <v-row align="center" justify="center" class="pa-16 ma-16">
            <v-row>
              <v-col>
                <v-snackbar
                  v-model="alert"
                  :timeout="timeout"
                  top>
                  <p v-if="errorMsg !== ''" class="error">
                    {{ errorMsg }}
                  </p>
                  <p v-else>
                    {{ message }}
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
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <template v-slot:default="{ open }">
                        <v-row no-gutters>
                          <v-col>
                            Change E-mail
                          </v-col>
                          <v-col
                            cols="10"
                            class="text--secondary">
                            <v-fade-transition leave-absolute>
                              <span
                                v-if="open"
                                key="0">
                                Enter new email, verification e-mail will be sent. You will be logged out until verified.
                              </span>
                            </v-fade-transition>
                          </v-col>
                        </v-row>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-text-field
                        v-model="email"
                        placeholder="E-mail" />
                      <v-btn
                        color="blue"
                        text
                        @click="changeEmail()" >
                        Submit
                      </v-btn>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <template v-slot:default="{ open }">
                        <v-row no-gutters>
                          <v-col>
                            Reset Password
                          </v-col>
                          <v-col
                            cols="10"
                            class="text--secondary">
                            <v-fade-transition leave-absolute>
                              <span
                                v-if="open"
                                key="0">
                                Enter email to reset your password
                              </span>
                            </v-fade-transition>
                          </v-col>
                        </v-row>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-text-field
                        v-model="email"
                        placeholder="E-mail" />
                      <v-btn
                        color="blue"
                        text
                        @click="resetPassword()" >
                        Submit
                      </v-btn>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-btn
                  color="blue"
                  dark
                  @click="logout()"
                  class="my-16" >
                  Logout
                </v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-col>
      </v-col>
    </v-row>  
  </v-container>
</template>

<script>
import { auth } from '@/firebase'

export default {
  name: 'SettingsAdmin',
  data: () => ({
    email: '',
    errorMsg: '',
    message: '',
    alert: false,
    timeout: 2000
  }),
  methods: {
    async resetPassword() {
      this.errorMsg = '';
      this.message = '';

      try {
          await auth.sendPasswordResetEmail(this.email);
          this.message = "Success! Check your email for a reset link.";
          this.alert = true;
      } catch (err) {
          this.errorMsg = err.message;
          this.alert = true;
      }
    },
    async changeEmail() {
      this.errorMsg = '';
      this.message = '';

      try {
          await auth.currentUser.sendEmailVerification();
          await auth.currentUser.updateEmail(this.email);
          this.message = "Success! Email changed.";
          this.alert = true;
          this.$store.dispatch('logout');
      } catch (err) {
          this.errorMsg = err.message;        
          this.alert = true;  
      }
    },    
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>