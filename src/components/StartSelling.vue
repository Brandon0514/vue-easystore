<template>

  <div class="startselling_section">
    <v-container style="padding-top: 100px; padding-bottom: 100px ;">
      <v-row justify="center">
        <v-col lg="12" class="text-center">
          <v-subheader class="black--text text-h4 justify-center mb-10">{{ startselling_title }}</v-subheader>

          <v-btn color="primary" class="white--text py mr--10 pa-8 text-transform-none btn_title_app btn_view_app">
            Get Start
          </v-btn>

        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>

export default {
  name: 'StartSelling',

  data() {
    return {
      startselling_title: 'Start selling online for free',
    }
  },

};
</script>

<style scoped>

  button.btn_title_app.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light {
    font-size: 20px;
    font-weight: bolder;
  }

  button.btn_view_app.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light{
    border-radius: 10px;
  }

  .text-transform-none{
    text-transform: unset !important;
  }

</style>
  