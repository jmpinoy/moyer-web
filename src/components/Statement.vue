<template>
  <v-container id="statement">
    <v-row align="center" justify="space-around">
      <v-col cols="11" md="6">
        <v-card flat class="px-8">
          <v-col cols="12">
            <v-row class="display-1 font-weight-black py-4">
              <v-col>
                {{ title }}
              </v-col>
            </v-row>
            <v-row class="title font-weight-medium py-4">
              {{ description }}
            </v-row>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="11" md="6">
        <v-card flat class="px-8">
          <v-img
          contain
          :src="image" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Statement',
    data: () => ({
      image: "/img/omaha2.jpg",
      title: "Quality in every cabinet",
      description: "Most cabinet makers charge extra for things like wood drawers, soft-close hinges, and glides. But at Moyer, we offer high standards no matter the job. It’s just what we do.",
    }),
  }
</script>
