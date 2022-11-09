<template>
  <div class="DetailsView">
    <div class="lload" v-if="loadingsss">
      <van-loading size="24px" style=" top: 124px;
    left: 0;">加载中...</van-loading>
    </div>
    <div class="header" style="background-color: #f9f9f9;">
      <div class="btnss" style="position: fixed;
    top: 0;
    right: 0;
    width: 40rem;
    height: 40rem;
    z-index: 9;">
        <div>
          <svg t="1665795869685" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="1376" width="20" height="20" fill="white">
            <path
              d="M691.1168 896 577.7792 896c-18.1824 0-32.9344-14.8416-32.9344-33.1456l0-225.472c0-1.5424 0.0128-3.0464 0.0384-4.4928L479.0464 632.8896c0.0128 1.4656 0.032 2.9696 0.032 4.4928l0 225.472c0 18.2976-14.7584 33.1456-32.9408 33.1456L332.8064 896c-64.5632 0-117.088-56.992-117.088-127.0656L215.7184 589.0304l-6.0608 0c-34.3552 0-62.6688-17.6128-75.7312-47.136-10.7008-24.3456-9.536-63.3792 25.792-100.1408l266.2144-277.0048C448.7616 141.0432 479.3152 128 511.9744 128s63.2064 13.0432 86.0224 36.7296l266.2528 277.0048c35.4624 36.8832 36.544 75.9616 25.7344 100.2304-12.9152 29.408-41.2352 47.0528-75.6928 47.0528l-6.0672 0 0 179.9168C808.2048 839.008 755.68 896 691.1168 896L691.1168 896zM610.7328 829.7152l80.3904 0c31.6352 0 51.2064-31.5456 51.2064-60.7808L742.3296 555.8784c0-18.2912 14.7584-33.1456 32.9408-33.1456l39.0016 0c10.6752 0 13.8368-3.8976 15.5008-7.7248 1.248-3.4496 0.16-13.5936-12.9024-27.168L550.656 210.8544c-20.5248-21.3504-56.8192-21.3504-77.3888 0.0128L207.0656 487.8464c-13.0752 13.6064-14.144 23.7952-12.8768 27.2832 1.6128 3.6672 4.8064 7.6032 15.4496 7.6032l39.0208 0c18.1824 0 32.9408 14.8416 32.9408 33.1456l0 213.0624c0 29.2352 19.5648 60.7808 51.2064 60.7808l80.3904 0-0.096-199.9936c-0.2944-14.9952-0.6592-33.664 13.7216-48.4096 14.3616-14.7328 33.9456-14.7328 40.3648-14.7328l89.568 0c6.4384 0 26.0032 0 40.3648 14.7328 14.3616 14.752 14.0032 33.4208 13.7088 48.4096l-0.096 7.6608L610.7328 829.7152 610.7328 829.7152zM610.7328 829.7152"
              p-id="1377" />
          </svg>
        </div>

        <div class="gouwuche" @click="$router.push({ path: '/Gwc' })">
          <svg t="1665795910539" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="3140" width="20" height="20" fill="white">
            <path d="M246.4 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z" p-id="3141" />
            <path d="M716.8 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z" p-id="3142" />
            <path
              d="M905.6 764.8l-537.6 0c-28.8 0-57.6-25.6-64-54.4l-96-566.4c-9.6-54.4-60.8-96-115.2-96l-22.4 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l22.4 0c28.8 0 57.6 25.6 64 54.4l96 566.4c9.6 54.4 60.8 96 115.2 96l537.6 0c12.8 0 25.6-12.8 25.6-25.6C931.2 777.6 921.6 764.8 905.6 764.8z"
              p-id="3143" />
            <path
              d="M880 179.2l-572.8 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l572.8 0c25.6 0 38.4 16 32 41.6l-70.4 281.6c-6.4 32-41.6 57.6-73.6 60.8l-396.8 28.8c-12.8 0-25.6 12.8-22.4 28.8 0 12.8 12.8 25.6 28.8 22.4l396.8-28.8c54.4-3.2 105.6-48 118.4-99.2l70.4-281.6C976 230.4 937.6 179.2 880 179.2z"
              p-id="3144" />
          </svg>
        </div>
      </div>
      <DetailSwiper />
      <DetailBaseInfo />
      <!-- <ul style="display:flex">
      <li >-->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item style="width:375rem" v-for="i in details?.topImages" :key="i.id">
          <van-image :src="`${i}`" alt class="play-icon" />
        </van-swipe-item>
      </van-swipe>
      <!-- </li>
      </ul>-->
      <!-- 颜色规格 -->
      <!-- <div class="colo" style="display:flex">
