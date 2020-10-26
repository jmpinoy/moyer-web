<template>
  <v-container id="worksamples" fluid>
    <v-row>
      <v-row justify="center" align="center" class="mx-12">
        <v-col v-for="sample in samples" :key="sample.title" cols="10" md="3">
          <v-card flat class="py-6">
            <v-row align="center" justify="center">
              <v-img
                  :src="require('../assets/logo.svg')"
                  contain
                  height="100" />
            </v-row>
            <v-row align="center" justify="center" class="font-weight-medium body-1">
                {{ sample.title }}
            </v-row>
            <v-row align="center" justify="center" class="body-2">
            <a :href="sample.href">
                {{ sample.description }}
            </a>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'WorkSamples',

    data: () => ({
      color: '#f4f6fb',
      samples: [
        {
          title: 'Work Sample 1',
          description: 'Descriptive! Residential gallery link.',
          href: 'https://vuetifyjs.com',
        },
        {
          title: 'Work Sample 2',
          description: 'Descriptive! Residential gallery link.',
          href: 'https://vuetifyjs.com',
        },
        {
          title: 'Work Sample 3',
          description: 'Descriptive! Residential gallery link.',
          href: 'https://vuetifyjs.com',
        },
        {
          title: 'Work Sample 4',
          description: 'Descriptive! Residential gallery link.',
          href: 'https://vuetifyjs.com',
        },
      ],
    }),
  }
</script>