import * as bootstrap from './bootstrap';
import * as Vue from 'vue';
import { i18n } from './i18n';
import { Store } from './stores/SharedStore';
import { _http } from "./Http";
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

// let modifications = false;
// let waitTimeout = setInterval.prototype;
//
// router.afterEach((to, from) => {
//   if (!modifications) {
//     waitTimeout = setInterval(() => {
//       if (modifications) {
//         applyModifications();
//
//         clearInterval(waitTimeout);
//       }
//     });
//   } else {
//     setTimeout(() => {
//       applyModifications();
//     }, 50);
//   }
// });

let noVues = document.getElementsByClassName('no-vue');

for(let i = 0; i < noVues.length; i++) {
  noVues[i].className = "no-vue hidden";
  noVues[i].remove();
}

export const app = new Vue({
    el: '#app',

    data: {
        lang: i18n,
        store: Store,
        toast: false
    },

    beforeCreate() {
      let noVues = document.getElementsByClassName('no-vue');

      for(let i = 0; i < noVues.length; i++) {
        noVues[i].className = "no-vue hidden";
        noVues[i].remove();
      }
      //_http.get('/modifications').then(response => modifications = JSON.parse(response.data.config)).catch(e => modifications = true);

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
      Events.$on('showLoading', () => {
        this.toast = this.$toasted.show(`<i class="fa fa-spinner fa-spin"></i> Loading Post Details...`, {
          theme: "primary",
          position: "bottom-right",
          icon: 'spin'
        });
      });

      Events.$on('hideLoading', () => {
        setTimeout(() => {
          this.toast.goAway();
        }, 500);
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

// const applyModifications = function () {
//   Object.keys(modifications).forEach(function(key){
//     if ($(key).length) {
//       $(key).text(modifications[key].innerText);
//     }
//   });
//
//   const noVues = document.getElementsByClassName('no-vue');
//
//   for(i = 0; i < noVues.length; i++) {
//     noVues[i].className = "no-vue hidden";
//   }
// };