<template>
  <v-app-bar style="padding: 0px 90px" app color="primary" light elevation-on-scroll elevation="0">

    <v-img src="@/assets/easystore-logo-horizontal-white.png" alt=""
      contain   
      height="70%"
      position="left center"
    >
    </v-img>

    <v-spacer />

    <v-list class="d-flex align-center" color="primary">
      <v-list-item link v-for="(menu, index) in menus" :key="index" :to="menu.route">
        <v-list-item-title class="header_title">
          {{menu.title}}
        </v-list-item-title>
      </v-list-item>
      <v-btn outlined color="white">
        Get Started
      </v-btn>
    </v-list>

  </v-app-bar>
</template>

<script>

export default {
    name: 'Header', 

    mounted () {
      console.log(this.$vuetify.breakpoint.name)
    },
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
        toggleMenu: false,
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
