<template>
  <v-container :id="cardId" class="py-16">
    <v-row align="center" justify="center">
      <v-col>
        <v-row justify="center" v-if="cardSubtitle" class="subtitle-1 blue--text font-weight-black py-4">
          {{ cardSubtitle }}
        </v-row>
        <v-row justify="center" v-if="cardTitle" class="display-1 font-weight-black pb-15">
          {{ cardTitle }}
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="11" md="6" v-for="(card, c) in cards" :key="c">
            <v-card outlined flat class="mx-2 px-8 text-center">
              <v-row>
                <v-col>
                  <v-row align="center" justify="center" class="py-2 font-weight-bold headline">
                    {{ card.title }}
                  </v-row>
                  <v-row align="center" justify="center" class="py-2 font-weight-meduim body-1">
                    {{ card.description }}
                  </v-row>
                  <v-row v-if="card.subDescription" align="center" justify="center" class="py-2 font-weight-meduim body-1">
                    {{ card.subDescription }}
                  </v-row>
                  <v-row v-if="card.link" align="center" justify="center" class="py-2 font-weight-meduim body-1">
                    <a>
                      {{ card.link }}
                    </a>
                  </v-row>
                </v-col>
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
    name: 'Cards',
    props: {
        cardId: {
            type: String,
            default: ''
        },
        cardTitle: {
            type: String,
            default: ''
        },
        cardSubtitle: {
            type: String,
            default: ''
        },
        cards: {
          type: Array,
          default: () => []
        }
    },
    data: () => ({
    }),
  }
</script>
