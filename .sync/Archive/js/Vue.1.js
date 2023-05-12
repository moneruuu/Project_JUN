


//VueRouterクラスのインスタンス生成
var myRouter = new VueRouter({
    routes: [
        {
            path: '/drink',
            component: httpVueLoader('js/vue_component/drink.vue')
        },
        {
            path: '/buy',
            component: httpVueLoader('js/vue_component/buy.vue')
        },
        {
            path: '/thankyou',
            component: httpVueLoader('js/vue_component/thankyou.vue')
        },
        {
            path: '/account',
            component: httpVueLoader('js/vue_component/account.vue')
        },
        {
            path: '/mycode',
            component: httpVueLoader('js/vue_component/mycode.vue')
        },
        {
            path: '/present',
            component: httpVueLoader('js/vue_component/present.vue')
        }
    ]
});



//Vueクラスのインスタンス生成
const vue = new Vue({

    el: '#app',
    router: myRouter,

    data: {
        showcontent: false
    },

    methods:{
        openModal: function(path){
            this.$router.push({
                path: path
            })
            this.showcontent = true
        },

        closeModal: function(){    
            this.$router.push({
                path: "/"
            })
            this.showcontent = false
        }
    }
})