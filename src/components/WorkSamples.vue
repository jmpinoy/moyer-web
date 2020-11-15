<template>
  <v-container id="worksamples">
    <v-row justify="center" align="center">
      <v-col>
        <v-row justify="center" align="center" class="mx-12">
          <v-col v-for="sample in samples" :key="sample.title" cols="10" md="3">
            <v-card flat class="py-6">
              <v-row align="center" justify="center">
                <v-img
                  :src="sample.img"
                  contain
                  height="100" />
              </v-row>
              <v-row align="center" justify="center" class="font-weight-medium body-1">
                  {{ sample.title }}
              </v-row>
              <v-row align="center" justify="center" class="body-2">
              <a :href="sample.route">
                  {{ sample.description }}
              </a>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
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
          img: 'img/logo.svg',
          title: 'Work Sample 1',
          description: 'Descriptive! Residential gallery link.',
          route: '/residential',
        },
        {
          img: 'img/logo.svg',
          title: 'Work Sample 2',
          description: 'Descriptive! Residential gallery link.',
          route: '/residential',
        },
        {
          img: 'img/logo.svg',
          title: 'Work Sample 3',
          description: 'Descriptive! Residential gallery link.',
          route: '/residential',
        },
        {
          img: 'img/logo.svg',
          title: 'Work Sample 4',
          description: 'Descriptive! Residential gallery link.',
          route: '/residential',
        },
      ],
    }),
  }
</script>