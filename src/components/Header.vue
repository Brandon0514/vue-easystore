<template>

  <v-app-bar :style="{ ...styleComputed }" app color="primary" light elevation-on-scroll elevation="0">

    <v-img src="@/assets/easystore-logo-horizontal-white.png" alt=""
      contain   
      height="70%"
      width="200px"
      position="left center"
    >
    </v-img>

    <v-spacer />

    <!-- Full header -->
    <v-list v-if="isMini" class="d-flex align-center" color="primary">
      <v-list-item link v-for="(menu, index) in menus" :key="index" :to="menu.route">
        <v-list-item-title class="header_title">
          {{menu.title}}
        </v-list-item-title>
      </v-list-item>
      <v-btn outlined color="white">
        Get Started
      </v-btn>
    </v-list>

    <!-- Icon dropdown -->
    <v-menu bottom left v-else>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark icon v-bind="attrs" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(menu, index) in menus" :key="index" :to="menu.route">
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<script>

export default {
    name: 'Header', 

    data() {
      return{
        menus:[
          {title:'Product', route:'home'},
          {title:'Pricing', route:'pricing'},
          {title:'Solutions', route:'solutions'},
          {title:'Resource', route:'resource'},
          {title:'Our Customers', route:'our_customers'},
          {title:'Log in', route:'login'}
        ],
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
        return this.isMini ? { 'padding': '0px 90px' } : { 'padding': '0px 0px' } ;
      }
    },

};
</script>

<style>
  .header_title {
    color: rgb(255, 255, 255);
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Roboto, Arial, sans-serif;
  }
</style>