<div>{{details?.skuBarInfo.label}}</div>
<ul style="display:flex"><li v-for="(item,index) in details?.skuBarInfo.list" :key="index"><van-image :src="`${item.image}`" alt  /></li></ul>
      </div>-->
      <!-- 详情 -->
      <div class="cont" style="padding:20rem 10rem;background:#ffffff">
        <div style="display:flex;justify-content: space-between;">
          <div style="font-size:24rem">
            {{ details?.normalPriceV2?.currency }}
            {{ details?.normalPriceV2?.nowPrice }}
            {{ details?.normalPriceV2?.highPriceDesc }}
          </div>
          <div>已售{{ details?.rateInfoV2?.sales }}</div>
        </div>

        <div style="display:flex;justify-content: space-between;align-items: center;padding: 10rem 0;">
          <p style="text-align: left;font-size: 15rem;">
            <span>{{ details?.normalShareInfo?.title }}</span>
          </p>
          <!-- {{details?.itemServices.columns[0].desc}} -->
          <div style="display:flex;width:65rem;width: 74rem;
    background-color:#f8f8f8;
    line-height: 20rem;
    border-radius: 20rem;
    text-align: center;
    justify-content: center;
    align-items:center;height:20rem">
            <van-image :src="`${details?.itemInfo?.pickforme?.icon}`" style="width:13.5rem;height:13.5rem" />
            <div style="color:#999;width:40rem">{{ details?.itemInfo?.pickforme?.name }}</div>
          </div>
        </div>
        <!-- {{details?.itemInfo.pickforme.icon }} -->
      </div>
      <div class="component__occupying"></div>
      <div style="linheight:45rem;
    background-color: #fff;padding-left: 10rem;">
        <div>
          <div style="text-align: left;height:45rem;line-height: 45rem;color:#999;position:relative;display: flex;
    flex-wrap: nowrap;">
            <div style="width:30rem;">选择</div>
            <!-- <span style="position: absolute;top: 0;
            left: 43px;">已选:</span>-->
            <!-- <van-cell is-link @click="showPopup">已选</van-cell>
            <van-popup v-model="show"  closeable position="bottom" :style="{ height: '50%' }" />-->
            <!-- <div>{{details?.styleKey}}</div>   -->
            <!-- <van-cell is-link title="颜色" @click="show = true" /> -->
            <van-cell is-link title="已选" @click="show = true" />
            <!-- <div  style="position: absolute;
    top: 0;
            left: 92px;">请选择 颜色</div>-->
            <van-action-sheet v-model="show" title>
              <div class="content">
                <div class="Top" style="display:flex;position:relative;align-items: center;">
                  <!-- <div class="nnn" :style="{background:`url('${data1?tupian:details?.webImOptionInfo?.option?.img}')`}"></div> -->

                  <div class="xxx" style="margin: 10rem;">
                    <van-image :src="`${data1 ? tupian : details?.webImOptionInfo?.option?.img}`" width="94"
                      height="120" />
                  </div>
                  <!-- <van-image v-else :src="`${tupian}`" width="120" /> -->
                  <div class="right" style="display: flex;
                  flex-direction: column;
                  margin-left: 10rem;
                  line-height: 30rem;
                  height: 120rem;">
                    <span v-if="!data1">{{ details?.skuInfo?.defaultPrice }}</span>
                    <span v-else>¥{{ jiage | curreny }}</span>
                    <span v-if="!data1">库存:{{ details?.skuInfo?.totalStock }}件</span>
                    <span v-else>库存:{{ jianshu }}件</span>
                    <!-- details?.skuInfo.skus[0].stock -->
                    <span v-if="!data1">请选择 颜色</span>
                    <span v-else style="display: block; width: 200rem;">已选:{{ seletedcolor }}{{ chima }}</span>
                  </div>
                  <div style="
                  position: absolute;
                  top: -10px;
                  right: 18px;">╳</div>
                </div>

                <div class="two">
                  <div style="
                  margin-left: 10rem;
                      height: 30rem;">{{ details?.skuInfo?.styleKey }}</div>
                  <ul style="display: flex;
    flex-wrap: wrap;">
                    <li v-for="(item, index) in details?.skuInfo?.props[0]?.list" :key="index"
                      @click="ms(item.name, item.name), seleted = !seleted, seletedcolo(item.name), nums(details?.skuInfo.skus[index].stock), qian(details?.skuInfo.skus[index].nowprice)"
                      :class="{ active: data1 == item.name }">{{ item.name }}</li>
                  </ul>
                </div>

                <div class="cmm" style="margin-left: 10rem;">
                  <div style="margin-left: 0rem;">{{ details?.skuInfo?.sizeKey }}</div>
                  <ul style="display: flex;
    flex-wrap: wrap;">
                    <li style="border: 1px solid #ccc;height: 30rem;
    line-height: 30rem;margin-right: 5rem;margin-bottom: 5rem;padding: 0 10rem;text-align: center;"
                      v-for="(item, index) in details?.skuInfo?.props[1]?.list" :key="index"
                      @click="mss(item.name, item.index), seleted = !seleted, chimas(item.name), nums(details?.skuInfo.skus[index].stock), qian(details?.skuInfo.skus[index].nowprice)"
                      :class="{ actives: data2 == item.index }">{{ item.name }}</li>
                  </ul>
                </div>

                <div class="three">
                  <div style="margin-left: 10rem;">
                    <span>数量</span>
                  </div>
                  <van-stepper v-model="value" style="height: 100rem;margin-left: 10rem;" />
                </div>

                <div class="btn" style="width:100%;display: flex;">
                  <!-- <div style="width:50%;height=50;">加入购物车</div>
                  <div>立即购买</div>-->
                  <van-goods-action>
                    <van-goods-action-button class="x-add" color="#ffecef" type="warning" text="确认" @click="addshoppingall({
                      img: tupian,
                      num: value,
                      color: seletedcolor,
                      chima: chima,
                      jiage: jiage,
                      title: details?.normalShareInfo?.title,
                      name: details?.shopInfo?.name,
                      finish: finish,
                      itemId: $route.query.keyword,
                    
                    
                    }); shopingcard()"></van-goods-action-button>
                    <!-- <van-goods-action-button
                      class="x-add"
                      type="danger"
                      color="#ff498c"
                      text="立即购买"
                    />-->
                  </van-goods-action>
                </div>
              </div>
            </van-action-sheet>
          </div>
          <!-- <div style="text-align: right;
    position: relative;
    top: -42px;
          right: 16px;">   <svg t="1665586124442" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2520" width="20" height="20"><path d="M709.845333 250.346667a22.4 22.4 0 0 1 0.533334-30.848 20.48 20.48 0 0 1 29.717333 0.64l272.426667 292.693333-272.426667 292.650667a20.458667 20.458667 0 0 1-29.717333 0.64c-8.32-8.32-8.746667-21.973333-0.533334-30.848l242.346667-262.464-242.346667-262.464z" fill="#dbdbdb" p-id="2521"></path></svg></div></div>-->
        </div>
        <div style="text-align: left;height:45rem;color:#999;line-height: 45rem;">
          {{ details?.itemServices?.columns[1].desc }}</div>
        <div style="display:flex;height:45rem;align-items: center;">
          <span style="color:#999;width:26rem">服务</span>
          <!-- <van-cell is-link @click="showPopup"> -->
          <!-- <van-cell is-link  @click="show = true" > -->

          <ul style="display:flex;font-size: 12rem;width: 354rem;padding:0 10rem">
            <li v-for="(o, index) in details?.itemServices?.services" :key="index" style="margin:0 2rem">{{ o.name }}
            </li>
          </ul>
          <!-- </van-cell> -->
          <!-- <van-action-sheet title="标题" v-model="show" >
  <div class="content">

  </div>
          </van-action-sheet>-->
          <!-- <van-popup v-model="show">内容</van-popup> -->
          <!-- <van-popup v-model="show"   closeable position="bottom" :style="{ height: '50%' }" /> -->
        </div>

        <!-- <div>{{details?.styleKey}}</div>
        <div v-for="(o,index) in details?.skus" :key="index"></div>-->
      </div>
      <div class="component__occupying"></div>
      <!-- // 评论 -->

      <div style="background:#fff;height:162rem">
        <div style="display: flex;
    padding: 10rem;
    background-color: #fff;
    justify-content: space-between;
   ">
          <!-- <li
            style="background-color: #fff6f6; padding: 0 10rem;margin-right: 10rem;"
            v-for="(item,index) in say"
            :key="index"
          >{{item.value}}</li>-->
          <div>评价{{ saying?.total }}</div>
          <div style="color:red;display: flex;
    align-items: center;" @click="$router.push({ path: '/Saying', query: { saying: saying } })">
            评分{{ saying?.averageScore }}
            <svg t="1665753175328" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="2659" width="20" height="20">
              <path d="M320 230.8 361.4 192 704 512 361.4 832 320 793.4 621 512Z" p-id="2660" />
            </svg>
          </div>
        </div>

        <!-- <div class="shuo">
          <ul class="two">
            <li v-for="(i,index) in saying?.rateTags" :key="index">
              <span>{{i.value}}{{i.num}}</span>
            </li>
          </ul>
        </div>-->

        <van-swipe class="my-swipe" indicator-color="white" style="height:110rem;background:#fff">
          <van-swipe-item style="width:300rem;
   margin: 0 10rem;height:110rem;color:#333;display:flex;flex-direction: column;background:#fafafa"
            v-for="(item, index) in list" :key="index">
            <div style="display:flex;height:40rem;line-height:40rem;display: flex;
    font-size: 12rem;
    align-items: center;margin-top: 10rem;margin-left: 10rem;">
              <van-image round class="rad" :src="`${item.user.avatar}`" style="width: 40rem;
    height: 40rem;border-radius: 50%;margin-right: 10rem;" />
              <div style="display: flex;
    flex-direction: column;
    align-items: center;
    height: 40rem;
    line-height: 20rem;">
                <span>
                  <span style="font-size: 14rem;
    color: #333;
   
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;">{{ item.user.uid }}</span>
                </span>
                <span>{{ item.time }}</span>
              </div>
            </div>
            <div style="height:40rem;font-size: 12rem;line-height: 25rem;width: 250rem;
    text-align: left;margin-top: 10rem;margin-left: 10rem;">{{ item.content }}</div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- <ul>
          <li
            v-for="(item,index) in list"
            :key="index"
            style="padding: 40rem 0;
    background-color: palegoldenrod;"
          >
            <van-image :src="`${item.images[0]}`" />
            <div>
              <van-image :src="`${item.user.avatar}`" style="width: 20rem;
    height: 20rem;" />
              {{item.user.uname}}
              {{item.userTags[1]?.text}}
              {{item.time}}
            </div>
            <div>{{item.content}}</div>
          </li>
      </ul>-->
      <div class="component__occupying"></div>
      <!-- 店铺 -->
      <div class="shop" style="display:flex;
    padding: 15rem;
    background-color: #fff;">
        <van-image :src="`${details?.shopInfo?.shopLogo}`" alt width="75" height="60" />
        <div style="postion:relative;width:100%;padding-left: 10rem;">
          <div style="display: flex;
    align-items: center;
    justify-content: space-between;">
            <h4 style="
    text-align: left;
