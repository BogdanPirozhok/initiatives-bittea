window.Vue = require('vue');

require('./helper/custom.js');
require('./helper/polyfill.js');
require('./helper/browser.js');

import { TweenLite, ScrollToPlugin } from 'gsap/all';

const plugins = [ ScrollToPlugin ];

Vue.component('team-item',     require('./components/team-item.vue').default);
Vue.component('afisha-item',   require('./components/afisha-item.vue').default);
Vue.component('projects-item', require('./components/projects-item.vue').default);
Vue.component('contact-item',  require('./components/contact-item.vue').default);
Vue.component('video-img',     require('./components/video-img.vue').default);
Vue.component('video-load',    require('./components/video-load.vue').default);

new Vue({
    el: '#main',
    data: {
        location: window.location,
        modal:{
            video: false,
            desc: false
        },
        nav: {
        	mobMenu: false,
            select: null,
            items: [
                {
                    name: 'Участники',
                    target: 'team'
                },{
                    name: 'Анонс',
                    target: 'afisha'
                },{
                    name: 'Миссия',
                    target: 'target'
                },{
                    name: 'Проекты',
                    target: 'project'
                },{
                    name: 'Контакты',
                    target: 'contact'
                }
            ]
        }
    },
    mounted: function() {
        BrowserDetect.init();        
        document.body.classList.add(BrowserDetect.browser.toLowerCase() +'-browser');

        scroll_hidden();
    },
    watch: {
        'modal.video': function() {
            scroll_hidden();
        },
        'modal.desc': function() {
            scroll_hidden();
        },
        'nav.select': function() {
        	if(this.nav.mobMenu){
        		this.nav.mobMenu = false;
        		scroll_hidden();
        	}
            if ( this.nav.select ) {
                var target = document.getElementById(this.nav.select),
                    points = target.getBoundingClientRect();

                TweenLite.to(window, .75, {
                    scrollTo: points.y,
                    onComplete: () => {
                        this.nav.select = null
                    }
                });
            }
        }
    },
    methods: {
    	openMenu: function(){
    		this.nav.mobMenu = !this.nav.mobMenu;
    		scroll_hidden();
    	},
        closeModel: function(){
            this.modal.video = false;
            this.modal.desc = false;
        }
    }
});
