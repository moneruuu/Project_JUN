


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
        },
        {
            path: '/presentmenu',
            component: httpVueLoader('js/vue_component/presentmenu.vue')
        },
        {
            path: '/presentconfirm',
            component: httpVueLoader('js/vue_component/presentconfirm.vue')
        },
        {
            path: '/presentselecting',
            component: httpVueLoader('js/vue_component/presentselecting.vue')
        },
        {
            path: '/presentselectconfirm',
            component: httpVueLoader('js/vue_component/presentselectconfirm.vue')
        },
        {
            path: '/presentforjun',
            component: httpVueLoader('js/vue_component/presentforjun.vue')
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
            document.querySelector('.button_junrecommend').style.opacity = 0;
        },

        closeModal: function(){    
            this.$router.push({
                path: "/"
            })
            this.showcontent = false

            condition = 0;
            gdrinkdata = "";
            gslotid = ""; 
            reccomending = 0; 
            selecting = 0; 

            document.querySelector('.button_junrecommend').style.opacity = 1.0;

            changeMotion("mayou_stop");
        }
    }
})


