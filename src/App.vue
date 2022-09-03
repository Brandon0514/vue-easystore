<template>
  <v-app>
  
    <Header />

    <v-main>
      <!-- Landing section -->
      <LandingComponent />
      
    </v-main>

  </v-app>
</template>

<script>
import Header from './components/Header';
import LandingComponent from './components/LandingComponent';

export default {
  name: 'App',

  components: {
    Header,
    LandingComponent
  },

};
</script>

<style>
 
</style>
