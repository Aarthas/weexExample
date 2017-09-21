<template>
    <div style="display: flex;flex-direction: column;" @click="jt_rights()">
        <div style="flex-direction: row;justify-content: space-between;align-items: center;padding-top: 20px;padding-bottom: 10px;padding-left: 30px;padding-right: 30px;">
            <text style="color: #666666;font-size: 30px;">会员权益</text>
            <text style="color: #666666;font-size: 26px;">更多</text>
        </div>

        <div style="flex-direction: row;flex-wrap: nowrap;align-items: center;width: 750px;margin-top: 0px;height: 220px;">
           <info v-for="item in items" :item="item" :key="item.text"></info>

        </div>



    </div>
</template>


<style scoped>

</style>

<script>
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
                    aim:"http://www.jcodecraeer.com/plus/list.php?tid=31&keyword=marquee"
                });
            }


        }
    }
</script>