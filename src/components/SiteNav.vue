<template>
  <v-container class="site-nav">
    <v-app-bar
    app
    extended
    flat>
      <!-- Logo/Title -->
      <div class="d-flex align-center">
        <v-toolbar-title to="/" class="blue--text font-weight-medium">
          <v-img
          contain
          src="/img/moyerBlack.png" />
        </v-toolbar-title>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

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
      // Remove this route for production //
      {
        name: 'Components',
        icon: '',
        route: '/components',
      },
      // -------------------------------- //
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
}
</script>
