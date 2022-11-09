<template>
    <div class="video-box">
        <!-- {{ item }}//{{ actor }} -->
        <div class="playback">
            <video :src="detail.itemExplainList[0].videoInfo.url" width="100%" height="100%" controls></video>
            <div class="hot">
                <div class="hot-img" v-for="(h, i) in detail.hotLink.avatars" :key="i">
                    <img :src="h">
                </div>
                <div class="hot-item">热门直播 ></div>
            </div>
            <div class="right-bar">
                <div class="bar-img">
                    <img :src="detail.itemExplainList[0].actorInfo.avatar">
                </div>
                <div class="shoucang">
                    <img src="@/assets/img/shoucang.png">
                    <div class="r-it">收藏</div>
                </div>
                <div class="pinlun" @click="drawer = true" type="primary">
                    <img src="@/assets/img/pinlun.png">
                    <div class="r-it">{{ detail?.itemExplainList[0].comments?.length > 0 ?
                            detail.itemExplainList[0].comments?.length : '评价'
                    }}</div>
                </div>

                <div class="gouwuche">
                    <img src="@/assets/img/gouwuche.png">
                    <div class="r-it">购物车</div>
                </div>
            </div>
            <div class="avatar">
                <div class="avatar-name">{{ detail.itemExplainList[0].actorInfo.name }}</div>
                <div class="avatar-num">
                    {{ detail.itemExplainList[0].actorInfo.height }}cm {{ detail.itemExplainList[0].actorInfo.weight
                    }}kg ||
                    {{ detail.itemExplainList[0].actorInfo.fansCount }}
                </div>
            </div>
            <div class="goods">
                <div class="goode-img">
                    <img :src="detail.itemExplainList[0].itemInfo.cover">
                </div>
                <div class="goods-item">
                    <div class="item">{{ detail.itemExplainList[0].itemInfo.title }}</div>
                    <div class="price"><span class="one">待秒杀</span> <span class="two">¥{{
                            detail.itemExplainList[0].itemInfo.discountPrice
                    }}</span>¥</div>
                </div>
                <div class="btn-r">立即购买</div>
            </div>
            <el-drawer title="购买评价" :visible.sync="drawer" :direction="direction" :size="'50%'">
                <div class="appraise" v-for="(c, i) in detail.itemExplainList[0].comments" :key="i">
                    <div class="appraise-top">
                        <div class="user-img">
                            <img :src="c.avatar">
                        </div>
                        <div class="user">
                            <div class="user-name">{{ c.userName }}</div>
                            <div class="time">{{ c.time }}</div>
                        </div>
                    </div>
                    <div class="appraise-title">{{ c.content }}</div>
                    <div class="bor-bottom"></div>
                </div>
            </el-drawer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            direction: 'btt',
            detail: {}
        };
    },

    mounted() {
        this.getDetail()
    },
    computed: {
        item() {
            return this.$route.query.itemIdUrl
        },
        actor() {
            return this.$route.query.actorIdUrl
        },

    },
    methods: {
        getDetail() {
            this.$axios
                .get(`video/detail?itemId=${this.item}&actorId=${this.actor}`)
                .then(({ data }) => {
                    this.detail = data
                    console.log(data);
                })

        }
    }

}
</script>

<style lang="scss" scoped>
.playback {
    position: relative;
    width: 100vw;
    height: 100%;



    .hot {
        display: flex;
        width: 130px;
        align-items: center;
        position: absolute;
        top: 5px;
        left: 5px;
        padding: 3px 6px;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: space-between;

        .hot-img {
            width: 30px;
            height: 30px;
            border-radius: 999px;
            overflow: hidden;
            border: 1px solid #fff;

            img {
                width: 100%;
                height: 100%;
            }

            &:nth-child(2) {
                position: absolute;
                left: 22px;
                border: 1px solid #fff;
            }

            &:nth-child(3) {
                position: absolute;
                left: 40px;
                border: 1px solid #fff;
            }
        }

        .hot-item {
            margin-left: 3px;
            color: #fff;
            font-size: 12px;
        }
    }

    .right-bar {
        position: absolute;
        display: flex;
        right: 5px;
        top: 27%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 220px;

        .bar-img {
            width: 35px;
            height: 35px;
            border-radius: 999px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .shoucang,
        .pinlun,
        .gouwuche {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 35px;
            height: 35px;

            img {
                width: 100%;
                height: 100%;
            }

            .r-it {
                color: #fff;
                font-size: 12px;

                &:last-child {
                    white-space: nowrap;
                }
            }
        }
    }

    .avatar {
        position: absolute;
        bottom: 148px;
        left: 6px;

        .avatar-name {
            color: #fff;
        }

        .avatar-num {
            font-size: 12px;
            color: hsla(0, 0%, 100%, .6);
        }

    }

    .goods {
        position: absolute;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 94vw;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        margin-left: 7px;
        bottom: 80px;

        .goode-img {
            width: 50px;
            height: 50px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .goods-item {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            width: 200px;

            .item {
                margin-bottom: 5px;
                overflow: hidden;
                color: #fff;
                font-size: 12px;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .price {
            font-size: 12px;

            .one {
                background: linear-gradient(150deg, #fb872c, #fc4441);
                color: #fff;
                font-size: 12px;
            }

            .two {
                margin-right: 3px;
                font-size: 14px;
                font-weight: 600;
                color: #fa4e82;
            }
        }

        .btn-r {
            width: 70px;
            height: 25px;
            line-height: 25px;
            color: #fff;
            font-size: 12px;
            text-align: center;
            border-radius: 999px;
            background-color: #f46;
        }
    }


}

:deep(.el-drawer) {
    height: 50%;
}

:deep(.el-drawer.btt) {
    width: 100%;

    background-image: url(@/assets/img/pinlun-bg.png);
}

:deep(.el-drawer__header) {
    align-items: center;
    color: #72767b;
    display: flex;
    margin-bottom: 32px;
    padding: 5px 0 0 5px;
}

.appraise {
    color: #fff;

    .appraise-top {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 15px;

        .user-img {
            width: 30px;
            height: 30px;
            margin-left: 7px;
            border-radius: 999px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .user {
            margin-left: 7px;

            .user-name {
                color: #999;
                font-size: 12px;
            }

            .time {
                margin-top: 3px;
                color: #999;
                font-size: 12px;
            }


        }
    }

    .appraise-title {
        margin: 5px 45px 25px;
        font-size: 13px;
    }

    .bor-bottom {
        margin-left: 45px;
        height: 1px;
        background-color: #72767b;
    }
}
</style>