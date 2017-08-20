
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    $(function(){
        $(document).on('click', '.dropdown-menu', function(event){
            if (event.target.dataset.hasOwnProperty("preventClose")) {
                event.stopPropagation();
            }
        });
    
        $(document).on("mouseover", '.dropdown-submenu a.test', function(e){
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });
    });

    require('bootstrap-sass');
} catch (e) {}
