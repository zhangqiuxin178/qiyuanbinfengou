import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
// import HomeDetail from '../views/HomeView/HomeDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    // redirect重定向
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ShoppingMall',
    name: 'ShoppingMall',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/ShoppingMall/ShoppingMall.vue'),
    meta: {
      ShowAndHide: false
    }
  },
  {
    path: '/LiveBroadcast',
    name: 'LiveBroadcast',
    component: () => import( /* webpackChunkName: "about" */ '../views/LiveBroadcast/LiveBroadcast.vue'),
    meta: {
      ShowAndHide: false
    }
  },
  {
    path: '/my',
    name: 'my',
    component: () => import( /* webpackChunkName: "about" */ '../views/MyView/MyView.vue'),
    meta: {
      ShowAndHide: false
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import( /* webpackChunkName: "about" */ '../views/HomeView/HomeDetail.vue'),
    meta: {
      ShowAndHide: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import( /* webpackChunkName: "about" */ '../views/HomeView/HomeSearch.vue'),
    meta: {
      ShowAndHide: true
    }
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import( /* webpackChunkName: "about" */ '../views/HomeView/HomeSearchList.vue'),
    meta: {
      ShowAndHide: true
    }
  },
  {
    path: '/merchandise',
    name: 'merchandise',
    component: () => import( /* webpackChunkName: "about" */ '../views/HomeView/HomeProductDetails.vue'),
    meta: {
      ShowAndHide: true
    }
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import( /* webpackChunkName: "about" */ '../views/HomeView/OrderPayment.vue'),
    meta: {
      ShowAndHide: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( /* webpackChunkName: "about" */ '../views/HomeView/ShoppingCart.vue'),
    meta: {
      ShowAndHide: true
    }
  },
  {
    path: '/taxonomic',
    name: 'taxonomic',
    component: () => import( /* webpackChunkName: "about" */ '../views/HomeView/HomeTaxonomic.vue'),
    meta: {
      ShowAndHide: true
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router