">{{ details?.shopInfo?.name }}</h4>
            <div style="display: flex;
    align-items: center;
    ">
              进店
              <svg t="1665586124442" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2520" width="20" height="20">
                <path
                  d="M709.845333 250.346667a22.4 22.4 0 0 1 0.533334-30.848 20.48 20.48 0 0 1 29.717333 0.64l272.426667 292.693333-272.426667 292.650667a20.458667 20.458667 0 0 1-29.717333 0.64c-8.32-8.32-8.746667-21.973333-0.533334-30.848l242.346667-262.464-242.346667-262.464z"
                  fill="#dbdbdb" p-id="2521" />
              </svg>
            </div>
          </div>
          <div style="
    display: flex;
    align-items: center;
">
            <div class="card">
              <ul class="cards">
                <li v-for="(item, index) in details?.shopInfo?.level" :key="index"></li>
              </ul>
            </div>
            <span>{{ details?.shopInfo?.saleDescV2 }}</span>
          </div>
          <div style="display:flex">
            <div v-for="(item, index) in details?.shopInfo?.shopLabels" :key="index" style="display:flex;">
              <span style="margin-right:5rem;display: inline-block;
  
    border-radius: 17rem;
    border: 1px solid #d6d6d6;
    color:#f46;
    margin-top: 5rem;
   ">{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="component__occupying"></div>
      <!-- 图文详情 -->
      <div>
        <div style="display:flex;padding: 20rem;
    justify-content: space-around;background:#fff;border-bottom: 1px solid #e5e5e5;">
          <div>{{ details?.detailInfo?.detailImage[0]?.key }}</div>
          <div>
            <a href="#parameters"></a>
            {{ details?.itemParams?.info?.key }}
          </div>
        </div>
        <ul>
          <li style="height: 62rem;
    line-height: 62rem;
    background-color: #fff;
}">{{ details?.detailInfo?.desc }}</li>
          <li v-for="(item, index) in details?.detailInfo?.detailImage[0]?.list" :key="index">
            <van-image :src="`${item}`" />
          </li>
        </ul>
      </div>

      <div class="parameters" id="parameters">
        <p>商品详情</p>
        <div class="itemParams">
          <div class="item">
            <p v-for="(value, key) in details?.itemParams?.info?.set" :key="key">
              <span>{{ key }}</span>
              <span>{{ value }}</span>
            </p>
          </div>
          <p>
            查看全部
            <van-icon name="arrow" />
          </p>
        </div>
      </div>

      <!-- // 底部 -->
      <!-- <ul class="dibu" style="padding: 20rem 0;background-color: #fff;">
        <li v-for="(item,index) in details?.bottomBar?.buttons" :key="index">
      
         <span>{{item.text}}</span></li>
          
      </ul>-->
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />

        <van-goods-action-icon class="sb" icon="star-o" text="收藏" color="gray" v-if="ysc" @click="fangfa(); addshouchang({
          img: details?.webImOptionInfo?.option?.img,
          num: value,
          color: seletedcolor,
          chima: chima,
          jiage: jiage,
          title: details?.normalShareInfo?.title,
          name: details?.shopInfo?.name,
          finish: finish,
          itemId: $route.query.keyword,
        
        }); " />
        <van-goods-action-icon class="sb" icon="star" text="已收藏" color="#ff5000" v-else @click="fangfa(); removerall(
        
        )  " />

        <van-goods-action-button class="x-add x-adds" color="#ffecef" type="warning" @click="(show = true)"
          text="加入购物车">
        </van-goods-action-button>
        <van-goods-action-button class="x-add" type="danger" color="#ff498c" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import DetailSwiper from "@/components/DetailSwiper.vue";
