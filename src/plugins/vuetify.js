import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: "#2f65ce", 
          secondary: "#FF5588",
          background: '#292930',
          dark_blue: '#093272',
          grey: '#F2F2F2',
        },
        
      },
    },
});
