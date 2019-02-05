import Vue from 'vue';
import moment from 'moment';

Vue.filter('date', function(value, format){
    return moment(value).format(format);
});