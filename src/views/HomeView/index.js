import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 首页
    navs: [],
    videos: [],

    //商城
    guanggao: [],
    caini: [],

    //侧边栏
    Tabs: [],
    songs: [],
    Fenlei: [],

    // 搜索页面
    hots: [], //热门
    // value: "",
    hostry: JSON.parse(localStorage.getItem("hostry")) || [],  //记录
    searchresult: [],  //结果
    deleteItem: null,

    // 商品详情
    details: [],
    all: JSON.parse(localStorage.getItem("all")) || [],
    shop: JSON.parse(localStorage.getItem("shop")) || [],

    // 收藏
    shouchang: JSON.parse(localStorage.getItem("shouchang")) || [],
    shops: JSON.parse(localStorage.getItem("shops")) || [],
    xinid: JSON.parse(localStorage.getItem("xinid")) || [],
    // 直播间
    cartlist: JSON.parse(localStorage.getItem("cartlist")) || [],
    loadingsss:true,
  },
  getters: {
    allCheck1: function (state) {
      return state.all.every(o => o.finish);
    },
  },
  mutations: {
    subtractnum: function (state, { id, num }) {
      console.log(123);
      state.all = state.all.filter((o) => o.id === id ? { ...o, num } : o);
      state.shop = state.shop.filter((o) => o.id === id ? { ...o, num } : o);
    },
    addnum: function (state, { id, num }) {
      console.log(456);
      state.all = state.all.filter((o) => o.id === id ? { ...o, num } : o);
      state.shop = state.shop.filter((o) => o.id === id ? { ...o, num } : o);
    },
    deleteTodo: function (state) {
      state.all = state.all.filter((o) => o.finish === false);
      state.shop = state.shop.filter((o) => o.finish === false);
      localStorage.removeItem('all');
      localStorage.removeItem('shop');
    },
    getcartlist: function (
      state,
      { nums, title, price, size = "", color = "", src, id }
    ) {
      state.cartlist = [
        ...new Set([
          {
            nums,
            title,
            price,
            size,
            color,
            src,
            isSelected: true,
            id,
          },
          ...state.cartlist,
        ]),
      ];

      console.log({ nums, title, price, size, color, src, id });
    },

    addnavs(state, n) {
      if (n) {
        state.navs = n;
      }
    },
    addvideos(state, n) {
      if (n) {
        state.videos = n;
      }
    },
    addguanggao(state, n) {
      if (n) {
        state.guanggao = n;
      }
    },
    addcaini(state, n) {
      if (n) {
        state.caini = n;
      }
    },

    addTabs(state, n) {
      state.Tabs = n;
    },
    addsongs(state, n) {
      if (n) {
        state.songs = n;
      }
    },
    addFenlei(state, n) {
      if (n) {
        state.Fenlei = n;
      }
    },

    addhots(state, n) {
      if (n) {
        state.hots = n;
      }
    },
    addhostry(state, n) {
      if (n) {
        //  state.hostry = n;
        console.log(state.hostry);
        console.log(n);
        state.hostry = [...state.hostry, n];

        //  state.hostry = state.hostry.push(n)
        //  console.log(state.hostry);
        //  console.log(222);
        state.hostry = [...new Set([n, ...state.hostry])];
        localStorage.setItem("hostry", JSON.stringify(state.hostry));
      }
    },
    addsearchresult(state, n) {
      if (n) {
        state.searchresult = n;
      }
    },

    adddeleteItem(state, n) {
      if (n) {
        state.hostry = state.hostry.filter(o => o == [...state.hostry, n]);
        // state.hostry= state.hostry.filter(o => o !== n);
        //state.hostry = state.hostry.length
        console.log(123);
        // localStorage.clear(state.hostry)
      }
    },

    adddetails(state, n) {
      state.details = n;
    
    },
    loadingsss(state,n){
      state.loadingsss=n
    },
    // fangfa(state,ysc) {
    //   // state.ysc===false ? state.ysc=true : state.ysc===true ? state.ysc=false
    //  // console.log(123);
    //   if (state.ysc === !ysc) {
    //     state.ysc = ysc
    //   } else if (state.ysc === ysc) {
    //     state.ysc = !ysc;
    //   }
    // },

    addshoppingall(state, { img, num, color, chima, jiage, title, name, finish, itemId }) {
      // console.log(all);
      if (state.shop.length == 0) {
        state.shop = [{ id: 1, name }];
        state.all = [{ img, num, color, chima, jiage, title, name, finish,itemId, id: 1 }, ...state.all];
        localStorage.setItem("shop", JSON.stringify(state.shop));
        localStorage.setItem("all", JSON.stringify(state.all));
      } else {
        // console.log(name);
        // console.log(state.shop.filter((res) => res.name == name));
        if (state.shop.filter((res) => res.name == name).length != 0) {
          console.log(1);
          console.log(state.shop.filter((res) => res.name == name)[0]?.id);
          state.all = [{ img, num, color, chima, jiage, title, name, finish,itemId, id: state.shop.filter((res) => res.name == name)[0].id }, ...state.all];
        } else {
          let idnum = state.shop.length ? Math.max(...state.shop.map(o => o.id)) + 1 : 1;
          state.shop = [...state.shop, { id: idnum, name }];
          state.all = [{ img, num, color, chima, jiage, title, itemId, name, finish, id: idnum }, ...state.all];
        }



        localStorage.setItem("all", JSON.stringify(state.all));
        localStorage.setItem("shop", JSON.stringify(state.shop));
        // state.shop.filter((res) => res.name == name)

      }

      // state.all = state.all.map(o => (o.id === id ? { ...o, finish } : o));
      // state.all = state.all.map(o => ({
      //   ...o,
      //   finish: event.target.checked
      // }));

      //  state.all.every(o => o.finish);
    },
    //   SELECT_ITEM(state, {id,finish}) {
    //     state.all = [{finish,id}, ...state.all];
    // state.all = state.all.map(o => ({
    //       ...o,
    //       finish: event.target.checked
    //     }));
    //     localStorage.setItem("all",JSON.stringify(state.all))
    //   },
    // selets(state,{id,finish}) {
    //   state.all = [{finish,id}, ...state.all];
    //   state.all = state.all.map(o => (o.id === id ? { ...o, finish } : o));
    //   localStorage.setItem("all",JSON.stringify(state.all))
    // }



    addshouchang(state, { img, num, color, chima, jiage, title, name, finish, itemId }) {
      // console.log(all);
      if (state.shops.length == 0) {
        state.shops = [{ id: 1, name }];
        state.shouchang = [{ img, num, color, chima, jiage, title, name, finish, id: 1, itemId }, ...state.shouchang];
        localStorage.setItem("shops", JSON.stringify(state.shops));
        localStorage.setItem("shouchang", JSON.stringify(state.shouchang));
      } else {
        // console.log(name);
        // console.log(state.shop.filter((res) => res.name == name));
        if (state.shops.filter((res) => res.name == name).length != 0) {
          console.log(1);
          console.log(state.shops.filter((res) => res.name == name)[0]?.id);
          state.shouchang = [{ img, num, color, chima, jiage, title, name, itemId, finish, id: state.shops.filter((res) => res.name == name)[0].id }, ...state.shouchang];
        } else {
          let idnum = state.shops.length ? Math.max(...state.shops.map(o => o.id)) + 1 : 1;
          state.shops = [...state.shops, { id: idnum, name }];
          state.shouchang = [{ img, num, color, chima, jiage, title, name, finish, id: idnum, itemId }, ...state.shouchang];
        }



        localStorage.setItem("shouchang", JSON.stringify(state.shouchang));
        localStorage.setItem("shops", JSON.stringify(state.shops));
        // state.shop.filter((res) => res.name == name)

      }


      // state.all = state.all.map(o => (o.id === id ? { ...o, finish } : o));
      // state.all = state.all.map(o => ({
      //   ...o,
      //   finish: event.target.checked
      // }));

      //  state.all.every(o => o.finish);
    },
    addxinid(state) {
      let iid = state.xinid.length ? Math.max(...state.xinid.map(o => o.id)) + 1 : 1;
      state.xinid = [...state.xinid, { id: iid }];
      localStorage.setItem("xinid", JSON.stringify(state.xinid));
    },
    // fangfa: function(state,ysc) {
    //   //console.log(123);
    //   // if (state.ysc === false) {
    //   //   state.ysc = true;
    //   // } else if (state.ysc === true) {
    //   //   state.ysc = false;
    //   // }
    //   // localStorage.setItem
    // },
    removerall() {
      // if(){
      //   localStorage.removeItem('shops')
      //   localStorage.removeItem('shouchang')
      // }

    },

  },
  actions: {
    addTabs(context) {
      Vue.axios
        .get("https://apis.netstart.cn/mogujie/category.json")
        .then(res => {
          console.log(123);
          context.commit('addTabs', res.data.data[117330].list);
        });

    },
    addsongs(context, { pid }) {
      Vue.axios
        .get("https://apis.netstart.cn/mogujie/category/getSub", {
          params: { pid }
        })
        .then(res => {
          console.log(res.data.data.list);
          // this.addsons(res.data.data.list);
          context.commit('addsongs', res.data.data.list);
        });
    },
    addaddFenlei(context, { fcid, page, sort }) {
      Vue.axios
        .get("https://apis.netstart.cn/mogujie/category/miniWall", {
          params: { fcid, page, sort }
        })
        .then(res => {
          console.log(res.data.result.wall.docs);
          //this.addFenlei(res.data.result.wall.docs);
          context.commit('addFenlei', res.data.result.wall.docs);
        });
    },

    addsearchresult(context, { q, page, sort }) {
      Vue.axios
        .get("https://apis.netstart.cn/mogujie/search/searchByKeyword", {
          params: {
            q, page, sort, offset: 30,
          }
        })
        .then(res => {
          console.log(res.data.result);
          context.commit('addsearchresult', res.data.result);
        });

      // Vue.axios
      // .get("https://apis.netstart.cn/mogujie/search/searchByCategory",{
      //   params:{
      //     page,sort,offset,fcid
      //   }
      // })
      // .then(res=>{
      //   console.log(res.data.result);
      //   context.commit('addsearchresult',res.data.result)
      // })
    },
    //   getHomeNewlist :function (context{ q, page,sort,offset, } = {}){
    // Vue.axios.get("https://apis.netstart.cn/mogujie/search/searchByKeyword", {
    //   params: {
    //     q:q,
    //     page:page,
    //     sort:sort,
    //     offset:offset,


    //   },
    // }).then(res=>{
    //   console.log(res);
    //   context
    // })}

    adddetails(context, { itemId }) {
      Vue.axios
        .get("https://apis.netstart.cn/mogujie/goods/detail", {
          params: { itemId }
        })
        .then(res => {
          //console.log(123);
          context.commit('adddetails', res.data.data.result);
          context.commit('loadingsss', false);
         
          // console.log('res',res.data.data.result);
        });

    },

  },

  modules: {
  }
});
