import * as Vue from 'vue';

Vue.mixin({
  methods: {
    addStyle(href) {
      return new Promise(function(resolve, reject) {
        const link = document.createElement('link');

        link.href = href;
        link.type = 'text/css';
        link.rel = 'stylesheet';

        if (link.readyState) {
          link.onreadystatechange = function () {
            if ( link.readyState === "loaded" || link.readyState === "complete" ) {
              link.onreadystatechange = null;
              resolve();
            }
          }
        } else {
          link.onload = function () {
            resolve();
          };
        }

        document.head.append(link);
      });
    },

    addScript(href) {
      return new Promise(function(resolve, reject) {
        const script = document.createElement('script');

        script.src = href;
        script.type = 'text/javascript';

        if (script.readyState) {
          script.onreadystatechange = function () {
            if ( script.readyState === "loaded" || script.readyState === "complete" ) {
              script.onreadystatechange = null;
              resolve();
            }
          }
        } else {
          script.onload = function () {
            resolve();
          }
        }

        document.body.append(script);
      });
    },


  }
});