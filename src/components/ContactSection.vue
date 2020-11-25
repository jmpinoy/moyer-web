<template>
  <v-container id="contactSection">
    <v-row align="center" justify="space-around">
      <v-col cols="11" md="6">
        <v-card flat class="px-8">
          <v-img
          contain
          :src="image" />
        </v-card>
      </v-col>
      <v-col cols="11" md="6">
        <v-card flat class="px-8">
          <v-col cols="12">
            <v-row class="display-1 font-weight-black py-4">
              {{ title }}
            </v-row>
            <v-row class="title font-weight-medium py-4">
              {{ description }}
            </v-row>
            <v-row justify="start" align="center" class="py-4">
              <v-btn outlined large color="blue" @click="GoTo(button.route)">
                {{ button.name }}
              </v-btn>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ContactSection',
    data: () => ({
      image: "/img/moyer_family.jpg",
      title: "Got an idea? We’ll make it happen.",
      description: "With state-of-the-art tools and technologies, our team will help you find the perfect cabinet solution that fits your needs.",
      button: {
        name: 'Contact page',
        route: '/contact'
      }
    }),
    methods: {
      GoTo(route) {
        return this.$router.push(route);
      }
    }
  }
</script>
