<template>
  <v-app>
  
    <Header />

    <meta name="title" content="EasyStore - Assignment">
    <meta name="description" content="EasyStore Assignment">
    <meta name="keywords" content="EastStore">
    <meta name="author" content="Brandon Tan">

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

    <Footer />

  </v-app>
</template>

<script>
import Header from './components/Header';
import LandingComponent from './components/LandingComponent';
import Elevate from './components/Elevate';
import HowCustomer from './components/HowCustomer';
import Feedback from './components/Feedback';
import StartSelling from './components/StartSelling';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    LandingComponent,
    Elevate,
    HowCustomer,
    Feedback,
    StartSelling,
    Footer
  },

};
</script>

<style>
   @import '~scss/base/font.scss';
   @import '~scss/base/card.scss';
   @import '~scss/base/background.scss';
   @import '~scss/base/button.scss';
</style>
