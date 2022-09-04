<template>
  <v-app>
  
    <Header />

    <v-main>
      <!-- Landing section -->
      <LandingComponent />
      <!-- Elevate -->
      <Elevate />
      <!-- How Customer -->
      <HowCustomer />
      <!-- Feedback -->
      <Feedback />

    </v-main>

  </v-app>
</template>

<script>
import Header from './components/Header';
import LandingComponent from './components/LandingComponent';
import Elevate from './components/Elevate';
import HowCustomer from './components/HowCustomer';
import Feedback from './components/Feedback';

export default {
  name: 'App',

  components: {
    Header,
    LandingComponent,
    Elevate,
    HowCustomer,
    Feedback
  },

};
</script>

<style>
 
</style>
