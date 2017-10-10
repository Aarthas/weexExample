<template>
    <div @appear="onappear" @disappear="ondisappear"
         style="background-color: #f6f6f6;display: flex;flex-direction: column;align-items: center">
        <!--<scroller class="scroller">-->
        <titlebar title="我的优惠券"></titlebar>

        <!--<y-icon style="line-height: 100px;" v-model="checked" :type="cellItem.stockState ==1?'default':'cancel'"></y-icon>-->
        <list style="flex: 1;margin-bottom: 130px;">
            <cell  v-for="item in list">
                <coupon_item style="margin-top: 10px;margin-bottom: 10px;" @doSelect="doSelect" :item="item"></coupon_item>
            </cell>
        </list>
        <!--<div style="height: 30px;"></div>-->
        <!--<div v-for="item in couponData" :item="item">-->
           <!---->
        <!--</div>-->

        <div style="position: fixed;bottom: 0px;width: 750px;display: flex;flex-direction: row;justify-content: center;align-items: center;padding-bottom: 30px;padding-top: 20px;">
            <text  class="btn"  @click="usecoupon">使用</text>
        </div>


        <!--</scroller>-->
    </div>
</template>


<style scoped>
    .btn {
        height: 80px;width: 400px;text-align: center;border-radius:6px;font-size: 34px;color: white;line-height: 80px;
        background-color: #6dc027;
    }
    .btn:active {

        background-color: green;
    }
</style>

<script>
    import Vue from 'Vue' ;
    import coupon_item from './component/coupon_item.vue' ;
    import api from '../../utils/api' ;
    import nlib from '../../utils/nlib' ;
    import titlebar from '../../components/titlebar.vue' ;

    const modal = weex.requireModule('modal')

    var page;
    export default {
        components: {
            titlebar,
            coupon_item,

        },
        data () {
            return {

                list: []
            }
        },
        computed: {},

        created(){

        },


        mounted () {


            page = this;

            api.api({
                loading:{},
                url: 'orders/canUseList',
                success: function (basebean) {
                    let data2 = basebean.getData();
                    page.list = data2.coupons_able;
                }
            });

        },

        methods: {
            doSelect(item){
                console.log("doSelect")
                console.log(item)

//                modal.toast({
//                    message: 'item'+JSON.stringify(item),
//                    duration: 0.8
//                })

                api.api({
                    loading:{},
                    url: 'orders/checkVolume?volumeNumber='+item.volumeNumber,
                    success: function (basebean) {

                        let data2 = basebean.getData();
                        page.list = data2.coupons_able;
                    }
                    ,
                    onerrcode:function (basebean) {
                        modal.toast({
                            message: basebean.getMessage(),
                            duration: 1
                        })
                    }

                })
            },
            usecoupon(){
                nlib.event.usecoupon();
            },
            onappear (event) {
                console.log('onappear:', event)
                modal.toast({
                    message: 'onappear',
                    duration: 0.8
                })
            },
            ondisappear (event) {
                console.log('ondisappear:', event)
                modal.toast({
                    message: 'ondisappear',
                    duration: 0.8
                })
            }


        }
    }
</script>