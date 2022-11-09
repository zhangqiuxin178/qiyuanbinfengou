<template>
    <div class="search-box" v-loading="loading">
        <div class="search-bar">
            <div class="search-back" @click="$router.push({ path: '/home' })"></div>
            <div class="input">
                <input type="search" ref="value" placeholder="ins超火短t" v-model.trim="frontwordSty">
            </div>
            <div class="search" @click="getList">搜索</div>
        </div>
        <div class="history-box">
            <div class="history">
                <div class="history-search-box">
                    <i></i>
                    <div class="history-search">历史搜索</div>
                </div>
                <div class="remove-history" @click="del"></div>
            </div>

            <div class="list">
                <div class="history-list" v-for="(a, i) in historyList" :key="i" @click="hotList(a)">{{ a }}</div>
            </div>
        </div>

        <div class="hot">
            <div class="hot-img">
                <i></i>
                <div class="hot-search">热门搜索</div>
            </div>
            <div class="hot-list">
                <div class="hot-item" v-for="(h, i) in hotArr" :key="i" :style="{ color: h.color ? h.color : '' }"
                    @click="hotList(h.frontword)">{{
        h.frontword
                    }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            historyList: [],
            hotArr: [],
            frontword: '',
            frontwordSty: '',
            querys: '',
            loading: true,
        }
    },
    created() {
        // 定义数组接收本地存储的历史记录
        let history = localStorage.historyList;
        if (history) {
            // 将数组转字符串
            this.historyList = JSON.parse(history);
        }
    },
    mounted() {
        this.getHotList()
    },
    methods: {
        getHotList() {
            this.$axios
                .get('hotSearch.json')
                .then(({ data }) => {
                    this.hotArr = data.hotWord.data
                    this.loading = false
                    // console.log(data.hotWord.data);
                })
        },
        getList() {
            if (this.frontwordSty) {
                this.frontwordSty = this.$refs.value.value

                let index = this.historyList.findIndex(ele => {
                    return ele == this.frontwordSty;
                });
                //如果有的话就删除重复
                if (index != -1) {
                    this.historyList.splice(index, 1);
                }
                //向数组第一位添加
                this.historyList.unshift(this.frontwordSty);
                // 本地存储历史记录数组
                localStorage.historyList = JSON.stringify(this.historyList);
                this.$router.push({ path: '/goods', query: { frontword: this.frontwordSty } })
            }
        },
        hotList(item) {
            let index = this.historyList.findIndex(ele => {
                return ele == this.frontwordSty;
            });
            //如果有的话就删除重复
            if (index != -1) {
                this.historyList.splice(index, 1);
            }
            this.querys = item
            this.historyList.unshift(this.querys);
            localStorage.historyList = JSON.stringify(this.historyList);

            this.$router.push({ path: '/goods', query: { frontword: this.querys } })
        },

        // 删除本地
        del() {
            this.$nextTick(() => {
                localStorage.clear();
                this.historyList = [];
            })

        },
    }
}
</script>


<style lang="scss" scoped>
.search-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5px;
    background: #fff;

    .search-back {
        width: 25px;
        height: 20px;
        background-image: url(@/assets/img/return.png);
        background-size: 25px 20px;
        background-position: center center;
        background-repeat: no-repeat;
    }

    input {
        width: 295px;
        height: 30px;
        padding-left: 5px;
        border-radius: 6px;
    }

    input:focus {
        border-style: solid;
        border-color: #FF4466;
        box-shadow: 0 0 15px #FF4466;
    }
}

.history-box {
    // display: flex;
    // justify-content: space-between;
    width: 100vw;
    height: 130px;
    margin-top: 10px;
    border-top: 1px solid #555;
    border-bottom: 1px solid #555;

    .history {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0 0 5px;


        .history-search-box {
            display: flex;

            i {
                display: block;
                width: 20px;
                height: 20px;
                background-image: url(@/assets/img/search.png);
                background-size: 20px 20px;
                background-position: center center;
            }
        }
    }

    .list {
        display: flex;
        flex-wrap: wrap;

        .history-list {
            flex: 0 0 15%;
            width: 50px;
            height: 25px;
            line-height: 25px;
            padding: 3px 5px;
            margin-left: 22px;
            text-align: center;
            background-color: #eee;
            border-radius: 6px;
            margin-top: 6px;
        }
    }



    .remove-history {
        display: block;
        width: 20px;
        height: 20px;
        margin: 5px 5px 0 0;
        background-image: url(@/assets/img/shanchu.png);
        background-size: 20px 20px;
        background-position: center center;
    }
}

.hot {
    margin-top: 15px;

    .hot-img {
        display: flex;
        align-items: flex-end;
        margin-left: 5px;

        i {
            display: block;
            width: 20px;
            height: 20px;
            margin: 5px 5px 0 0;
            background-image: url(@/assets/img/xingxing.png);
            background-size: 20px 20px;
            background-position: center center;
        }
    }

    .hot-list {
        display: flex;
        flex-wrap: wrap;

        .hot-item {
            flex: 0 0 20%;
            text-align: center;
            margin-top: 10px;
            padding: 8px 10px;
            border-radius: 6px;
            margin-left: 22px;
            background-color: #eee;

        }
    }
}
</style>