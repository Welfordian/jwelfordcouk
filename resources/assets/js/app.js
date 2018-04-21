import * as bootstrap from './bootstrap';
import * as Vue from 'vue';
import { i18n } from './i18n';
import { Store } from './stores/SharedStore';
import { Events } from './EventBus';
import { filters } from './Filters';
import router from './routes';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

require('./components');

const app = new Vue({
    el: '#app',

    data: {
        lang: i18n,
        store: Store
    },

    beforeCreate() {
      const noVues = document.getElementsByClassName('no-vue');

      for(i = 0; i < noVues.length; i++) {
        noVues[i].className = "no-vue hidden";
      }

      if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js', {scope: '/'})
          .then(function(reg) {
              Store.serviceWorker = reg;
          }).catch(function(error) {
              // registration failed
              console.log('Registration failed with ' + error);
          });
      }
    },
    
    router
});

$(document).ready(function () {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("in");
    console.log(_opened);
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
      $("button.navbar-toggle").click();
    }
  });
});