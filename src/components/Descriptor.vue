<template>
  <v-container :id="descriptorId">
    <v-row align="center" justify="space-around" v-if="orientation == 'left'">
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
            <v-row class="title blue--text font-weight-black py-4">
              {{ subtitle }}
            </v-row>
            <v-row class="display-1 font-weight-black py-2">
              {{ title }}
            </v-row>
            <v-row class="title font-weight-medium py-4" v-html="description" />
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="space-around" v-if="orientation == 'right'">
      <v-col cols="11" md="6">
        <v-card flat class="px-8">
          <v-col cols="12">
            <v-row class="title blue--text font-weight-black py-4">
              {{ subtitle }}
            </v-row>
            <v-row class="display-2 font-weight-black py-2">
              {{ title }}
            </v-row>
            <v-row class="title font-weight-medium py-4" v-html="description" />
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
    name: 'Descriptor',
    props: {
        descriptorId: {
            type: String,
            default: ''
        },
        orientation: {
            type: String,
            default: 'right'
        },
        subtitle: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        }

    },
    data: () => ({
    }),
  }
</script>
