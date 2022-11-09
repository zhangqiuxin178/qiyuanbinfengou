<template>
    <div class="merchandise-box" v-loading="loading">

        <div class="merchandise">
            <div class="component-detail">
                <div class="component-swiper-image" v-for="(item, index) in merchandiseObj.topImages" :key="index">
                    <img :src="item" />
                </div>
            </div>

        </div>

        <div class="itemInfo">
            <div class="price-box">
                <div class="price">¥{{ merchandiseObj.itemInfo?.lowPrice }}
                    <span
                        :style="{ color: merchandiseObj.normalPrice?.priceTags[0]?.textColor, background: merchandiseObj.normalPrice?.priceTags[0]?.bgColor, fontSize: '12px' }">{{
                                merchandiseObj.normalPrice?.priceTags[0]?.text
                        }}</span>
                </div>
                <div class="sales">已售{{ merchandiseObj.normalPrice?.sales }}</div>
            </div>
            <div class="title">{{ merchandiseObj.itemInfo?.title }}</div>
        </div>
        <div class="color"></div>

        <div class="size-box">
            <div class="size" @click="sizeShow = true">选择 尺码</div>
            <div class="yunfei">免运费</div>
            <div class="fuwu">72小时发货 | 7天无理由退货 | 延误必赔</div>
            <el-drawer :visible.sync="sizeShow" :direction="direction" :size="'70%'">
                <div class="shangpin-box">
                    <div class="shangpin-img">
                        <div class="img">
                            <img :src="`${data1 ? tupian : merchandiseObj?.webImOptionInfo?.option?.img}`"
                                style="width: 94px; height: 120px;">
                        </div>
                        <div class="box">
                            <div class="shangpin-price" v-if="!data1">{{ merchandiseObj.skuInfo?.defaultPrice }}
                            </div>
                            <div v-else class="shangpin-price">¥{{ jiage | curreny }}</div>
                            <div class="kucun" v-if="!data1">库存: {{ merchandiseObj.skuInfo?.totalStock }}件</div>
                            <div v-else class="kucun">库存:{{ jianshu }}件</div>
                            <div class="change" v-if="!data1">请选择尺码颜色</div>
                            <div v-else class="change">已选: <span style="color:#ff4466">{{ seletedcolor }}{{ chima
                            }}</span></div>
                        </div>
                    </div>
                    <div class="neirou">
                        <div class="colo">颜色</div>
                        <div class="list-box">
                            <div class="list" v-for="(o, i) in merchandiseObj.skuInfo?.props[0].list" :key="i"
                                @click="showOrhide(o.name, o.name), seleted = !seleted, seletedcolo(o.name), nums(merchandiseObj?.skuInfo.skus[i]?.stock), getPrice(merchandiseObj?.skuInfo.skus[i]?.nowprice)"
                                :class="{ active: data1 == o.name }">{{ o.name
                                }}
                            </div>
                        </div>
                        <div class="chima">尺码</div>
                        <div class="chima-box">
                            <div class="chima-list" v-for="(p, i) in merchandiseObj.skuInfo?.props[1].list" :key="i"
                                @click="sizeChange(p.name, p.index), seleted = !seleted, chimas(p.name), nums(merchandiseObj?.skuInfo.skus[i]?.stock), getPrice(merchandiseObj?.skuInfo.skus[i]?.nowprice)"
                                :class="{ active: data2 == p.index }">{{
                                        p.name
                                }}</div>
                        </div>
                        <div class="shuliang">数量</div>
                        <el-input-number v-model="num" :min="1" :max="Infinity" label="描述文字">
                        </el-input-number>
                        <div class="buy-box">
                            <div class="add-gouwuche" @click="addShoppingCart({
                                img: tupian,
                                chima: chima,
                                jiage: jiage,
                                title: merchandiseObj.itemInfo?.title,
                                seletedcolor: seletedcolor,
                                shopName: merchandiseObj.shopInfo.name,
                                num: num,
                                finish: finish,
                                itemId: iid,
                            }), open2()">加入购物车</div>
                            <div class="goumai" @click="addOrder({
                                img: tupian,
                                chima: chima,
                                jiage: jiage,
                                title: merchandiseObj.itemInfo?.title,
                                seletedcolor: seletedcolor,
                                shopName: merchandiseObj.shopInfo.name,
                                num: num
                            }), buy()">立即购买</div>
                        </div>
                    </div>
                </div>
            </el-drawer>
        </div>



        <div class="color"></div>

        <div class="evaluate-box">
            <div class="evaluate-top">
                <div class="evaluate">评价({{ merchandiseObj.skuInfo?.skus.length }})</div>
                <div class="score">评分<span>{{ merchandiseObj.rateInfoV2?.cScore }} ></span></div>
            </div>
            <div class="evaluate-title">
                <div class="evaluate-list" v-for="(r, i) in merchandiseObj.rateInfo?.rateTags" :key="i">
                    {{ r.value }}({{ r.num }})</div>
            </div>
            <div class="user-box">
                <div class="user" v-for="(u, i) in merchandiseObj.rateInfoV2?.list" :key="i">
                    <div class="box">
                        <div class="user-img">
                            <img :src="u.user.avatar">
                        </div>
                        <div class="user-time">
                            <div class="user-name">{{ u.user.uname }}</div>
                            <!-- <div class="time"></div> -->
                        </div>
                    </div>
                    <div class="user-title">{{ u.content }}</div>
                </div>

            </div>
        </div>
        <div class="color"></div>

        <div class="shop-box">
            <div class="shop-img">
                <img :src="merchandiseObj.shopInfo?.shopLogo">
            </div>
            <div class="shop-news">
                <div class="name-box">
                    <div class="shop-name">{{ merchandiseObj.shopInfo?.name }}</div>
                    <div class="shop-n">进店 ></div>
                </div>
                <div class="goods">{{ merchandiseObj.shopInfo?.saleDescV2 }}</div>
                <div class="foot">
                    <div class="foot-text" v-for="(t, i) in merchandiseObj.shopInfo?.shopLabels" :key="i">{{ t?.text
                    }}
                    </div>
                </div>
            </div>
        </div>
        <div class="color"></div>

        <div class="img-box">
            <div class="img-list" v-for="(l, i) in merchandiseObj.detailInfo?.detailImage[0].list" :key="i">
                <img :src="l">
            </div>
        </div>

        <div class="bottom">
            <div class="shangpin">商品详情</div>
            <div class="chanshu" v-if="merchandiseObj.itemParams?.info.set">
                <div><span>元素</span> {{ merchandiseObj.itemParams?.info.set['元素'] }}</div>
                <div><span>图案</span> {{ merchandiseObj.itemParams?.info.set['图案'] }}</div>
                <div><span>季节</span> {{ merchandiseObj.itemParams?.info.set['季节'] }}</div>
                <div><span>袖长</span> {{ merchandiseObj.itemParams?.info.set['袖长'] }}</div>
                <div><span>风格</span> {{ merchandiseObj.itemParams?.info.set['风格'] }}</div>
                <div @click="drawer = true" type="primary">查看全部&尺码表 ></div>
            </div>
            <el-drawer title="商品参数" :visible.sync="drawer" :direction="direction" :size="'50%'">
                <div class="bottom-size-box" v-for="(j, i) in merchandiseObj.itemParams?.rule?.tables" :key="i">
                    <div class="bottom-size" v-for="(s, i) in j" :key="i">
                        <div v-for="(v, i) in s" :key="i">{{ v }}</div>
                    </div>
                </div>
                <div class="shiji">{{ merchandiseObj.itemParams?.rule?.disclaimer }}</div>
            </el-drawer>
        </div>
        <div class="foot-bar">
            <div class="dianpu">店铺</div>
            <div class="kefu">客服</div>
            <div class="shoucang">收藏</div>
            <div class="add-gouwuche" @click="sizeShow2 = true">加入购物车</div>
            <el-drawer :visible.sync="sizeShow2" :direction="direction" type="primary" :modal="false" :size="'70%'">
                <div class="shangpin-box">
                    <div class="shangpin-img">
                        <div class="img">
                            <img :src="`${data1 ? tupian : merchandiseObj?.webImOptionInfo?.option?.img}`"
                                style="width: 94px; height: 120px;">
                        </div>
                        <div class="box">
                            <div class="shangpin-price" v-if="!data1">{{ merchandiseObj.skuInfo?.defaultPrice }}
                            </div>
                            <div v-else class="shangpin-price">¥{{ jiage | curreny }}</div>
                            <div class="kucun" v-if="!data1">库存: {{ merchandiseObj.skuInfo?.totalStock }}件</div>
                            <div v-else class="kucun">库存:{{ jianshu }}件</div>
                            <div class="change" v-if="!data1">请选择尺码颜色</div>
                            <div v-else class="change">已选: <span style="color:#ff4466">{{ seletedcolor }}{{ chima
                            }}</span></div>
                        </div>
                    </div>
                    <div class="neirou">
                        <div class="colo">颜色</div>
                        <div class="list-box">
                            <div class="list" v-for="(o, i) in merchandiseObj.skuInfo?.props[0].list" :key="i"
                                @click="showOrhide(o.name, o.name), seleted = !seleted, seletedcolo(o.name), nums(merchandiseObj?.skuInfo.skus[i]?.stock), getPrice(merchandiseObj?.skuInfo.skus[i]?.nowprice)"
                                :class="{ active: data1 == o.name }">{{ o.name
                                }}
                            </div>
                        </div>
                        <div class="chima">尺码</div>
                        <div class="chima-box">
                            <div class="chima-list" v-for="(p, i) in merchandiseObj.skuInfo?.props[1].list" :key="i"
                                @click="sizeChange(p.name, p.index), seleted = !seleted, chimas(p.name), nums(merchandiseObj?.skuInfo.skus[i]?.stock), getPrice(merchandiseObj?.skuInfo.skus[i]?.nowprice)"
                                :class="{ active: data2 == p.index }">{{
                                        p.name
                                }}</div>
                        </div>
                        <div class="shuliang">数量</div>
                        <el-input-number v-model="num" :min="1" :max="Infinity" label="描述文字">
                        </el-input-number>
                        <div class="queren" @click="addShoppingCart({
                            img: tupian,
                            chima: chima,
                            jiage: jiage,
                            title: merchandiseObj.itemInfo?.title,
                            seletedcolor: seletedcolor,
                            shopName: merchandiseObj.shopInfo.name,
                            num: num,
                            finish: finish,
                            itemId: iid,
                        }), goCart()">确认</div>
                    </div>
                </div>
            </el-drawer>
            <div class="goumai" @click="sizeShow3 = true">立即购买</div>
            <el-drawer :visible.sync="sizeShow3" :direction="direction" type="primary" :modal="false" :size="'70%'">
                <div class="shangpin-box">
                    <div class="shangpin-img">
                        <div class="img">
                            <img :src="`${data1 ? tupian : merchandiseObj?.webImOptionInfo?.option?.img}`"
                                style="width: 94px; height: 120px;">
                        </div>
                        <div class="box">
                            <div class="shangpin-price" v-if="!data1">{{ merchandiseObj.skuInfo?.defaultPrice }}
                            </div>
                            <div v-else class="shangpin-price">¥{{ jiage | curreny }}</div>
                            <div class="kucun" v-if="!data1">库存: {{ merchandiseObj.skuInfo?.totalStock }}件</div>
                            <div v-else class="kucun">库存:{{ jianshu }}件</div>
                            <div class="change" v-if="!data1">请选择尺码颜色</div>
                            <div v-else class="change">已选: <span style="color:#ff4466">{{ seletedcolor }}{{ chima
                            }}</span></div>
                        </div>
                    </div>
                    <div class="neirou">
                        <div class="colo">颜色</div>
                        <div class="list-box">
                            <div class="list" v-for="(o, i) in merchandiseObj.skuInfo?.props[0].list" :key="i"
                                @click="showOrhide(o.name, o.name), seleted = !seleted, seletedcolo(o.name), nums(merchandiseObj?.skuInfo.skus[i]?.stock), getPrice(merchandiseObj?.skuInfo.skus[i]?.nowprice)"
                                :class="{ active: data1 == o.name }">{{ o.name
                                }}
                            </div>
                        </div>
                        <div class="chima">尺码</div>
                        <div class="chima-box">
                            <div class="chima-list" v-for="(p, i) in merchandiseObj.skuInfo?.props[1].list" :key="i"
                                @click="sizeChange(p.name, p.index), seleted = !seleted, chimas(p.name), nums(merchandiseObj?.skuInfo.skus[i]?.stock), getPrice(merchandiseObj?.skuInfo.skus[i]?.nowprice)"
                                :class="{ active: data2 == p.index }">{{
                                        p.name
                                }}</div>
                        </div>
                        <div class="shuliang">数量</div>
                        <el-input-number v-model="num" :min="1" :max="Infinity" label="描述文字">
                        </el-input-number>
                        <div class="queren" @click="addOrder({
                            img: tupian,
                            chima: chima,
                            jiage: jiage,
                            title: merchandiseObj.itemInfo?.title,
                            seletedcolor: seletedcolor,
                            shopName: merchandiseObj.shopInfo.name,
                            num: num
                        }), buy()">确认</div>
                    </div>
                </div>
            </el-drawer>
        </div>
        <div class="right">
            <div class="home" @click="$router.push({ path: '/' })">
                <i class="el-icon-house"></i>
            </div>
            <div class="crat" @click="$router.push({ path: '/cart' })">
                <i class="el-icon-shopping-cart-2"></i>
            </div>
        </div>
        <div class="back" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
        </div>
    </div>

