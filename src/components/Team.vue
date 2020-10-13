<template>
  <v-container id="team" class="py-16">
    <template>
      <v-row>
        <v-col>
          <v-row justify="center" class="display-2 font-weight-black pb-15">
            Meet the team
          </v-row>
          <v-row>
            <v-col
            v-for="member in members"
            :key="member.name"
            class="d-flex child-flex"
            cols="3">
              <v-card class="text-center" flat>
                <v-img
                  :src="member.img"
                  class="grey lighten-2" />              
                  <v-card-text class="title font-weight-bold">
                    {{ member.name }}
                  </v-card-text>
                  <v-card-text class="subtitle-1 font-weight-medium">
                    {{ member.position }}
                  </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center" class="display-1 font-weight-black py-10">
            Join our team
          </v-row>
          <v-row justify="center">            
            <v-btn outlined large color="blue" to="/">
              See Careers
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
  export default {
    name: 'Team',
    data: () => ({
      members: [
        {
          name: 'Rollie',
          position: 'Position',
          img: '/img/imagePlaceholder.png'
        },
        {
          name: 'Eric',
          position: 'Position',
          img: '/img/imagePlaceholder.png'
        },
        {
          name: 'Matt',
          position: 'Position',
          img: '/img/imagePlaceholder.png'
        },
        {
          name: 'Caleb',
          position: 'Position',
          img: '/img/imagePlaceholder.png'
        },
        {
          name: 'Employee1',
          position: 'Position',
          img: '/img/imagePlaceholder.png'
        },
        {
          name: 'Employee2',
          position: 'Position',
          img: '/img/imagePlaceholder.png'
        },
        {
          name: 'Employee3',
          position: 'Position',
          img: '/img/imagePlaceholder.png'
        },
        {
          name: 'Employee4',
          position: 'Position',
          img: '/img/imagePlaceholder.png'
        },
      ]
    }),
  }
</script>
