<template>

<v-container style="margin-top: 150px; margin-bottom: 50px;">
  <v-row justify="center">
    <v-col lg="12" class="text-center">
      <v-subheader class="text-h4 justify-center">{{elevate_title}}</v-subheader>

      <v-container
        class="bg-surface-variant mb-6 mt-15"
      >
        <v-row
          align="center"
          no-gutters
        >
          <v-col align="center" v-for="(elevate_item, index) in elevate_list" :key="index">
              <v-card elevation="0" width="400px" height="600px">
                <v-layout align-center>
                  <v-img :src="require('../assets/' + elevate_item.image)" contain width="300px"></v-img>
                </v-layout>
                <v-card-title class="justify-center"> {{elevate_item.title}}</v-card-title>
                <v-card-subtitle class="justify-center">{{elevate_item.description}}</v-card-subtitle>
              </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-col>
  </v-row>
</v-container>

</template>

<script>

export default {
    name: 'Elevate', 

    data() {
      return{
        elevate_list:[
          {image: 'elevate/elevate1.png', title:'Optimized sales for shopping experience', description:'Create a direct mobile channel to provide shoppers with quick access to general info, shopping catalogue and manage loyalty program right at their fingertips'},
          {image: 'elevate/elevate2.png', title:'Outplay your competitor', description:'Having a mobile app for a small business is becoming less common these days, and this is where you can gain an advantage over your competition.'},
          {image: 'elevate/elevate3.png', title:'Increase engagement', description:'Simply accessible and get even closer to a direct interaction and stay connected to your customers wherever they go.'},
        ],
        elevate_title: 'Elevate Your Business to the Next Level With Mobile App'
      }
    },

};
</script>

<style scoped>
</style>
