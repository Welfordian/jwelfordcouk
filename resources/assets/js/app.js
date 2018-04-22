import * as bootstrap from './bootstrap';
import * as Vue from 'vue';
import { i18n } from './i18n';
import { Store } from './stores/SharedStore';
import { Events } from './EventBus';
import { filters } from './Filters';
import router from './routes';
import VueRouter from 'vue-router';
import TuiEditor from 'vue-tui-editor';
import Toasted from 'vue-toasted';

Vue.use(VueRouter);
Vue.use(TuiEditor);
Vue.use(Toasted, {
  iconPack: 'fontawesome'
});

require('./components');
require('./mixins');

export const app = new Vue({
    el: '#app',

    data: {
        lang: i18n,
        store: Store,
        toast: false
    },

    beforeCreate() {
      const noVues = document.getElementsByClassName('no-vue');

      for(i = 0; i < noVues.length; i++) {
        noVues[i].className = "no-vue hidden";
      }

      Events.$on('showLoading', () => {
        this.toast = this.$toasted.show(`<i class="fa fa-spinner fa-spin"></i> Loading Post Details...`, {
          theme: "primary",
          position: "bottom-right",
          icon: 'spin'
        });
      });

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

    beforeMount() {
      Events.$on('hideLoading', () => {
        this.toast.goAway();
      });
    },
    
    router
});

$(document).ready(function () {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("in");

    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
      $("button.navbar-toggle").click();
    }
  });
});