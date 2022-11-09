<template>
  <div class="Gwc">
    <div class="header">
      <div @click="$router.back()">
        <svg t="1665753592468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="3729" width="20" height="20">
          <path
            d="M401.066667 512l302.933333 302.933333-59.733333 59.733334L341.333333 571.733333 281.6 512 341.333333 452.266667l302.933334-302.933334 59.733333 59.733334L401.066667 512z"
            fill="#444444" p-id="3730" />
        </svg>
      </div>
      <div>购物车</div>
      <div class="bianji" v-if="dele" @click="dele = !dele">编辑</div>
      <div class="bianji" v-else @click="dele = !dele">完成</div>
      <!-- @click="sc" -->
    </div>
    <hr style="margin-top:67rem" />
    <div class="find" v-if="!shop.length && !all.length">
      <div></div>
      <div>你的购物车空空如也</div>
      <div class="guangg" @click="$router.push({ path: '/' })">
        <span>去逛逛</span>
      </div>
    </div>
    <div class="list">
      <ul>
        <div class="shopname">
          <!-- :checked="" -->
          <!-- @change="SELECT_ITEM"  -->
          <!-- <input class="one" type="checkbox" @click="aaa()" /> -->
          <!-- <div class="top" v-for="(i,index) in all" :key="index">{{i.name}}</div> -->
          <!-- <div class="top" v-if="(o,index) in shop" :key="index">{{o.name}}</div> -->
        </div>

        <li v-for="(item, index) in shop" :key="index" class="zheng">
          <!-- v-show="shopnames" -->
          <div class="en">
            <!-- <input type="checkbox" v-model="item.finish"  @click="aaa()"/> -->
            <van-checkbox checked-color="#ee0a24" v-model="checked" @click="aaa()"></van-checkbox>
            <div style="  margin-left: 16rem;">{{ item.name }}</div>
          </div>
          <div class="ens">
            <div class="qs">
              <div class="top" v-for="(item, index) in all.filter(res => res.name == item.name)" :key="index">
                <!-- <input type="checkbox" v-model="item.finish"  /> -->
                <van-checkbox class="twos" checked-color="#ee0a24" v-model="item.finish"></van-checkbox>
                <div class="left">
                  <van-image :src="`${item.img}`" />
                </div>
                <div class="right" @click="$router.push({ path: '/Details', query: { keyword: item.itemId } })">
                  <div class="info">{{ item.title }}</div>
                  <div class="sizess">颜色:{{ item.color }}尺码:{{ item.chima }}</div>
                  <div class="botm">
                    <div style="color:red">¥{{ item.jiage | curreny }}</div>
                    <!-- <van-stepper v-model="value" /> -->
                    <div class="jis" style="display: flex;
  
                       justify-content: space-between;
                       width: 40rem;
                       background-color: gray;
                       border-radius: 20rem;">
                      <div
                        @click.stop="item.num === 1 ? subtractnum({ id: item.id, num: 1 }) : subtractnum({ id: item.id, num: item.num-- })">
                        -</div>
                      <div>{{ item.num }}</div>
                      <div @click.stop="addnum({ id: item.id, num: item.num++ })">+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="fot">
        <div class="selet">
          <!-- :checked="allCheck"  -->

          <!-- <input class="one" type="checkbox"  /> -->

          <van-checkbox class="one" checked-color="#ee0a24" v-model="checked" @click="ccc()"></van-checkbox>
          <div>全选</div>
        </div>
        <div class="money">
          <div class="n" v-if="dele">合计:¥ <span style="color:red">{{ bbb | curreny }}</span></div>
          <div class="btns">
            <button type="submit" v-if="dele" @click="tiao()">结算</button>
            <button type="submit" v-else @click="deleteTodo">删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  filters: {
    curreny: function (data) {
      // data = Number(data).toFixed(2);
      if (data?.toString().length >= 4) {
        const moneys = data / 100;
        const val = parseFloat(moneys).toFixed(2);
        return val;
      }
    }
  },
  data: function () {
    return {
      value: 1,
      dele: true,
      checked: false,

    };
  },
  created() {
    // this.value=this.all.num
  },
  computed: {
    // ...mapState(["filter", "count"]),
    ...mapState(["all", "shop", "details"]),

    bbb: function () {
      var s = 0;
      this.all.forEach(o => {
        if (o.finish === true) {
          // this.all.map((o)=>o.jiage*o.nums)
          s += o.jiage * o.num;
        }
      });
      return s;
    }

    // ...mapGetters(["allCheck1"])
    //    allCheck: function() {
    //   return this.all.every(o => o.finish);
    // },
  },
  methods: {
    ...mapMutations(["deleteTodo", "addnum", "subtractnum"]),
    shopnames: function () {
      // if() {
      // }

    },

    tiao: function () {
      if (this.checked === true) {
        this.$router.push({ path: '/Dindan' })
      }
    },

    aaa() {

      this.all.forEach(o => {
        o.finish = !o.finish;
      });
      this.shop.forEach(o => {
        o.finish = !o.finish;
      });
      //  } else{
      // //     this.all = this.all.map(o => (o.id === this.shop.id ? { ...o, o.finish=!o.finish } : o));
      //    this.all.forEach(o => {
      //   if (o.id === this.shop.id) {
      //     o.finish = !o.finish;
      //   }
      // });

    },
    ccc() {
      this.all.forEach(o => {
        o.finish = !o.finish;
      });
      this.shop.forEach(o => {
        o.finish = !o.finish;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.Gwc {
  .van-checkbox {
    margin-right: 10rem;
  }

  overflow: auto;
  height: 1000rem;

  .header {
    z-index: 2;
    position: fixed;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rem 0;
    margin: 0 10rem;

    .bianji {
      width: 60rem;
      margin-right: 9rem;
    }
  }

  .find {
    display: flex;
    flex-direction: column;
    align-items: center;

    .guangg {
      padding: 10rem;
      background-color: red;
      margin: 10rem;
    }
  }

  .list {
    margin-top: 10rem;

    ul {
      padding: 10rem;

      .shopname {
        display: flex;
        margin-bottom: 10rem;

        input {
          margin-right: 10rem;
        }
      }

      li.zheng {
        flex-direction: column;
        display: flex;
        align-items: center;

        .en {
          display: flex;
          align-items: center;
          width: 100%;
          height: 40rem;

          input {
            margin-right: 10rem;
          }
        }

        .ens {
          display: flex;
          align-items: center;

          .qs {
            .top {
              display: flex;
              align-items: center;
              width: 100%;
              margin-bottom: 10rem;

              .van-checkbox {
                padding: 20rem;
                margin-left: -20rem;
              }

              .left {
                margin-right: 10rem;
                width: 50rem;
                height: 60rem;

                .van-image {
                  width: 50rem;
                  height: 60rem;
                  border: radius 10rem;
                }
              }

              .right {
                .info {
                  text-align: left;
                }

                .sizess {
                  text-align: left;
                }

                .botm {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                }
              }
            }
          }
        }

        // input {
        //   margin-right: 10rem;
        // }
        // .left {
        //   .van-image {
        //     width: 50rem;
        //     height: 60rem;
        //     border: radius 10rem;
        //   }
        // }
        // .right {
        //   .info {
        //     text-align: left;
        //   }
        //   .sizess {
        //     text-align: left;
        //   }
        //   .botm {
        //     display: flex;
        //     justify-content: space-between;
        //     align-items: center;
        //   }
        // }
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .fot {
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 10rem;

      .selet {
        display: flex;
      }

      .money {
        display: flex;
        align-items: center;

        .n {
          margin-right: 10rem;
        }

        .btns {
          button {
            border-radius: 20rem;
            width: 80rem;
            height: 40rem;
            background-color: #ff488b;
            border: none;
            color: white;
          }
        }
      }
    }
  }
}
</style>

