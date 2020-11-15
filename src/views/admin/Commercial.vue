<template>
  <v-container id="commercial-admin">
    <v-row>
      <v-col>
        <v-col align="center" justify="center">
          <v-row justify="center" class="title blue--text font-weight-black">
            Moyer Cabinets Web Manager
          </v-row>
          <v-row justify="center" class="display-1 font-weight-black py-3">
            Commercial Gallery
          </v-row>
          <v-row justify="center" class="subtitle-1 font-weight-black py-3">
          <p>
            Click image to edit
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
              class="mr-3"
              color="blue"
              dark
              @click="upload = true">
              Add
            </v-btn>
            <v-btn
              class="ml-3"
              color="blue"
              dark
              @click="filters = true">
              Edit Filters
            </v-btn>
          </v-row>
          <v-row justify="center">
            <v-overlay
              v-model="filters">
              <v-card
                light
                color="white"
                flat>
                <v-row justify="center" class="px-8">
                  <v-col>
                    <v-card
                      flat
                      light
                      :width="cardWidth"
                      class="mx-auto"
                      color="white">
                      <v-card-title>
                        Edit Filters
                        <v-spacer />
                        <v-btn
                          small
                          dark
                          fab
                          @click="exit">
                          <v-icon>
                            mdi-close
                          </v-icon>
                        </v-btn>
                      </v-card-title>
                      <v-row justify="center">
                        <v-col cols="10" md="4">
                          <v-card-subtitle>
                            Color
                          </v-card-subtitle>
                          <v-row
                            v-for="(col, c) in colors"
                            :key="c">
                            <v-col class="pa-0 pt-2">
                              <v-card-text class="pa-0" v-text="col" />
                            </v-col>
                            <v-col class="pa-0">
                              <v-btn
                                class="pa-0"
                                icon
                                @click="removeFilter('colors', col)">
                                <v-icon>
                                  mdi-close
                                </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                          <v-row justify="center">
                            <v-col>
                              <v-text-field
                                v-model="newColor"
                                dense
                                label="New"
                                clearable />
                            </v-col>
                            <v-col>
                              <v-btn
                                icon
                                color="success"
                                @click="addFilter('colors')">
                                <v-icon>
                                  mdi-plus
                                </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="10" md="4">
                          <v-card-subtitle>
                            Room Type
                          </v-card-subtitle>
                          <v-row
                            v-for="(room, r) in roomTypes"
                            :key="r">
                            <v-col class="pa-0 pt-2">
                              <v-card-text class="pa-0" v-text="room" />
                            </v-col>
                            <v-col class="pa-0">
                              <v-btn
                                class="pa-0"
                                icon
                                @click="removeFilter('roomTypes', room)">
                                <v-icon>
                                  mdi-close
                                </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                          <v-row justify="center">
                            <v-col>
                              <v-text-field
                                v-model="newRoomType"
                                dense
                                label="New"
                                clearable />
                            </v-col>
                            <v-col>
                              <v-btn
                                icon
                                color="success"
                                @click="addFilter('roomTypes')">
                                <v-icon>
                                  mdi-plus
                                </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="10" md="4">
                          <v-card-subtitle>
                            Style
                          </v-card-subtitle>
                          <v-row
                            v-for="(sty, s) in styles"
                            :key="s">
                            <v-col class="pa-0 pt-2">
                              <v-card-text class="pa-0" v-text="sty" />
                            </v-col>
                            <v-col class="pa-0">
                              <v-btn
                                class="pa-0"
                                icon
                                @click="removeFilter('styles', sty)">
                                <v-icon>
                                  mdi-close
                                </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                          <v-row justify="center">
                            <v-col>
                              <v-text-field
                                v-model="newStyle"
                                dense
                                label="New"
                                clearable />
                            </v-col>
                            <v-col>
                              <v-btn
                                icon
                                color="success"
                                @click="addFilter('styles')">
                                <v-icon>
                                  mdi-plus
                                </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-overlay>
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
                        Change Description
                      </v-card-subtitle>
                      <v-text-field
                        v-model="description"
                        label="Description" />
                      <v-card-subtitle>
                        Color
                      </v-card-subtitle>
                      <v-select
                        :items="colors"
                        label="Color"
                        v-model="color"
                        :menu-props="{ bottom: true, offsetY: true }"
                        attach
                        outlined />
                      <v-card-subtitle>
                        Room Type
                      </v-card-subtitle>
                      <v-select
                        :items="roomTypes"
                        label="Room Type"
                        v-model="roomType"
                        :menu-props="{ bottom: true, offsetY: true }"
                        attach
                        outlined />
                      <v-card-subtitle>
                        Style
                      </v-card-subtitle>
                      <v-select
                        :items="styles"
                        label="Style"
                        v-model="style"
                        :menu-props="{ bottom: true, offsetY: true }"
                        attach
                        outlined />
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
            v-for="(image, i) in commercialGallery"
            :key="i"
            cols="6" md="3">
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  class="text-center transparent"
                  flat
                  @click="index = image.index; update = true">
                  <v-img
                    height="200"
                    contain
                    :src="image.img"
                    class="grey lighten-2" />
                  <v-card-text>
                    <a class="subtitle-1 font-weight-medium">
                      {{ image.color }}, {{ image.roomType }}, {{ image.style }}
                    </a>
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
                    v-for="(image, i) in commercialGallery"
                    :key="i">
                    <v-row class="px-8 pt-8">
                      <v-col>
                        <v-card
                          flat
                          light
                          class="mx-auto"
                          max-width="300"
                          color="white">
                          <v-img
                            :src="image.img"
                            contain />
                          <v-card-subtitle>
                            Change Description
                          </v-card-subtitle>
                          <v-text-field
                            v-model="description"
                            :placeholder="image.description" />
                          <v-card-subtitle>
                            Color
                          </v-card-subtitle>
                          <v-select
                            :items="colors"
                            :label="image.color"
                            v-model="color"
                            :menu-props="{ bottom: true, offsetY: true }"
                            attach
                            outlined />
                          <v-card-subtitle>
                            Room Type
                          </v-card-subtitle>
                          <v-select
                            :items="roomTypes"
                            :label="image.roomType"
                            v-model="roomType"
                            :menu-props="{ bottom: true, offsetY: true }"
                            attach
                            outlined />
                          <v-card-subtitle>
                            Style
                          </v-card-subtitle>
                          <v-select
                            :items="styles"
                            :label="image.style"
                            v-model="style"
                            :menu-props="{ bottom: true, offsetY: true }"
                            attach
                            outlined />
                          <v-card-actions class="pt-8">
                            <v-btn
                              text
                              @click="remove(image)">
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
                              @click="save(image)">
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
  name: 'CommercialAdmin',
  data: () => ({
    upload: false,
    update: false,
    filters: false,
    decription: '',
    index: 0,
    color: '',
    roomType: '',
    style: '',
    newColor: '',
    newRoomType: '',
    newStyle: '',
    img: '',
    imgRef: '',
    imageData: null,
    errorMsg: '',
    alert: false,
    timeout: 2500,
  }),
  computed: {
    ...mapState(['commercialGallery', 'commercialFilters']),
    colors() {
      return this.commercialFilters && this.commercialFilters.length > 0 ? this.commercialFilters[0].filters : [];
    },
    roomTypes() {
      return this.commercialFilters && this.commercialFilters.length > 0 ? this.commercialFilters[1].filters : [];
    },
    styles() {
      return this.commercialFilters && this.commercialFilters.length > 0 ? this.commercialFilters[2].filters : [];
    },
    cardWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 200
        case 'sm': return 400
        case 'md': return 600
        case 'lg': return 800
        case 'xl': return 1000
        default: return 600
      }
    },
  },
  methods: {
    ...mapActions(['removeImage', 'createCommercialPost', 'updateCommercialPost', 'removeCommercialPost', 'addCommercialFilters', 'removeCommercialFilters']),
    exit() {
      if (this.imgRef) {
        this.removeImage(this.imgRef);
        this.imgRef = '';
      }
      this.decription = '';
      this.color = '';
      this.roomType = '';
      this.style = '';
      this.img = '';
      this.imgRef = '';
      this.upload = false;
      this.update = false;
      this.filters = false;
    },
    onClick() {
      this.$refs.input.click();
    },
    preview(event) {
      this.imageData = event.target.files[0];
      this.onUpload();
    },
    onUpload() {
      this.imgRef = `commercialGallery/${this.imageData.name}_${Math.ceil(Math.random()*100000)}`;
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
        color: data.color,
        roomType: data.roomType,
        description: data.description,
        style: data.style,
      }
      var colorPost = {color: this.color};
      var roomTypePost = {roomType: this.roomType};
      var stylePost = {style: this.style};
      var descriptionPost = {description: this.decription};

      if (colorPost.color) post = Object.assign( {}, post, colorPost);
      if (roomTypePost.roomType) post = Object.assign( {}, post, roomTypePost);
      if (stylePost.style) post = Object.assign( {}, post, stylePost);
      if (descriptionPost.description) post = Object.assign( {}, post, descriptionPost);

      if (post) {
        this.updateCommercialPost(post);
      }
      this.color = '';
      this.roomType = '';
      this.style = '';
      this.decription = '';
      this.update = false;
    },
    add() {
      const post = {
        color: this.color,
        roomType: this.roomType,
        style: this.style,
        description: this.decription,
        img: this.img,
        imgRef: this.imgRef,
        index: this.commercialGallery.length
      }
      if (this.imgRef) {
      this.createCommercialPost(post);
      } else {
        this.errorMsg = 'Image Required';
        this.alert = true;
      }
      this.color = '';
      this.roomType = '';
      this.style = '';
      this.decription = '';
      this.img = '';
      this.imgRef = '';
      this.upload = false;
    },
    remove(data) {
      this.removeImage(data.imgRef);
      this.removeCommercialPost(data.id);
      this.update = false;
    },
    removeOnReload() {      
      if (this.imgRef) {
        this.removeImage(this.imgRef);
        this.imgRef = '';
      }
    },
    addFilter(id) {
      var post = {}
      if (id == 'colors') post = {id: id, data: this.newColor};
      if (id == 'roomTypes') post = {id: id, data: this.newRoomType};
      if (id == 'styles') post = {id: id, data: this.newStyle};
      if (post.data) this.addCommercialFilters(post);
      this.newColor = '';
      this.newRoomType = '';
      this.newStyle = '';
    },
    removeFilter(id, data) {
      var post = {id: id, data: data}
      if (post.data) this.removeCommercialFilters(post);
    }
  },
  created() {
    window.addEventListener('beforeunload', this.removeOnReload);
  }
}
</script>