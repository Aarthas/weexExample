<template>
    <div style="height: 514px;background-color: #f6f6f6">
        <text style="color: #666666;font-size: 30px;width: 750px;text-align: center;margin-bottom: 28px;margin-top: 30px;">- 选择支付方式 -</text>
        <div style="display: flex;flex-direction: row;justify-content: space-around;width: 750px; padding-bottom: 40px;" >
            <div class="btn" @click="jt_wxpay()">
                <image style="height: 69px;width: 233px;"  src="http://img.sanjiang.com/image/20179/22/image1506059943397.png" ></image>
            </div>
            <div class="btn" @click="jt_alipay()">
                <image style="height: 69px;width: 233px;"   src="http://img.sanjiang.com/image/20179/22/image1506059983019.png" ></image>
            </div>
        </div>
        <div style="display: flex;flex-direction: column;background-color: white" @click="jt_rights()">
            <div style="flex-direction: row;justify-content: space-between;align-items: center;padding-top: 20px;padding-bottom: 10px;padding-left: 30px;padding-right: 30px;">
                <text style="color: #666666;font-size: 30px;">会员权益</text>
                <text style="color: #666666;font-size: 26px;">更多</text>
            </div>

            <div style="flex-direction: row;flex-wrap: nowrap;align-items: center;width: 750px;margin-top: 0px;height: 220px;">
               <info v-for="item in items" :item="item" :key="item.text"></info>

            </div>



        </div>
    </div>
</template>


<style scoped>
    .btn {
        height: 82px;width: 312px;
        background-color: white;
        align-items: center;
        justify-content: center;
    }
    .btn:active {

        background-color: #dddddd;
    }
</style>

<script>
    import nlib from '../../utils/nlib' ;
    import info from './component/info.vue' ;
    const modal = weex.requireModule('modal')

    var page;
    export default {
        components: {info},
        data () {
            return {
                items:[
                    {img:"http://img.sanjiang.com/image/20179/21/image1505982620681.png",text:"购物返积分"},
                    {img:"http://img.sanjiang.com/image/20179/21/image1505982688704.png",text:"无忧退货"},
                    {img:"http://img.sanjiang.com/image/20179/21/image1505982701009.png",text:"专享活动"},
                    {img:"http://img.sanjiang.com/image/20179/21/image1505982711409.png",text:"专享商品"},



                    ]

            }
        },
        computed: {

        },

        created(){
        },


        mounted () {
            page = this;


        },

        methods: {
            jt_rights:function () {
                weex.requireModule('route-module').jtByElement({
                    jt:191,
                    aim:"http://weixin.sanjiang.com/sjmarket/views/main/main.html#/listproduct?keyword=asd"
                });
            },
            jt_wxpay:function () {
                nlib.router.jt_wxpay();

            }
            ,
            jt_alipay:function () {
                nlib.router.jt_alipay();

//                weex.requireModule('route-module').jt_alipay();
            }


        }
    }
</script>