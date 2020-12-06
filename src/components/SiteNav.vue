<template>
  <v-container id="site-nav">
    <v-app-bar
    app
    height="120"
    flat
    color="white"
    hide-on-scroll>
      <!-- Logo/Title -->
      <v-row justify="center" class="pt-3">
        <v-toolbar-title id="logo" class="blue--text font-weight-medium">
          <v-img @click="GoHome" src="https://firebasestorage.googleapis.com/v0/b/moyerweb-84ddb.appspot.com/o/siteImages%2Fmoyer-horizontal.svg?alt=media&token=eda83c67-e458-4853-ae8a-94aed42679db" />
        </v-toolbar-title>
      </v-row>

      <v-spacer />
      <v-spacer />

      <!-- Navigation Buttons -->
      <v-toolbar-items v-for="button in buttons" :key="button.name" class="hidden-md-and-down">
        <v-btn
          :to="button.route"
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
            <v-list-item :to="button.route" link>
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
  name: 'SiteNav',
  data: () => ({
    drawer: false,
    buttons: [
      {
        name: 'Home',
        icon: '',
        route: '/',
      },
      {
        name: 'About',
        icon: '',
        route: '/about',
      },
      {
        name: 'Residential',
        icon: '',
        route: '/residential',
      },
      {
        name: 'Commercial',
        icon: '',
        route: '/commercial',
      },
      {
        name: 'Resources',
        icon: '',
        route: '/resources',
      },
      {
        name: 'Contact',
        icon: '',
        route: 'contact',
      },
    ],
  }),
  methods: {
    GoHome() {
      return this.$router.push('/');
    }
  }
}
</script>

<style>
#logo {
  cursor: pointer;
}
</style>