import DetailBaseInfo from "@/components/DetailBaseInfo.vue";

import { mapState, mapMutations } from "vuex";
export default {
  components: {
    DetailSwiper,
    DetailBaseInfo
  },
  filters: {
    curreny: function (data) {
      // data = Number(data).toFixed(2);
      if (data.toString().length >= 4) {
        const moneys = data / 100;
        const val = parseFloat(moneys).toFixed(2);
        return val;
      }
    }
  },
  //   filters: {
  //   numFilter (value) {
  //     // 截取当前数据到小数点后两位
  //     let realVal = parseFloat(value).toFixed(2)
  //     return realVal
  //   }
  // },
  computed: {
    // ...mapState(["filter", "count"]),
    ...mapState(["details", "all", "xinid", "loadingsss"])
  },

  //   watch: {
  //     q: function(newq) {
  //       this.$store.dispatch("adddetails", { itemId: newq.mes });
  //       //console.log(this.itemId);
  //       //console.log("关键词");
  //     },
  //   },
  created() {
    // this.staus = this.des.staus

    this.$store.dispatch("adddetails", { itemId: this.$route.query.keyword });
    this.gooodsid = this.$route.query.keyword;
    console.log(this.gooodsid);
    //console.log(this.itemId);
    // this.goods =new Goods(data.itemInfo,data.columns,data.itemServices.services,data.normalPriceV2,data.normalShareInfo)

    this.axios
      .get(
        "https://apis.netstart.cn/mogujie/goods/commonRateList?itemId=1n2dne6"
      )
      .then(res => {
        // console.log(res.data.data);
        this.saying = res.data.data;
      });

    this.axios
      .get("https://apis.netstart.cn/mogujie/goods/commonRateList", {
        params: { itemId: this.itemId, parage: 1 }
      })
      .then(res => {
        // console.log(res.data.data.topRateTags);
        // console.log(res.data.data.list);
        this.say = res.data.data.topRateTags;
        this.list = res.data.data.list;
      });
  },
  data: function () {
    return {
      saying: null,
      //  goods:{}
      itemId: "1n2dne6",
      say: [],
      list: [],
      show: false,
      seleted: true,
      seletedcolor: "",
      active: "",
      data1: null,
      data2: null,
      jianshu: "",
      jiage: "",
      tupian: "",
      chima: "",
      value: 1,
      showicon: false,
      finish: false,
      ysc: JSON.parse(localStorage.getItem("ysc")) || true, //记录
      gooodsid: ""

      // kkk:this.details?.skuInfo.skus,
      //style
      // mes:this.$route.query.keyword,
    };
  },

  methods: {
    // ...mapMutations(["adddetails"]),
    fangfa: function () {
      //console.log(123);
      if (this.ysc === false) {
        this.ysc = true;
        localStorage.setItem("ysc", JSON.stringify([{ ysc: false }]));
      } else if (this.ysc === true) {
        this.ysc = false;
        localStorage.setItem("ysc", JSON.stringify([{ ysc: true }]));
      }
    },

    shopingcard: function () {
      if (this.data1 || this.data2) {
        this.$router.push({ path: "/Gwc" });
      }
    },
    ...mapMutations(["addshoppingall", "removerall", "addshouchang"]),
    showPopup() {
      this.show = true;
    },
    ms(name, n) {
      //console.log(n);
      if (this.data1 == n) {
        this.data1 = null;
      } else {
        this.data1 = n;
        this.active = name;
      }
    },
    mss(name, n) {
      if (this.data2 == n) {
        this.data2 = null;
      } else {
        this.data2 = n;
        this.active = name;
      }
    },
    seletedcolo(name) {
      this.seletedcolor = name;
    },
    chimas(name) {
      this.chima = name;
    },
    nums(s) {
      this.jianshu = s;
    },
    qian(q) {
      this.jiage = q;
    }
    // tu(g) {
    //   this.tupian = g;
    // }
    // numFilter(value) {
    //   // 截取当前数据到小数点后两位
    //   // let tempVal = parseFloat(value).toFixed(3);
    //   // let realVal = tempVal.substring(0, tempVal.length - 1);
    //   return value.toFixed(2);
    // },
  },
  watch: {
    all: function (newall) {
      localStorage.setItem("all", JSON.stringify(newall));
    },
    data1: function (newcolor) {
      if (this.details?.skuBarInfo?.list) {
        this.tupian = this.details?.skuBarInfo?.list.filter(o => {
          return o.label === newcolor;
        })[0]?.image;
        //console.log(this.tupian);
      } else {
        this.tupian = this.details?.webImOptionInfo?.option?.img;
        // console.log(this.tupian);
      }
    }
  }
};
//价格 itemInfo.highPrice
//itemInfo.seo.keywords 衣服的名字
// .pickforme  name icon 帮我选
</script>

