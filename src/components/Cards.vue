<template>
  <v-container fluid :id="cardId" :class="bgColor">
    <v-row justify="center">
      <v-col cols="11" md="10" lg="9" xl="7">
        <v-row align="center" justify="center" class="pt-10">
          <v-col cols="10">
          <v-row justify="start" class="display-2 pb-10" v-if="title">
            {{ title }}
          </v-row>
            <v-row justify="center" align="start" v-if="!bottom">
              <v-col cols="11" md="6" v-for="(card, c) in cards" :key="c">
                <v-card flat :class="bgColor">
                  <v-row justify="center">
                    <v-col cols="10">
                      <v-row align="center" justify="center" class="pb-8 title">
                        {{ card.description }}
                      </v-row>
                      <div id="divider" class="pa-0 ma-0" style="background-color:#D6001C; height: 4px; width:48px; border-radius: 25px;" />
                      <v-row class="pt-10 display-2">
                        {{ card.title }}
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <v-row justify="center" align="start" v-if="bottom">
              <v-col cols="11" md="6" v-for="(card, c) in cards" :key="c">
                <v-card flat :class="bgColor">
                  <v-row justify="center">
                    <v-col cols="10">
                      <v-row class="pb-10 display-2">
                        {{ card.title }}
                      </v-row>
                      <div id="divider" class="pa-0 ma-0" style="background-color:#D6001C; height: 4px; width:48px; border-radius: 25px;" />
                      <v-row class="pt-8 title">
                        {{ card.description }}
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Cards',
    props: {
        cardId: {
            type: String,
            default: ''
        },
        cards: {
          type: Array,
          default: () => []
        },
        bottom: {
          type: Boolean,
          default: false
        },
        title: {
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
