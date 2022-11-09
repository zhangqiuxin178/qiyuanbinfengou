<template>
    <div class="home" v-loading="loading">
        <div class="home-bar">
            <div class="bar-img" @click="$router.push({ path: '/taxonomic' })">
            </div>
            <div class="input-bar">
                <span class="search">
                    <img src="@/assets/img/search.png">
                </span>
                <input type="search" placeholder="ins超火短t" @click="$router.push({ path: '/search' })">
            </div>
            <div class="message">
            </div>
        </div>

        <div class="home-nav">
            <div class="nav-list" v-for="(h, i) in homeNavArr" :key="i" @click="homeNavGo(h.title)">
                <div class="nav-img">
                    <img :src="h.image">
                </div>
                <div class="item">{{ h.title }}</div>
            </div>
        </div>

        <div class="content">
            <div class="content-box" v-for="(g, i) in goodsListArr" :key="i"
                @click="$router.push({ path: '/detail', query: { itemIdUrl: g.itemIdUrl, actorIdUrl: g.actorIdUrl } })">
                <div class="content-list">
                    <div class="content-img">
                        <img :src="g.itemImage">
                        <div class="actor">
                            <div class="actor-img">
                                <img :src="g.actorAvatar">
                            </div>
                            <span class="actor-name">{{ g.actorName }}</span>
                            <span class="actor-tag">{{ g.actorTag }}</span>
                        </div>
                    </div>
                    <!-- {{ getDetails(g.itemIdUrl, g.actorIdUrl) }} -->
                    <div class="title">{{ g.title }}</div>
                    <div class="content-bottom">
                        <div class="price">{{ g.discountPrice }}</div>
                        <div class="bottom-icon">
                            <img :src="g.bottomIcon">
                        </div>
                        <div class="sale">{{ g.sale }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getHomeNavData, getgoodsList } from '@/apis/getHomeNav'

export default {
    data() {
        return {
            homeNavArr: [],
            goodsListArr: [],
            detailObj: {},
            loading: true,
            navGo: ''
        }
    },

    mounted() {
        this.getHomeNav()
        this.getGoods()

    },
    methods: {
        async getHomeNav() {
            let data = await this.$axios.get(getHomeNavData)

            this.homeNavArr = data
            this.loading = false
            console.log(this.homeNavArr);
        },
        async getGoods() {
            let { data } = await this.$axios.get(getgoodsList)

            this.goodsListArr = data.list
            this.loading = false
            console.log(data.list);
        },
        homeNavGo(item) {
            this.navGo = item
            this.$router.push({ path: '/goods', query: { frontword: this.navGo } })
        }
    }

}
</script>

<style lang="scss" scoped>
.home {
    background-color: #f6f6f6;
}

.home-bar {
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    background: white;
    justify-content: space-around;
    border-bottom: 1px solid #777;

    .bar-img {
        width: 50px;
        height: 30px;
        background: url(@/assets/img/top-bar.png) no-repeat center;
        background-size: 25px 20px;

    }

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

    .message {
        width: 50px;
        height: 30px;
        background: url(@/assets/img/xiaoxi.png) no-repeat center;
        background-size: 25px 20px;

    }
}

.home-nav {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 220px;
    padding-top: 55px;
    background: white;
    margin-bottom: 10px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;

    .nav-list {
        display: flex;
        flex: 0 0 20%;
        width: 75px;
        height: 71px;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .nav-img {
            width: 50px;
            height: 50px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .item {
            font-size: 13px;
            color: #777;
        }
    }
}

.content {
    width: 100vw;
    margin: 10px auto;
    column-count: 2;
    column-gap: 0;
    margin-bottom: 10px;
    vertical-align: top;


    .content-box {
        // display: flex;
        width: 100%;
        display: inline-block;



        .price {
            color: #FF4466;
        }

        .sale {
            padding: 3px 7px;
            background-color: #ffecef;
            color: #FF4466;
            font-size: 12px;
            border-radius: 6px;
        }

        .content-list {
            margin: 5px;
            background-color: #fff;



            .content-img {
                position: relative;
                margin-bottom: 10px;
                border-radius: 5px;
                overflow: hidden;
                width: 100%;
                break-inside: avoid;

                img {
                    width: 100%;
                    object-fit: contain;
                }

                .actor {
                    position: absolute;
                    display: flex;
                    align-items: center;
                    bottom: 8px;
                    left: 2px;
                    color: #fff;
                    font-size: 12px;
                    white-space: nowrap;

                    .actor-img {
                        width: 25px;
                        height: 25px;
                        border-radius: 999px;
                        overflow: hidden;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .actor-name {
                        margin: 0 5px;
                    }

                    .actor-tag {
                        border-radius: 3px;
                        background-color: rgba(0, 0, 0, 0.4);
                        padding: 2px 5px;
                    }
                }
            }

            .title {
                font-size: 12px;
                margin-bottom: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

            .content-bottom {
                display: flex;
                justify-content: space-around;
                margin-bottom: 10px;
                padding-bottom: 10px;


                .bottom-icon {
                    width: 22px;
                    height: 12px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>