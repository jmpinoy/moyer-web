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
          <v-snackbar
            light
            v-model="alert"
            :timeout="timeout"
            top>
            <p>
              {{ errorMsg }}
            </p>
            <template v-slot:action="{ attrs }">
              <v-btn
                color="blue"
                text
                v-bind="attrs"
                @click="alert = false" >
                Close
              </v-btn>
            </template>
          </v-snackbar>
          <v-row justify="center">
            <v-btn
              color="blue"
              dark
              @click="upload = true">
              Add
            </v-btn>
          </v-row>
          <v-row justify="center">
            <v-overlay
              v-model="upload">
              <v-card
                light
                color="white"
                flat>
                <v-row class="px-8 pt-8">
                  <v-col>
                    <v-card
                      flat
                      light
                      class="mx-auto"
                      max-width="300"
                      color="white">
                      <v-card-title>
                        Add New
                      </v-card-title>
                      <v-img
                        :src="img"
                        contain />
                      <v-card-subtitle>
                        Picture
                      </v-card-subtitle>
                      <v-btn
                        v-if="!img"
                        color="blue"
                        @click="onClick"
                        dark>
                        Upload
                      </v-btn>
                      <input
                        type="file"
                        ref="input"
                        style="display: none"
                        @change="preview"
                        accept="images/*">
                      <v-card-subtitle>
                        Name
                      </v-card-subtitle>
                      <v-text-field
                        v-model="title"
                        placeholder="Name" />
                      <v-card-subtitle>
                        Position
                      </v-card-subtitle>
                      <v-text-field
                        v-model="description"
                        placeholder="Position" />
                      <v-card-actions class="pt-8">
                        <v-spacer />
                        <v-btn
                          text
                          @click="exit">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          @click="add">
                          Add
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-overlay>
          </v-row>
          <v-row align="center" justify="center" class="my-8">
            <v-col
            v-for="(employee, e) in employees"
            :key="e"
            cols="6" md="3">
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  class="text-center transparent"
                  flat
                  @click="index = employee.index; update = true">
                  <v-img
                    height="275"
                    contain
                    :src="employee.img"
                    class="grey lighten-2" />
                  <v-card-text class="subtitle-1 font-weight-medium">
                    <a class="title font-weight-bold">
                      {{ employee.title }}
                    </a>
                    <br>
                    {{ employee.description }}
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-overlay
              v-model="update">
              <v-card
                light
                color="white"
                flat>
                <v-window
                  v-model="index">
                  <v-window-item
                    v-for="(employee, e) in employees"
                    :key="e">
                    <v-row class="px-8 pt-8">
                      <v-col>
                        <v-card
                          flat
                          light
                          class="mx-auto"
                          max-width="300"
                          color="white">
                          <v-card-title>
                            Update {{ employee.title}}
                          </v-card-title>
                          <v-img
                            :src="employee.img"
                            contain />
                          <v-card-subtitle>
                            Change Name
                          </v-card-subtitle>
                          <v-text-field
                            v-model="title"
                            :placeholder="employee.title" />
                          <v-card-subtitle>
                            Change Position
                          </v-card-subtitle>
                          <v-text-field
                            v-model="description"
                            :placeholder="employee.description" />
                          <v-card-actions class="pt-8">
                            <v-btn
                              text
                              @click="remove(employee)">
                              Delete
                            </v-btn>
                            <v-spacer />
                            <v-btn
                              text
                              @click="exit">
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              @click="save(employee)">
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-overlay>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import * as fb from '@/firebase'

export default {
  name: 'EmployeesAdmin',
  data: () => ({
    upload: false,
    update: false,
    index: 0,
    title: '',
    description: '',
    img: '',
    imgRef: '',
    imageData: null,
    errorMsg: '',
    alert: false,
    timeout: 2500,
  }),
  computed: {
    ...mapState(['employees']),
  },
  methods: {
    ...mapActions(['removeImage', 'updateEmployee', 'createEmployee', 'removeEmployee']),
    exit() {
      if (this.imgRef) {
        this.removeImage(this.imgRef);
        this.imgRef = '';
      }
      this.title = '';
      this.description = '';
      this.img = '';
      this.upload = false;
      this.update = false;
    },
    onClick() {
      this.$refs.input.click();
    },
    preview(event) {
      this.imageData = event.target.files[0];
      this.onUpload();
    },
    onUpload() {
      this.imgRef = `employees/${this.imageData.name}_${Math.ceil(Math.random()*100000)}`;
      const storageRef = fb.storage.ref(this.imgRef).put(this.imageData);
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;},
        error => { console.log(error.message)},
        () => { this.uploadValue = 100;
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          this.img = url;
        });
      });
      console.log('Uploaded image');
    },
    save(data) {
      var post = {
        id: data.id,
        title: data.title,
        description: data.description,
        index: data.index
      }
      var titlePost = {title: this.title};
      var descriptionPost = {description: this.description};

      if (titlePost.title) post = Object.assign( {}, post, titlePost);
      if (descriptionPost.description) post = Object.assign( {}, post, descriptionPost);

      if (post) {
        this.updateEmployee(post);
      }
      this.title = '';
      this.description = '';
      this.update = false;
    },
    add() {
      const post = {
        title: this.title,
        description: this.description,
        img: this.img,
        imgRef: this.imgRef,
        index: this.employees.length
      }
      if (this.imgRef) {
      this.createEmployee(post);
      } else {
        this.errorMsg = 'Image Required';
        this.alert = true;
      }
      this.title = '';
      this.description = '';
      this.img = '';
      this.imgRef = '';
      this.upload = false;
    },
    remove(data) {
      this.removeImage(data.imgRef);
      this.removeEmployee(data.id);
      this.update = false;
    },
    removeOnReload() {      
      if (this.imgRef) {
        this.removeImage(this.imgRef);
        this.imgRef = '';
      }
    }
  },
  created() {
    window.addEventListener('beforeunload', this.removeOnReload);
  }
}
</script>