import Vue from 'vue'
import Router,{appmount} from 'uni-simple-router';
Vue.use(Router);

const router = new Router({
	h5:{
		loading:false,
		hinderTab:false,
		vueRouter:true,
		useUniConfig:true
	},
	routes: [
		{
			path:'/pages/test/404',
			aliasPath:'/404',
			name:'404',
			component:()=>import('@/pages/test/404.vue'),
			children:[
				{
					aliasPath:'404/:id',
					component:()=>import('@/pages/test/test.vue'),
					children:[{
						aliasPath:'888',
						component:()=>import('@/pages/test/test.vue'),
					}]
				},
				{
					aliasPath:'4041',
					component:()=>import('@/pages/test/test.vue'),
				}
			]
		},
		{
			aliasPath:'/',
			path: "/pages/tabbar/tabbar-1/tabbar-1",
			component:()=>import('@/pages/test/404.vue'),
			name: 'tabbar-1',
			routeMeta:{
				name:'tabbar-1'
			},
		},
		{
			aliasPath:'/tabbar2',
			component:()=>import('@/pages/test/404.vue'),
			path: "/pages/tabbar/tabbar-2/tabbar-2",
			name: 'tabbar-2',
			routeMeta:{
				name:'tabbar-2'
			},
		},
		{
			aliasPath:'/tabbar3',
			component:()=>import('@/pages/test/404.vue'),
			path: "/pages/tabbar/tabbar-3/tabbar-3",
			name: 'tabbar-3',
			routeMeta:{
				name:'tabbar-3'
			},
		},
		{
			aliasPath:'/tabbar4',
			component:()=>import('@/pages/test/404.vue'),
			path: "/pages/tabbar/tabbar-4/tabbar-4",
			name: 'tabbar-4',
			routeMeta:{
				name:'tabbar-4'
			},
		},
		{
			aliasPath:'/tabbar5',
			component:()=>import('@/pages/test/404.vue'),
			path: "/pages/tabbar/tabbar-5/tabbar-5",
			name: 'tabbar-5',
			routeMeta:{
				name:'tabbar-5'
			},
		},
		{
			component:()=>import('@/pages/test/404.vue'),
			path: "/pages/router/router1/router1",
			name: 'router1'
		}, {
			component:()=>import('@/pages/test/404.vue'),
			path: "/pages/router/router2/router2",
			name: 'router2',
		}, {
			component:()=>import('@/pages/test/404.vue'),
			path: "/pages/router/router3/router3",
			name: 'router3'
		}, {
			component:()=>import('@/pages/test/404.vue'),
			path: "/pages/router/router4/router4",
			name: 'router4'
		},
		{
			component:()=>import('@/pages/test/404.vue'),
			path: "/pages/router/router5/router5",
			name: 'router5',
		},
		{
			component:()=>import('@/pages/test/404.vue'),
			path: "/pages/router/router6/router6",
			name: 'router6'
		}
	]
});

router.beforeEach((to, from, next) => {
		// console.log(from)
		// console.log(to)
		next();
})
router.afterEach((to, from) => {
})

export default router
