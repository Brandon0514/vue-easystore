<template>

<div class="howcustomer_section">
  <v-container  style="padding-top: 150px; padding-bottom: 50px;">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">{{howcustomer_title}}</v-subheader>

        <v-container
          class="bg-surface-variant mb-6"
        >
          <v-row
            align="center"
            no-gutters
          >
            <v-col v-for="(howcustomer_item, index) in howcustomer_list" :key="index">
              <v-sheet class="pa-2 ma-2" elevation="0" outlined color="grey" >
                <v-card elevation="0" color="grey">
                  <v-layout align-center>
                    <v-img :src="require('../assets/' + howcustomer_item.image)" contain width="450px" height="500px"></v-img>
                  </v-layout>
                  <v-img v-if="isMini === 'xl' && (howcustomer_item.order !== 1 && howcustomer_item.order !== 4)" src="@/assets/icon/arrow.png" contain width="20px"/>
                  <v-img v-if="isMini === 'lg' && (howcustomer_item.order !== 1 && howcustomer_item.order !== 3 && howcustomer_item.order !== 5)" src="@/assets/icon/arrow.png" contain width="20px"/>
                  <v-subheader class="text-h5 justify-center"> {{howcustomer_item.title}}</v-subheader>
                </v-card>
              </v-sheet>
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
    name: 'HowCustomer', 

    data() {
      return{
        howcustomer_list:[
          {image: 'howcustomer/howcustomer1.png', title:'1. Search your business by entering store URL or scan QR code', order: 1},
          {image: 'howcustomer/howcustomer2.png', title:'2. Browse your store', order: 2},
          {image: 'howcustomer/howcustomer3.png', title:'3. Add products to bag', order: 3},
          {image: 'howcustomer/howcustomer4.png', title:'4. Login account to checkout', order: 4},
          {image: 'howcustomer/howcustomer5.png', title:'5. Get notified of orders at any time', order: 5}
        ],
        howcustomer_title: 'How Customers Buy From You on Shopping App'
      }
    },

    computed: {
      isMini() {
        return this.$vuetify.breakpoint.name
      },
    },

};
</script>

<style scoped>
</style>
  