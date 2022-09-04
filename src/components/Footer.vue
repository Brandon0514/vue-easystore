<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="primary white--text text-left px-16 py-10"
      width="100%"
    >
     
      <!-- Info section -->
      <v-row class="mb-10">
        <v-col
          v-for="(data, index) in info_link"
          :key="index"
          class="mx-2 white--text"
        >
          <h1 class="my-10">{{data.title}}</h1>

          <v-layout row wrap justify-space-between>
            <v-flex xs4 md5
              v-for="(sub_, sub_index) in data.sub_title"
              :key="sub_index"
              class="mx-2 white--text"
            >
              <p>{{sub_}}</p>
              <meta name="og:title" :content="sub_">
            </v-flex>
          </v-layout>
        </v-col>
      </v-row>
      
      <!-- Social section -->
      <v-subheader>
        <v-btn
          v-for="icon in social_icons"
          :key="icon"
          class="mx-2 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-avatar v-for="icon in app_icon" :key="icon" size="130px" class="mx-2">
          <meta property="og:image:secure_url" :content="icon" />
          <meta property="og:image:type" content="image/svg" />
          
          <img alt="Avatar" :src="icon">
        </v-avatar>

      </v-subheader>
      
      <v-divider/>

      <!-- Copy right and TnC -->
      <v-subheader>
        {{ copyright }}
        <v-spacer></v-spacer>

        <p v-for="link in footer_link" :key="link" size="130px" class="mx-2">
          {{link}}
        </p>

      </v-subheader>
      
    </v-card>
  </v-footer>
</template>

<script>

export default {
    name: '', 

    data() {
      return{
        social_icons: [
          'mdi-facebook',
          'mdi-instagram',
          'mdi-linkedin',
          'mdi-twitter',
          'mdi-youtube',
        ],
        app_icon: [
          'https://resources.easystore.co/website/images/features/mobile-app/google-play.svg',
          'https://resources.easystore.co/website/images/features/mobile-app/app-store.svg',
          'https://resources.easystore.co/website/images/features/mobile-app/app-gallery.svg',
        ],
        footer_link: [
          'Server Status',
          'Terms of Service',
          'Privacy',
          'Malaysia (English)',
        ],
        info_link:[
          {title:'Sales Channels', sub_title: [
            'Online Store',
            'Facebook',
            'Facebook Live',
            'Instagram',
            'WhatsApp',
            'Telegram',
            'WeChat',
            'Shopee',
            'Lazada',
            'Google Shopping',
            'Point of Sales',
            'Referral Marketing',
            'B2B Wholesale Portal',
            'EasyStore Mobile App'
          ]},
          {title:'Products', sub_title: [
            'Plans & Pricing',
            'Sales Channels',
            'Marketing',
            'Order Processing',
            'Product Managing',
            'Customer Relations',
            'Business Analytics',
            'App Integration',
            'Payments Integration',
            'Logistics Integration'
          ]},
          {title:'Resources', sub_title: [
            'EastStore Experts',
            'Blog',
            'Brand Guidelines',
            'Help Center',
            'Server Status'
          ]},
          {title:'EasyStore', sub_title: [
            'About Us',
            'Our Customers',
            'Careers',
            'Partner Program',
            'Affiliate Program',
            'App Developers',
            'Theme Designers'
          ]},
        ],
        copyright: '© 2022 EasyStore Commerce Sdn Bhd (1020551-M). All Rights Reserved.'
      }
    },

};
</script>

<style>

</style>