</template>

<script>
import { mapMutations } from "vuex"

export default {


    data() {
        return {
            merchandiseObj: {},
            current: 0,
            drawer: false,
            drawer2: false,
            drawer3: false,
            direction: 'btt',
            sizeShow: false,
            sizeShow2: false,
            sizeShow3: false,
            index: '',
            size: null,
            num: 1,
            price: '',
            name: null,
            styleName: null,
            jiage: '',
            jianshu: '',
            seletedcolor: '',
            chima: '',
            seleted: true,
            data1: null,
            data2: null,
            active: "",
            tupian: '',
            finish: false,
            loading: true,
        }
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
    computed: {
        iid() {
            return this.$route.query.itemId
        }
    },
    mounted() {
        this.getMerchandise()
    },
    methods: {
        ...mapMutations(["addOrder", "addShoppingCart"]),
        getMerchandise() {
            this.$axios
                .get(`https://apis.netstart.cn/mogujie/goods/detail?itemId=${this.iid}`)
                .then(({ data }) => {
                    this.merchandiseObj = data.result
                    this.loading = false
                    // console.log(this.merchandiseObj);
                })
        },
        onChange(index) {
            this.current = index;
        },
        showOrhide(name, n) {
            // this.index = i
            if (this.data1 == n) {
                this.data1 = null;
            } else {
                this.data1 = n;
                this.active = name;
            }
        },
        seletedcolo(name) {
            this.seletedcolor = name;
            // console.log(this.seletedcolor, this.num);
        },
        chimas(name) {
            this.chima = name;
            // console.log(this.chima);
        },
        sizeChange(name, n) {
            if (this.data2 == n) {
                this.data2 = null;
            } else {
                this.data2 = n;
                this.active = name;
            }
        },
        getPrice(q) {
            this.jiage = q;

        },
        nums(s) {
            this.jianshu = s;
        },
        open2() {
            if (this.chima && this.seletedcolor) {
                // this.$router.push({ path: "/cart" })
                this.$message({
                    message: '添加购物车成功',
                    type: 'success'
                });
                this.sizeShow = false
            } else {
                this.$message.error('请选择商品规格');
            }
        },
        buy() {
            if (this.chima && this.seletedcolor) {
                this.$router.push({ path: '/payment' })
            } else {
                this.$message.error('请选择商品规格');
            }
        },
        goCart() {
            if (this.chima && this.seletedcolor) {
                // this.$router.push({ path: "/cart" })
                this.$message({
                    message: '添加购物车成功',
                    type: 'success'
                });
                this.sizeShow2 = false
            } else {
                this.$message.error('请选择商品规格');
            }
        }
    },
    watch: {
        data1: function (newcolor) {
            if (this.merchandiseObj?.skuBarInfo?.list) {
                this.tupian = this.merchandiseObj?.skuBarInfo?.list.filter(o => {
                    return o.label === newcolor;
                })[0]?.image;
                //console.log(this.tupian);
            } else {
                this.tupian = this.merchandiseObj?.webImOptionInfo?.option?.img;
                // console.log(this.tupian);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
:deep(.van-swipe-item) {
    width: 100vw;

    img {
        width: 100%;
        height: 100%;
    }
}

.v-modal {
    position: relative;
}

.right {
    position: fixed;
    top: 90px;
    right: 10px;

    .home,
    .crat {
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 999px;
        text-align: center;
        margin-bottom: 10px;
        background-color: #cccccc8c;
    }
}

.back {
    position: absolute;
    top: 14px;
    left: 24px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 999px;
    text-align: center;
    margin-bottom: 10px;
    background-color: rgba(204, 204, 204, 0.5490196078);
}

.queren {
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    line-height: 50px;
    background-color: #ff4466;
    color: #fff;
    font-size: 28px;
    text-align: center;
}

.component-detail {
    display: flex;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
        /* Chrome Safari */
    }

    .component-swiper-image {
        width: 300px;
        height: 450px;
        flex-shrink: 0;
        margin: 10px;



        img {
            display: block;
            width: 100%;
            // height: 100%;
        }
    }
}

.foot-bar {
    display: flex;
    position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;

    .dianpu,
    .kefu,
    .shoucang {
        width: 15vw;
        height: 55px;
        line-height: 55px;
        text-align: center;
        border: 1px solid #ccc;
    }

    .add-gouwuche,
    .goumai {
        width: 27.5vw;
        height: 55px;
        line-height: 55px;
        text-align: center;
        border: 1px solid #ccc;
    }

    .add-gouwuche {
        background-color: rgb(255, 236, 239);
        color: #ff4466;
    }

    .goumai {
        background-color: #ff4466;
        color: #fff;
    }

}


:deep(.el-drawer__header) {
    margin-bottom: 0;
    padding: 0;
}

:deep(.van-swipe) {
    position: relative;

    .custom-indicator {
        position: absolute;
        bottom: 5px;
        right: 8px;
        background: #fffaf059;
        padding: 3px 5px;
        border-radius: 5px;
    }
}

:deep(.van-swipe__track) {
    position: relative;
    display: flex;

}

:deep(.el-input-number) {
    padding-bottom: 60px;
}

.colo,
.chima,
.shuliang {
    margin: 10px 0 10px 5px;
    color: #777;
    font-size: 12px;
}

.buy-box {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    z-index: 1;

    .add-gouwuche,
    .goumai {
        flex: 0 0 50%;
        width: 27.5vw;
        height: 55px;
        line-height: 55px;
        text-align: center;
        border: 1px solid #ccc;
    }

    .add-gouwuche {
        background-color: rgb(255, 236, 239);
        color: #ff4466;
    }

    .goumai {
        background-color: #ff4466;
        color: #fff;
    }
}

.chima-box {
    display: flex;
    flex-wrap: wrap;

    .chima-list {
        flex: 0 0 20%;
        margin-left: 5px;
        margin-top: 5px;
        padding: 5px;
        border: 1px solid #000;
        white-space: nowrap;
        text-align: center;
    }

    .active {
        color: #ff4466;
        border: 1px solid #ff4466;
    }
}

.list-box {
    display: flex;
    flex-wrap: wrap;

    .list {
        flex: 0 0 50%;
        padding: 7px;
        border: 1px solid #000;
        white-space: nowrap;
        margin-bottom: 10px;
        margin-left: 5px;
        text-align: center;
    }

    .active {
        color: #ff4466;
        border: 1px solid #ff4466;
    }
}

.shangpin-img {
    display: flex;
    position: fixed;
    width: 100vw;
    background-color: #fff;

    .box {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 8px;
    }


    .img {

        img {
            width: 120px;
        }
    }
}

.neirou {
    padding-top: 125px;
}


.size-box {
    display: flex;
    height: 90px;
    flex-direction: column;
    justify-content: space-between;

    .fuwu {
        margin-bottom: 15px;
    }
}

.itemInfo {
    background-color: #fff;
    margin-bottom: 20px;

    .price-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 15px;
        margin-bottom: 15px;

        .price {
            margin-left: 5px;
            font-size: 18px;
            font-weight: bold;
        }

        .sales {
            margin-right: 5px;
            font-size: 12px;
            color: #777;
        }
    }

    .title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
}

.evaluate-box {
    margin-bottom: 15px;

    .evaluate-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 15px;
    }

    .evaluate-title {
        display: flex;
        width: 100vw;
        overflow-x: auto;

        &::-webkit-scrollbar {
            display: none
        }

        .evaluate-list {
            padding: 3px 5px;
            margin-left: 3px;
            margin-top: 5px;
            margin-bottom: 7px;
            background-color: #fff6f6;
            border-radius: 4px;
            white-space: nowrap;
        }
    }

    .user-box {
        display: flex;
        overflow-x: auto;

        &::-webkit-scrollbar {
            display: none
        }

        .user {
            width: 300px;
            height: 108px;
            flex: 0 0 300px;
            margin-left: 10px;
            background: #FAFAFAFA;
        }

        .box {
            display: flex;
            align-items: center;

            .user-name {
                margin-left: 5px;
            }

            .user-img {
                width: 45px;
                height: 45px;
                overflow: hidden;
                border-radius: 999px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

        }

        .user-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

    }

}

.shop-box {
    display: flex;
    margin-top: 10px;
    margin-bottom: 15px;

    .shop-img {
        width: 60px;
        height: 60px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .shop-news {
        flex: 0 0 268px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 8px;
        height: 60px;

        .name-box {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .goods {
            color: #777;
            font-size: 12px;
        }

        .foot {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .foot-text {
                border: 1px solid #ccc;
                padding: 3px 5px;
                color: #ff4466;
                font-size: 12px;
                border-radius: 999px;
            }
        }
    }
}

.img-box {
    margin-bottom: 15px;

    .img-list {
        width: 100vw;

        img {
            width: 100%;
        }
    }
}

.bottom {
    padding-bottom: 55px;

    .shangpin {
        margin-bottom: 15px;
        margin-left: 8px;


    }

    .chanshu {
        width: 94vw;
        background: #f6f6f6;
        margin: 0 auto;
        padding: 10px;
        line-height: 22px;

        div {

            span {
                margin-right: 7px;
                color: #777;

            }

            font-size: 12px;
        }
    }
}

:deep(.el-drawer.btt) {
    width: 100vw;
}

:deep(.el-drawer__header) {
    text-align: center;
}

.bottom-size {
    display: flex;
    justify-content: space-around;
    margin-top: 12px;
    border-bottom: 1px solid #777;
}

.shiji {
    margin: 15px 0;
    text-align: center;
    color: #777;
    font-size: 12px;
}

.color {
    margin-bottom: 15px;
    width: 100vw;
    height: 8px;
    background-color: #f9f9f9;
}
</style>