<style lang="less" scoped>
.lload {
  position: fixed;
  width: 375rem;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: white;
  z-index: 99;
  justify-content: center;
  align-items: center;
}

.sb {
  position: absolute;
  top: 0;
  left: 98rem;
}

// .van-button__text{
//   color: red;
// }
// .shuo {
//   display: flex;
//   flex-wrap: wrap;
//   overflow: hidden;
//   word-break: keep-all;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;

//   ul.two {
//     display: flex;
//     flex-wrap: wrap;

//     li {
//       padding: 10rem;
//       margin: 10rem;
//       border-radius: 4rem;

//       font-size: 12rem;
//       color: #333;
//       background-color: #fff6f6;
//     }
//   }
// }

.cmm {
  ul {
    li {
      &.actives {
        color: red;
      }
    }
  }
}

.two {
  ul {
    padding: 10rem;

    li {
      height: 30rem;
      line-height: 30rem;
      // min-height: 54rem;
      // min-width: 120rem;
      padding: 0 10rem;
      border: 1px solid #ccc;
      border-radius: 6rem;
      // margin-right: 2rem;
      // margin-bottom: 2rem;
      font-size: 12rem;
      cursor: pointer;
      color: #333;
      text-align: center;
      margin: 3rem;

      &.active {
        color: red;
      }
    }
  }
}

