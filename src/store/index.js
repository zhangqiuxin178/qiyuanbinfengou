import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import { getgoodsDetail } from '../apis/getHomeNav'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj: {},
    cartObj: {},
    cartList: JSON.parse(localStorage.getItem("cartList")) || [],
    shopList: JSON.parse(localStorage.getItem("shopList")) || [],

  },
  getters: {
  },
  mutations: {
    addOrder(state, { img, chima, jiage, title, seletedcolor, shopName, num }) {
      state.obj = {
        img,
        chima,
        jiage,
        title,
        seletedcolor,
        shopName,
        num
      }
    },
    addShoppingCart(state, { img, chima, jiage, title, seletedcolor, shopName, num, finish, itemId }) {
      if (state.shopList.length == 0) {
        state.shopList = [{ id: 1, shopName }]
        state.cartList = [{ img, num, chima, title, jiage, shopName, finish, itemId, seletedcolor, id: 1 }, ...state.cartList]
        localStorage.setItem("shopList", JSON.stringify(state.shopList))
        localStorage.setItem("cartList", JSON.stringify(state.cartList))
      } else {
        if (state.shopList.filter((res) => res.shopName == shopName).length != 0) {
          console.log(1);
          console.log(state.shopList.filter((res) => res.shopName == shopName)[0]?.itemId + 1);
          state.cartList = [{ img, num, chima, seletedcolor, jiage, title, shopName, itemId, id: state.shopList.filter((res) => res.shopName == shopName)[0].id }, ...state.cartList]
        } else {
          let idNumber = state.shopList.length ? Math.max(...state.shopList.map(i => i.id)) + 1 : 1;
          state.shopList = [...state.shopList, { id: idNumber, shopName }];
          state.cartList = [{ img, num, seletedcolor, jiage, chima, title, itemId, shopName, finish, id: idNumber }, ...state.cartList]
        }

        localStorage.setItem("cartList", JSON.stringify(state.cartList))
        localStorage.setItem("shopList", JSON.stringify(state.shopList))
      }
    },
    minusNum(state, { id, num }) {
      state.cartList = state.cartList.filter((o) => o.id === id ? { ...o, num } : o);
      state.shopList = state.shopList.filter((o) => o.id === id ? { ...o, num } : o);
    },
    addNums(state, { id, num }) {
      state.cartList = state.cartList.filter((o) => o.id === id ? { ...o, num } : o);
      state.shopList = state.shopList.filter((o) => o.id === id ? { ...o, num } : o);
    },
    deleteGoods(state) {
      state.cartList = state.cartList.filter((o) => o.finish === false);
      state.shopList = state.shopList.filter((o) => o.finish === false);
      localStorage.removeItem('cartList');
      localStorage.removeItem('shopList');
    }
  },
  actions: {

  },
  modules: {
  }
})
