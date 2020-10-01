<template>
  <v-footer class="text-no-wrap py-16">
  <v-col cols="1"></v-col>
  <v-col>
    <div class="text-h5 font-weight-medium ma-4"> MOYER CABINETS </div>
    <v-row>
    <v-col class="py-0" sm="4" md="3" lg="2">
    <div class= "text-subtitle-2 ml-4 my-1"> 402-709-2039 </div> 
    </v-col>
    <v-col class="py-0">
    <div class= "text-subtitle-2  mx-4 my-1"> moyercabinets@gmail.com </div>
    </v-col>
    </v-row>
        <v-row>
        <v-col class="py-0">
    <div class ="text-subtitle-2 mx-4 my-1"> Monday - Friday: 7:00AM - 3:30PM </div>
    </v-col>
        </v-row>
            <v-row>
            <v-col class="py-0">
    <div class ="text-subtitle-2 mx-4 my-1"> 1630 Vinton st Omaha, NE 68108 </div>
    </v-col>
        </v-row>
    </v-col>
    <v-col>
    <div id="instagram-feed1" > </div>
    <script type="application/javascript">
    (function(){
        new InstagramFeed({
            'username': 'moyercabinets',
            'container': document.getElementById("instagram-feed1"),
            'display_profile': true,
            'display_biography': true,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'items': 8,
            'items_per_row': 4,
            'margin': 1,
            'lazy_load': true,
            'on_error': console.error
        });
    })();
</script>
    </v-col>
  </v-footer>
</template>
<script>
export default {
    name: 'Footer',
      mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', '../../node_modules/@jsanahuja/instagramfeed/dist/InstagramFeed.min.js')
    document.head.appendChild(externalScript)
    }
}
</script>