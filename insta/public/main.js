const Vue = require('vue');
const header = require('./header.vue');

var vm = new Vue({
    el: 'body',
    data: {
        message: "qq comps"
    },
    components: {
        cTag: header
    }
});