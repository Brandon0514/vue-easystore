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
      <!-- StartSelling -->
      <StartSelling />
      
    </v-main>

  </v-app>
</template>

<script>
import Header from './components/Header';
import LandingComponent from './components/LandingComponent';
import Elevate from './components/Elevate';
import HowCustomer from './components/HowCustomer';
import Feedback from './components/Feedback';
import StartSelling from './components/StartSelling';

export default {
  name: 'App',

  components: {
    Header,
    LandingComponent,
    Elevate,
    HowCustomer,
    Feedback,
    StartSelling
  },

};
</script>

<style>
 
</style>
