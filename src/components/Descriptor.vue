<template>
  <v-container fluid :id="descriptorId" :class="bgColor">
    <v-row justify="center" class="py-10">
      <v-col cols="11" md="10" lg="9" xl="7">
        <v-row align="center" justify="space-around" v-if="orientation == 'left'">
          <v-col cols="11" md="6">
            <v-card flat class="px-8" :class="bgColor">
              <v-img
              contain
              :src="image"
              style="border-radius: 25px;" />
            </v-card>
          </v-col>
          <v-col justify="center" align="left" cols="12" md="6">
            <v-card flat class="px-8" :class="bgColor">
              <v-col cols="12">
                <v-row class="display-2 pb-6" v-html="title" />
                <div id="divider" class="pa-0 ma-0" style="background-color:#D6001C; height: 4px; width:48px; border-radius: 25px;" />
                <v-row class="title pt-7" v-html="description" />
                <v-row class="pt-7" v-if="button">
                  <v-col cols="12" md="8" lg="3" class="pa-0 ma-0">
                      <v-btn dark large class="body-2 primary font-weight-bold" :to="broute">
                        {{ bname }}
                      </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="space-around" v-if="orientation == 'right'">
          <v-col justify="center" align="left" cols="12" md="6">
            <v-card flat class="px-8" :class="bgColor">
              <v-col cols="12" class="pt-4">
                <v-row class="display-2 pb-6" v-html="title" />
                <div id="divider" class="pa-0 ma-0" style="background-color:#D6001C; height: 4px; width:48px; border-radius: 25px;" />
                <v-row class="title pt-7" v-html="description" />
                <v-row class="pt-7" v-if="button">
                  <v-col cols="12" md="8" lg="3" class="pa-0 ma-0">
                      <v-btn dark large class="body-2 primary font-weight-bold" :to="broute">
                        {{ bname }}
                      </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-card>
          </v-col>
          <v-col cols="11" md="6">
            <v-card flat class="px-8" :class="bgColor">
              <v-img
              contain
              :src="image"
              style="border-radius: 25px;" />
            </v-card>
          </v-col>
        </v-row>
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
        bname: {
            type: String,
            default: ''
        },
        broute: {
            type: String,
            default: ''
        },
        button: {
            type: Boolean,
            default: false
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
        },
        bgColor: {
          type: String,
          default: ''
        }

    },
    data: () => ({
    }),
  }
</script>
