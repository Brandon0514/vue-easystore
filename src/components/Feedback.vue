<template>

  <div class="feedback_section">
    <v-container style="padding-top: 100px; padding-bottom: 50px;">
      <v-row justify="center">
        <v-col lg="12" class="text-center">
          <v-subheader class="white--text text-h4 justify-center mb-10">{{ feedback_title }}</v-subheader>

          <v-container class="bg-surface-variant mb-6">
            <v-row align="center">
              <v-col align="center" v-for="(feedback_item, index) in feedback_list" :key="index">
                <v-card :img="require('../assets/' + card_background)" elevation="0" width="400px" height="600px" class="px-5 rounded-card">

                  <v-layout align-center class="pt-10 mx-15">
                    <v-img :src="require('../assets/' + feedback_item.logo)" contain width="100px" height="100px">
                    </v-img>
                  </v-layout>

                  <v-card-title class="justify-center">{{ feedback_item.description }}</v-card-title>

                  <v-col class="card-actions">
                    <v-avatar size="70px">
                      <img alt="Avatar" :src="require('../assets/' + feedback_item.profile_pic)">
                    </v-avatar>

                    <v-card-title class="justify-center">{{ feedback_item.name }}</v-card-title>
                    <v-card-title class="justify-center">{{ feedback_item.website }}</v-card-title>
                  </v-col>
    
                </v-card>
              </v-col>
            </v-row>
          </v-container>

        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>

export default {
  name: 'Feedback',

  data() {
    return {
      feedback_list: [
        {
          logo: 'cocoonya.jpg', profile_pic: 'cocoonya-profile.jpg',
          description: '"When we started HERMANAS, we use WhatsApp and Instagram. It\'s hard to keep track thousands of messages. EasyStore cut us a significant amount of time and easy to manage."',
          name: 'Jue, founder of HARMANAS', website: 'wwww.hermanas.my'
        },
        {
          logo: 'bengbeng.png', profile_pic: 'bengbeng-profile.jpg',
          description: '"Simple, user-friendly interface. Recommended for beginners. The best Malaysian alternative of Shopify. able to build a real business."',
          name: 'Jun Qi, Co-founder of BengBeng', website: 'wwww.bengbengsourdough.com'
        },
        {
          logo: 'hermanas.jpg', profile_pic: 'hermanas-profile.jpg',
          description: '"It helps our customer to place order easily and for us to manage our store peacefully. No hassle, it\'s time efficient too! With just a few clicks you can twirl your business smoothly."',
          name: 'Sonya, Founder of COCO ONYA', website: 'wwww.thecocoonya.com'
        },
      ],
      feedback_title: 'What They Think About EasyStore',
      card_background: 'testimonial-bg.svg'
    }
  },

};
</script>

<style scoped>
</style>
  