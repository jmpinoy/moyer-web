<template>
  <v-container class="pa-8" id="worksamples" fluid v-bind:style="{ backgroundColor: color}">
    <v-row>
      <v-col v-for="sample in samples" :key="sample.title" >
        <v-card flat class="pa-md-8 ma-15 flat" v-bind:style="{ backgroundColor: color}">
            <v-row align="center" justify="center">
                <v-img
                    :src="require('../assets/logo.svg')"
                    class="my-3"
                    contain
                    height="200"
                />
            </v-row>
            <v-row align="center" justify="center" class="font-weight-bold display-1 mb-3">
                {{ sample.title }}
            </v-row>
            <v-row align="center" justify="center" class="font-weight-medium display-0 mb-5">
            <a
                :href="sample.href"
            >
                {{ sample.description }}
            </a>
            </v-row>
        </v-card>
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
          title: 'Work Sample 1',
          description: 'Cabinet Desc. ',
          href: 'https://vuetifyjs.com',
        },
        {
          title: 'Work Sample 2',
          description: 'Cabinet Desc. ',
          href: 'https://vuetifyjs.com',
        },
        {
          title: 'Work Sample 3',
          description: 'Cabinet Desc. ',
          href: 'https://vuetifyjs.com',
        },
        {
          title: 'Work Sample 4',
          description: 'Cabinet Desc. ',
          href: 'https://vuetifyjs.com',
        },
      ],
    }),
  }
</script>