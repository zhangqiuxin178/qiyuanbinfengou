<template>
    <div class="box">
        <div class="top">
            <div class="fanhui" @click="$router.go(-1)">&lt;</div>
            <div class="queren">确认订单</div>
            <div class="gouwuche"></div>
        </div>
        <div class="address-box">
            <div class="address" @click="drawer = true" type="primary">
                <i class="el-icon-location-outline"></i>
                <div class="xuanze">请填写收货地址</div>
                <i class="el-icon-arrow-right"></i>
            </div>
            <el-drawer :visible.sync="drawer" :direction="direction" :size="'70%'">

            </el-drawer>
        </div>
        <div class="color"></div>

        <div class="detail-box">
            <div class="shop">
                <i class="el-icon-takeaway-box"></i>
                <div class="shop-name">{{ obj.shopName }}</div>
            </div>
            <div class="shangpin-detail">
                <div class="detail-img">
                    <img :src="obj.img">
                </div>
                <div class="detail-list">
                    <div class="title">{{ obj.title }}</div>
                    <div class="style">颜色: <span>{{ obj.seletedcolor }}</span> 尺码: <span>{{ obj.chima }}</span></div>
                </div>
                <div class="price-num">
                    <div class="price">¥{{ parseFloat(obj.jiage / 100).toFixed(2) }}</div>
                    <div class="num">X {{ obj.num }}</div>
                </div>
            </div>
        </div>
        <div class="bor"></div>

        <div class="foot">
            <div class="freight-box" style="margin-bottom: 25px;">
                <div class="freight">快递运费 <span style="font-size: 12px; color: #666;">默认快递</span></div>
            </div>
            <div class="accident-box" style="margin-bottom: 25px; margin-left: 5px;">
                <div class="accident">意外换新 <span style="font-size: 12px; color: #666;">衣服出现意外破损可换新</span></div>
            </div>
            <div class="accident-box" style="margin-bottom: 25px; margin-left: 5px;">
                <div class="accident">退货补运费 <span
                        style="font-size: 12px; color: #666;margin-left: 160px;">退货预计补贴7.00</span></div>
            </div>
            <div class="accident-box" style="margin-bottom: 25px; margin-left: 5px;">
                <div class="accident">延误必赔 <span style="font-size: 12px; color: #666;margin-left: 177px;">商家赠送</span>
                </div>
            </div>
            <div class="accident-box" style="margin-bottom: 25px; margin-left: 5px;">
                <div class="accident">订单备注 <input type="text" style="width: 275px; height: 30px;"></div>
            </div>
            <div class="total">
                <div class="total-num">共{{ obj.num }}件</div>
                <div class="shop-total">店铺共计: <span class="total-price">¥{{ keepTwoDecimalFull((obj.jiage / 100) *
                        obj.num)
                }}</span></div>
            </div>
        </div>

        <div class="bar">
            <div class="lump-sum">总价: <span class="total-price">¥{{ keepTwoDecimalFull((obj.jiage / 100) * obj.num)
            }}</span></div>
            <div class="sub">
                <span class="lump-num">共{{ obj.num }}件商品</span>
                <div class="submi" @click="open2">立即购买</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    data() {
        return {
            drawer: false,
            direction: 'btt',
            pricrs: '',
        }
    },
    computed: {
        ...mapState(["obj"])
    },
    methods: {
        keepTwoDecimalFull(num) {
            let result = parseFloat(num);
            if (isNaN(result)) {
                return false;

            }
            result = Math.round(num * 100) / 100;
            let s_x = result.toString(); //将数字转换为字符串

            let pos_decimal = s_x.indexOf('.'); //小数点的索引值


            // 当整数时，pos_decimal=-1 自动补0  
            if (pos_decimal < 0) {
                pos_decimal = s_x.length;
                s_x += '.';

            }

            // 当数字的长度< 小数点索引+2时，补0  
            while (s_x.length <= pos_decimal + 2) {
                s_x += '0';

            }
            return s_x;

        },
        open2() {
            this.$message({
                message: '支付成功',
                type: 'success'
            });
            this.$router.go(-1)
        },

    }
}

</script>

<style lang="scss" scoped>
.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #ccc;

    .gouwuche {
        width: 25px;
        height: 20px;
        background-image: url(@/assets/img/gouwuche2.png);
        background-size: 25px 20px;
        background-position: center center;
        background-repeat: no-repeat;
    }
}

.color {
    width: 100vw;
    height: 8px;
    background-color: #ccc;
}

.address-box {
    width: 100vw;
    height: 40px;
    line-height: 27px;
    margin-top: 10px;
    background-color: #fff;

    .address {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .xuanze {
        flex: 1;
    }
}

.detail-box {
    margin-top: 10px;
    margin-left: 5px;

    .shop {
        display: flex;
        align-items: center;

        .shop-name {
            margin-left: 5px;
        }
    }

    .shangpin-detail {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 10px;

        .detail-img {
            flex: 0 0 69px;
            width: 69px;
            height: 92px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .detail-list {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 220px;

            .title {
                margin: 10px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

            .style {
                font-size: 12px;
                color: #666;
            }
        }

        .price-num {

            .price {
                margin: 8px 0;


            }

            .num {
                font-size: 12px;
                color: #666;
            }
        }
    }
}

.bor {
    display: block;
    border-bottom: 1px solid #ccc;
    margin-top: 8px;
    margin-left: 43px;
}

.freight-box {
    margin-top: 10px;
    margin-left: 5px;
}

.accident {

    input {
        height: .6rem;
        padding: .14rem .18rem;
        margin-left: .1rem;
        background: #f7f7f7;
        border: none;
        border-radius: .08rem;
        font-size: .24rem;
    }
}

.total {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .total-num {
        margin-right: 4px;
        color: #666;
        font-size: 12px;
    }

    .total-price {
        margin-right: 5px;
        color: #ff4466;
    }
}

.bar {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 55px;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;

    .sub {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .lump-sum {


        .total-price {
            color: #ff4466;
        }
    }

    .submi {
        height: 50px;
        line-height: 50px;
        background-color: #ff4466;
        color: #fff;
        width: 80px;
        text-align: center;
    }
}
</style>