.content {
  // padding: 16px 16px 160px;
  // position: absolute;
  height: 400rem;

  .Top {
    position: relative;

    .nnn {
      width: 50rem;
      height: 100rem;
      background-size: 115rem 143rem;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      width: auto;
      height: 100%;
      display: block;
    }
  }
}

.dibu {
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 0;
  justify-content: space-around;

  li {
    height: 50rem;
    width: 60rem;
    background-image: linear-gradient(90deg,
        rgb(255, 87, 119),
        rgb(255, 70, 143));
    color: rgb(255, 255, 255);

    :nth-last-child(2).li {
      background-color: rgb(255, 236, 239);
    }

    // span{

    // }
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  width: 300rem;
  height: 400rem;
  // background-color: #39a9ed;
}

.component__occupying {
  height: 10rem;
  width: 100%;
  background: #f9f9f9;
}

.x-add {
  border-radius: 0;
}

.x-adds {
  margin-left: 55rem;
}

// .van-overlay{
//   background-color: rgba(0, 0, 0, 0.4);
// }

.card {
  .cards {
    display: flex;

    li {
      background-image: url("../img/收藏(1).png");
      background-size: 20rem 20rem;
      width: 20rem;
      height: 20rem;
      background-repeat: no-repeat;
    }
  }
}

.parameters {
  p {
    font-size: 13rem;
    margin: 13.5rem 12rem;
    color: #666;
  }

  .itemParams {
    background: #f6f6f6;
    margin: 12rem;
    padding: 12rem;
    border-radius: 4rem;

    .item {
      height: 140rem;
      overflow: hidden;

      p {
        display: flex;
        height: 23rem;
        padding-bottom: 5rem;
        margin: 0;

        span {
          font-size: 12rem;

          &:nth-child(1) {
            width: 95rem;
            white-space: nowrap;
            overflow: hidden;
          }

          &:nth-child(2) {
            color: #333;
            width: calc(100% - 95rem);
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
      }
    }

    p {
      margin: 0;
    }
  }
}
</style>

