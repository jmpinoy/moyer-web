<template>
  <v-container class="admin-nav">
    <v-app-bar
    app
    height="80"
    flat
    color="white"
    hide-on-scroll>
      <!-- Logo/Title -->
      <v-row justify="center" class="pt-3">
        <v-toolbar-title id="logo" class="blue--text font-weight-medium">
          <h2  @click="GoHome"> 
          Moyer Cabinets
          </h2>
        </v-toolbar-title>
      </v-row>

      <v-spacer />
      <v-spacer />

      <!-- Navigation Buttons -->
      <v-toolbar-items v-for="button in buttons" :key="button.name" class="hidden-md-and-down">
        <v-btn
          @click="GoTo(button.route)"
          text>
        {{ button.name }}
        </v-btn>
      </v-toolbar-items>
      <!-- Nav drawer -->
      <v-app-bar-nav-icon class="hidden-lg-and-up" @click="drawer = true" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      class="hidden-lg-and-up"
      temporary>
        <v-list nav dense>
          <v-list-item-group v-for="button in buttons" :key="button.name">
            <v-list-item @click="GoTo(button.route)" link>
              <v-list-item-icon>
                {{ button.icon }}
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ button.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  </v-container>
</template>

<script>

export default {
  name: 'AdminNav',
  data: () => ({
    drawer: false,
    buttons: [
      {
        name: 'Dashboard',
        icon: '',
        route: '/admin/dashboard',
      },
      {
        name: 'Employees',
        icon: '',
        route: '/admin/employees',
      },
      {
        name: 'Residential',
        icon: '',
        route: '/admin/residential',
      },
      {
        name: 'Commercial',
        icon: '',
        route: '/admin/commercial',
      },
      {
        name: 'Terms',
        icon: '',
        route: '/admin/terms',
      },
      {
        name: 'Users',
        icon: '',
        route: '/admin/users',
      },
      {
        name: 'Settings',
        icon: '',
        route: '/admin/settings',
      }
    ],
  }),
  methods: {
    GoHome() {
      return this.$router.push('/admin/dashboard');
    },
    GoTo(route) {
      return this.$router.push(route);
    }
  }
}
</script>

<style>
#logo {
  cursor: pointer;
}
</style>