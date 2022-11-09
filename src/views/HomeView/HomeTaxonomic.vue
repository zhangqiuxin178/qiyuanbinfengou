<template>
    <div class="taxonomic-box">
        <div class="top-bar">
            <div class="top-left">
                <i class="el-icon-arrow-left" @click="$router.go(-1)"></i>
            </div>
            <div class="input-bar">
                <span class="search">
                    <img src="@/assets/img/search.png">
                </span>
                <input type="search" placeholder="ins超火短t" @click="$router.push({ path: '/search' })">
            </div>
            <div class="top-right"></div>
        </div>
        <div class="left-box">
            <div class="left" v-for="(l, i) in letfList" :key="i" :class="{ active: pid == l.maitKey }"
                @click="highlight(l.maitKey), getRightGoodsList(l.maitKey), categoriesList(fcid, sort)">
                {{ l.title }}</div>
        </div>

        <div class="right-bar">
            <div class="right-top-box">
                <div class="right-top" v-for="(t, i) in rightTopList" :key="i">
                    <div class="top-img">
                        <img :src="t.image">
                    </div>
                    <div class="top-title">{{ t.title }}</div>
                </div>
            </div>
            <div class="right-box">
                <div class="right-bar" v-for="(b, i) in sortFilterList" :key="i">
                    <div class="bar" :class="{ active: sort == b.sortKey }" @click="categoriesList(fcid, b.sortKey)">{{
                            b.title
                    }}</div>
                </div>
            </div>
            <div class="list-box">
                <div class="goods-list">
                    <div class="goods" v-for="(r, i) in rightGoods.wall?.docs" :key="i">
                        <div class="goods-img">
                            <img :src="r.img">
                            <span class="sale">已售{{ r.sale }}件</span>
                        </div>
                        <div class="goods-title">{{ r.title }}</div>
                        <div class="goods-price">
                            <div class="prices">
                                ¥{{ r.price }}
                            </div>
                            <div class="shouc">
                                <span>{{ r.cfav }}</span><img src="@/assets/img/xingxing2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            letfList: [],
            rightTopList: [],
            sortFilterList: [],
            pid: 3627,
            fcid: 3627,
            rightGoods: {},
            sort: 'pop',
        }
    },
    methods: {
        getLeftList() {
            this.$axios
                .get('category.json')
                .then(({ data }) => {
                    this.letfList = data[117330].list
                    // console.log(data);
                })
        },
        highlight(pid) {
            this.pid = pid
            this.$axios
                .get(`category/getSub?pid=${this.pid}`)
                .then(({ data }) => {
                    this.rightTopList = data?.list
                    // console.log(data);
                })
        },
        getRightGoodsList(fcid) {
            this.fcid = fcid
            this.$axios
                .get(`https://apis.netstart.cn/mogujie/category/miniWall?fcid=${this.fcid}`)
                .then(data => {
                    this.rightGoods = data.result
                    this.sortFilterList = this.rightGoods.sortFilter
                    // console.log(data);

                })
        },
        categoriesList(fcid, sort) {
            this.sort = sort
            this.$axios
                .get(`category/miniWall?fcid=${this.fcid}&page=2&sort=${this.sort}`)
                .then(data => {
                    this.rightGoods = data.result
                    console.log(data);
                    // console.log(this.sort, this.fcid);
                })
        }
    },
    mounted() {
        this.getLeftList()
        this.highlight(this.pid)
        this.getRightGoodsList(this.fcid)
    }
}
</script>

<style lang="scss" scoped>
.top-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 45px;
    background-color: #fff;

    .input-bar {
        position: relative;
        display: flex;

        .search {
            display: block;
            position: absolute;
            width: 15px;
            height: 15px;
            top: 7px;
            left: 9px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        input {
            width: 256px;
            height: 30px;
            padding-left: 30px;
            border-radius: 5px;
        }


    }

    .top-right {
        width: 50px;
        height: 30px;
        background: url(@/assets/img/gouwuche2.png) no-repeat center;
        background-size: 25px 20px;
    }
}

.left-box {
    z-index: 1;
    position: fixed;
    top: 45px;
    left: 0;
    height: 100vh;
    overflow-y: auto;

    .left {
        width: 85px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        color: #666666;
        background-color: #f6f6f6;
    }

    .active {
        color: #f46;
        background-color: #fff;
    }

    &::-webkit-scrollbar {
        display: none;
        /* Chrome Safari */
    }
}

.right-bar {

    .right-top-box {
        display: flex;
        flex-wrap: wrap;
        padding-top: 55px;
        padding-left: 85px;
        background: white;
        margin-bottom: 10px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;

        .right-top {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            flex: 0 0 33%;
            width: 75px;
            height: 71px;
            margin-top: 10px;

            .top-title {
                font-size: 12px;
                color: #666;
            }

            .top-img {
                width: 50px;
                height: 50px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}

.right-box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
    padding-left: 85px;
    background-color: #fff;
    width: 75vw;
    position: sticky;
    top: 45px;
    height: 45px;
    line-height: 45px;

    .active {
        color: #f46;
    }

    .right-bar {
        width: 25vw;
        text-align: center;
        /* border-bottom: 1px solid #ccc; */
        border-top: 1px solid #ccc;
    }
}

.list-box {
    padding-left: 85px;
    margin-top: 20px;

    .goods-list {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;

        .goods {
            flex: 0 0 45%;

            .goods-img {
                z-index: -1;
                position: relative;
                width: auto;
                height: 179px;

                img {
                    width: 100%;
                    height: 100%;
                }

                .sale {
                    position: absolute;
                    bottom: 5px;
                    left: 3px;
                    min-width: 40%;
                    max-width: 70%;
                    padding: 4px 6px;
                    background-image: url(@/assets/img/img_bg.png);
                    background-size: 100%;
                    color: #fff;
                    font-size: 12px;
                    text-align: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }

        .goods-title {
            width: 130px;
            height: 17px;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 12px;
            white-space: nowrap;
            margin: 5px 0;
        }

        .goods-price {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;

            .prices {
                color: #FF5577;
                font-weight: bold;
            }

            .shouc {
                display: flex;
                align-items: center;
                font-size: 12px;
                color: #666;

                span {
                    margin-right: 3px;
                }

                img {
                    width: 12px;
                    height: 12px;
                }
            }
        }
    }


}
</style>