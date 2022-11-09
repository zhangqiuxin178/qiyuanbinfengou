<template>
    <div class="goods-box" v-loading="loading">
        <div class="goods">
            <div class="goods-bar">
                <div class="search-back" @click="$router.push({ path: '/home' })"></div>
                <input type="text" :value="frontword" @click="$router.push({ path: '/search' })">
                <div class="gouwuche"></div>
            </div>
            <div class="classify">
                <div class="classify-list" v-for="(c, i) in classifyObj.sortFilter"
                    @click="goodsClassify(i), (sort = c.sortKey)" :key="i">
                    <div class="list" :class="{ active: sort == c.sortKey }">{{ c.title }}</div>



                </div>
                <div class="classify-price" :class="{ active: showOrhide == true }" @click="showOrhide = !showOrhide">价格
                </div>
            </div>
            <transition name="demo">
                <div class="price-pick" v-show="showOrhide" :class="{ animation: showOrhide == true }">
                    <div class="price-box">
                        <div class="price-top" v-for="(p, i) in classifyObj.priceList" :key="i"
                            @click="priceClassify(sort, p.minPrice, p.maxPrice)">
                            {{ p.minPrice }} -
                            {{ p.maxPrice }}</div>
                    </div>
                    <div class="price-search">
                        <div class="qujian">区间(元)</div>
                        <div class="input-box">
                            <div class="ipt"><input type="text" v-model.trim="minPrice"></div>
                            <div>---</div>
                            <div class="ipt"><input type="text" v-model.trim="maxPrice"></div>
                        </div>
                        <div class="Confirm" @click="priceClassify(sort, minPrice, maxPrice)">确认</div>
                    </div>
                </div>
            </transition>
        </div>
        <div class="goods-content">
            <div class="goods-list" v-for="(g, i) in classifyObj.wall?.docs" :key="i"
                @click="$router.push({ path: '/merchandise', query: { itemId: g.iid } })">
                <div class="list-img">
                    <img :src="g.img">
                </div>
                <div class="list-title"><span class="guanggao"
                        :style="{ color: g.leftbottom_taglist[0]?.color, background: g.leftbottom_taglist[0]?.bgColor }">{{
                                g.leftbottom_taglist[0]?.content
                        }}</span>{{ g.title }}
                </div>
                <div class="list-price">
                    <div class="price">¥{{ g.price }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            classifyObj: {},
            index: 0,
            title: '综合',
            loading: true,
            sort: 'pop',
            showOrhide: false,
            minPrice: '',
            maxPrice: '',
            sorts: 'pop',
        }
    },
    computed: {
        frontword() {
            return this.$route.query.frontword
        }
    },
    methods: {
        goodsClassify(i) {
            this.index = i
            this.$axios
                .get(`https://apis.netstart.cn/mogujie/search/searchByKeyword?q=${this.frontword}&page&sort=${this.sort}`)
                .then(data => {
                    this.classifyObj = data.result
                    this.loading = false
                    console.log(data);
                })
        },
        priceClassify(sort, minPrice, maxPrice) {
            this.showOrhide = false,
            this.minPrice = minPrice
            this.maxPrice = maxPrice
            console.log(this.sort, this.minPrice, this.maxPrice);
            this.$axios
                .get(`https://apis.netstart.cn/mogujie/search/searchByKeyword?fcid=20005531&page&sort=${this.sort}&minPrice=${this.minPrice}&maxPrice=${this.maxPrice}&offset=30`)
                .then(data => {
                    this.classifyObj = data.result
                    console.log(data);
                })
        },
        
    },
    mounted() {
        // this.getGoods()
        this.goodsClassify()
    }
}
</script>

<style lang="scss" scoped>
.goods {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    margin-bottom: 15px;

    .goods-bar {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid #666;
        width: 100vw;
        height: 45px;
        background-color: #fff;


        input {
            width: 220px;
            height: 25px;
        }

        .search-back {
            width: 25px;
            height: 20px;
            background-image: url(@/assets/img/return.png);
            background-size: 25px 20px;
            background-position: center center;
            background-repeat: no-repeat;
        }

        .gouwuche {
            width: 25px;
            height: 20px;
            background-image: url(@/assets/img/gouwuche2.png);
            background-size: 25px 20px;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }

    .classify {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        height: 37px;
        background-color: #fff;


        .active {
            color: #FF4466;
        }
    }

    .price-pick {
        position: absolute;
        top: -24px;
        left: 0;
        width: 100vw;
        background-color: #fff;
        border-top: 1px solid #ccc;



        @keyframes move1 {
            from {
                transform: translate(0, 0);
                opacity: 0;
            }

            // 50% {
            //     transform: rotateX(90deg);
            // }

            to {
                transform: translate(0, 107px);
                opacity: 1;
            }
        }


        .price-box {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: 10px 0;

            .price-top {
                width: 30vw;
                height: 30px;
                line-height: 30px;
                background-color: #f3f3f3;
                text-align: center;
            }
        }

        .price-search {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 10px 0;

            .input-box {
                display: flex;
                align-items: center;

                input {
                    width: 85px;
                    height: 30px;
                }
            }

            .Confirm {
                width: 80px;
                height: 35px;
                line-height: 35px;
                text-align: center;
                background-color: #f46;
                color: #fff;
            }


        }
    }

    .animation {
        // color: #f46;
        animation: move1 .5s linear both;
    }
}

// .demo-enter,
// .demo-leave-to {
//     transform: translate(0, 107px, 0);
// }

// .demo-enter-active,
// .demo-leave-active {
//     transition: all .5s linear;
// }

// .demo-enter-to,
// .demo-leave {
//     transform: translate(0, 107px, 0);
// }

.goods-content {
    padding-top: 90px;
    column-count: 2;
    column-gap: 0;
    background-color: #6666662b;

    .goods-list {
        width: 176px;
        height: 310px;
        background-color: #fff;
        margin-bottom: 8px;
        margin-left: 6px;
        border-radius: 4px;
        overflow: hidden;

        .list-img {
            width: 176px;
            height: 235px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .list-title {
            margin: 10px 3px;
            line-height: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 12px;

            .guanggao {
                margin-right: 3px;
                margin-left: 3px;
                font-size: 12px;
            }
        }

        .list-price {
            display: flex;

            .price {
                margin-left: 5px;
                color: #333333;
                font-weight: bold;
            }
        }
    }
}
</style>