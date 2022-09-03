<template>
  <v-app>
  
    <Header />

    <v-main>
      <!-- Landing section -->
      <LandingComponent />
      <!-- Elevate -->
      <Elevate />
      
    </v-main>

  </v-app>
</template>

<script>
import Header from './components/Header';
import LandingComponent from './components/LandingComponent';
import Elevate from './components/Elevate';

export default {
  name: 'App',

  components: {
    Header,
    LandingComponent,
    Elevate
  },

};
</script>

<style>
 
</style>
