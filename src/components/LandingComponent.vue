<template>
<div class="mobile_download_section">
  <v-container class="pt-15" :style="{ ...styleComputed }">
    <v-row>

      <!-- left side -->
      <v-col lg="6">

        <v-row>
          <v-col lg="12" class="mt-1">
              <v-btn color="black" class="py-8 mr-5 btn_view_app">
                <v-img src="@/assets/icon/cart-icon.png" alt=""
                  contain
                  width="50px"
                >
                </v-img>
              </v-btn>

              <v-btn color="white" class="dark_blue--text py mr--10 pa-8 text-transform-none btn_title_app btn_view_app">
                {{shopping_title}}
              </v-btn>
            </v-col>
        </v-row>

        <h2 class="intro-text white--text mt-5">{{title}}</h2>
        <p class="description-text white--text mt-5">{{description}}</p>
        <v-btn color="secondary" class="white--text mr--10 mt-5 pa-8 btn_title_app btn_view_app text-transform-none">{{view_app_descrip}}</v-btn>
      </v-col>

      <!-- right side -->
      <v-col lg="6">
        <v-img src="@/assets/mobile/Artboard-8.png" alt=""
          contain   
          width="100%"
        >
        </v-img>
      </v-col>

    </v-row>
  </v-container>
</div>
</template>

<script>

export default {
    name: 'LandingComponent', 

    data() {
      return{
        title: "Convert your store into a mobile app",
        description: "Shopping App - an app drives more conversions and repeat purchases for your business",
        view_app_descrip: "Explore Shopping App",
        shopping_title: "Shopping App"
      }
    },

    computed: {
      isMini() {
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return false
            case 'sm': return false
            case 'md': return false
            case 'lg': return true
            case 'xl': return true
            default: return false
        }
      },
      styleComputed() {
        return this.isMini ? {'height': '820px'} : {} ;
      }
    },

};
</script>

<style scoped>
</style>
