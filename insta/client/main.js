import { VueRouter } from 'vue-router/types/router';

var vue = require('vue');
var vueRouter = require('vue-router');
var Register = require('./components/register.vue');

vue.use(vueRouter);

var router = new VueRouter();

router.getMatchedComponents({
    'register': {
        component: Register
    }
});

router.start(vue.extends({}), 'body');