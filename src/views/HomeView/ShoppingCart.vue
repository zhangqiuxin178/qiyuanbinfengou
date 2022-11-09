<template>
    <div class="cart-box">
        <div class="top-bar">
            <div class="left" @click="$router.go(-1)">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="gwc">购物车</div>
            <div class="bj" v-if="deletes" @click="deletes = !deletes">编辑</div>
            <div class="bj" v-else @click="deletes = !deletes">完成</div>
        </div>
        <div class="none" v-if="shopList.length == 0">
            <div class="title">
                你的购物车空空如也
            </div>
            <div class="btn" @click="$router.push({ path: '/' })">去逛逛</div>
        </div>
        <div class="goods-box" v-if="shopList.length != 0">
            <ul class="goods-list">
                <li class="list" v-for="(s, i) in shopList" :key="i">
                    <div class="shop-box">
                        <input type="checkbox" v-model="checked" @click="shopChecked">
                        <span class="shop-name">{{ s.shopName }}</span>
                    </div>
                    <div class="show-goods">
                        <div class="goods" v-for="(c, i) in cartList.filter(res => res.shopName == s.shopName)"
                            :key="i">
                            <div class="ipt"><input type="checkbox" v-model="c.finish"></div>
                            <div class="box">
                                <div class="left-img">
                                    <img :src="c.img">
                                </div>
                                <div class="right">
                                    <div class="title">{{ c.title }}</div>
                                    <div class="style">颜色:{{ c.seletedcolor }} 尺码:{{ c.chima }}</div>
                                    <div class="price-box">
                                        <div class="price">¥{{ c.jiage | curreny }}</div>
                                        <div class="num-box">
                                            <div class="minus"
                                                @click="c.num === 1 ? minusNum({ id: c.id, num: 1 }) : minusNum({ id: c.id, num: c.num-- })">
                                                - </div>
                                            <div class="nums">{{ c.num }}</div>
                                            <div class="add" @click.stop="addNums({ id: c.id, num: c.num++ })"> + </div>
                                        </div>
                                        <!-- <el-input-number v-model="c.num" :min="1" :max="Infinity"></el-input-number> -->
                                    </div>
                                </div>
                            </div>
                            <div class="foot">
                                <div class="all">
                                    <input type="checkbox" v-model="allChecked" @click="handleChecked">
                                    <div class="quanxuan">全选</div>
                                </div>
                                <div class="right-box">
                                    <div class="all-price" v-if="deletes">合计: <span
                                            style="color: #f46; font-weight: bold;">¥{{ getAllPrice
                                                    | curreny
                                            }}</span>
                                    </div>
                                    <div class="btn" v-if="deletes" @click="addOrder({
                                        img: c.img,
                                        chima: c.chima,
                                        jiage: c.jiage,
                                        title: c.title,
                                        seletedcolor: c.seletedcolor,
                                        shopName: c.shopName,
                                        num: c.num
                                    }), buy()">结算</div>
                                    <div class="btn" v-else @click="deleteGoods">删除</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
    data() {
        return {
            checked: false,
            deletes: true,
            allChecked: false
        };
    },
    computed: {
        ...mapState(["cartObj", "cartList", "shopList"]),
        getAllPrice() {
            let price = 0;
            this.cartList.forEach(o => {
                if (o.finish === true) {
                    // this.all.map((o)=>o.jiage*o.nums)
                    price += o.jiage * o.num;
                }
            });
            return price;
        }
    },
    methods: {
        ...mapMutations(["minusNum", "addNums", "deleteGoods", "addOrder"]),

        handleChecked() {
            if (this.allChecked === false) {
                this.cartList.forEach(item => {
                    return item.finish = true
                })
                this.checked = true
            } else {
                this.cartList.forEach(item => {
                    return item.finish = false
                })
                this.checked = false
            }
            this.allChecked = !this.allChecked
        },
        shopChecked() {
            if (this.cartList.filter(res => res.shopName == this.shopList.filter(n => n.shopName))) {
                if (this.checked === false) {
                    this.cartList.forEach(item => {
                        return item.finish = true
                    })
                    this.allChecked = true
                } else {
                    this.cartList.forEach(item => {
                        return item.finish = false
                    })
                    this.allChecked = false
                }
            }
        },
        buy() {
            this.$router.push({ path: '/payment' })
        },
    },
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
}
</script>

<style lang="scss" scoped>
.top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    margin-bottom: 15px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;

}

.none {
    padding-top: 160px;
    text-align: center;

    .btn {
        width: 80px;
        height: 30px;
        line-height: 30px;
        background-color: #f46;
        color: #fff;
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
    }
}

.shop-name {
    font-size: 18px;
    font-weight: bold;
}

.goods-box {
    padding-top: 60px;
    background: #ccc;
    padding-bottom: 1px;
}

.goods {
    display: flex;
    align-items: center;
    margin-top: 15px;

    .box {
        display: flex;

        .left-img {
            width: 70px;
            height: 92px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 5px;


            .title {
                font-size: 13px;
                font-weight: 700;
            }

            .style {
                color: #666;
                font-size: 12px;
            }

            .price-box {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 3px;

                .price {
                    color: #f46;
                    font-weight: bold;
                }

                .num-box {
                    display: flex;
                    width: 80px;
                    height: 22px;
                    line-height: 22px;
                    background: #ccc;
                    border-radius: 999px;
                    flex-direction: row;
                    justify-content: space-between;

                    .minus,
                    .add {
                        width: 20px;
                        height: 21px;
                        border-radius: 999px;
                        background: #fff;
                        text-align: center;
                    }
                }
            }
        }
    }
}

.list {
    width: 94vw;
    background: #fff;
    margin: 0 auto;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
}

.foot {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 45px;
    background: #fff;


    .all {
        display: flex;
        align-items: center;
    }

    .right-box {
        display: flex;
        align-items: center;

        .btn {
            width: 75px;
            height: 37px;
            line-height: 37px;
            background: #f46;
            color: #fff;
            text-align: center;
        }
    }
}
</style>