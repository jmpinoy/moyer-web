<template>
  <v-container id="employees-admin">
    <v-row>
      <v-col>
        <v-col align="center" justify="center">
          <v-row justify="center" class="title blue--text font-weight-black">
            Moyer Cabinets Web Manager
          </v-row>
          <v-row justify="center" class="display-1 font-weight-black py-3">
            Employees
          </v-row>
          <v-row justify="center" class="subtitle-1 font-weight-black py-3">
          <p>
            Click employee to edit
          </p>
          </v-row>
          <v-row justify="center">          
            <v-btn
              color="blue"
              dark>
              Add
            </v-btn>
          </v-row>
          <v-row align="center" justify="center" class="my-8">
            <v-col
            v-for="(employee, e) in employees"
            :key="e"
            cols="6" md="3">
              <v-card class="text-center transparent" flat>
                <v-img
                  height="300"
                  contain
                  :src="employee.img"
                  class="grey lighten-2" />              
                  <v-card-text class="title font-weight-bold">
                    {{ employee.title }}
                  </v-card-text>
                  <v-card-text class="subtitle-1 font-weight-medium">
                    {{ employee.description }}
                  </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>  
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EmployeesAdmin',
  data: () => ({
    card: {
      title: '',
      description: '',
      img: ''
    }
  }),
  computed: {
    ...mapState(['employees'])
  },
  methods: {

  }
}
</script>