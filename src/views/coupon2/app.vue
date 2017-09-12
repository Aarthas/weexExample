<template>
    <div @appear="onappear" @disappear="ondisappear"
         style="background-color: #f6f6f6;display: flex;flex-direction: column;align-items: center">
        <!--<scroller class="scroller">-->
        <titlebar title="我的优惠券"></titlebar>

        <!--<y-icon style="line-height: 100px;" v-model="checked" :type="cellItem.stockState ==1?'default':'cancel'"></y-icon>-->
        <list class="list">
            <cell  v-for="item in couponData">
                <coupon_item ></coupon_item>
            </cell>
        </list>
        <!--<div style="height: 30px;"></div>-->
        <!--<div v-for="item in couponData" :item="item">-->
           <!---->
        <!--</div>-->



        <!--</scroller>-->
    </div>
</template>


<style scoped>

</style>

<script>
    import coupon_item from './component/coupon_item.vue' ;
    import api from '../../utils/api' ;
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

                couponData: []
            }
        },
        computed: {},

        created(){

        },


        mounted () {


//            console.log("aaa")
            page = this;
            api.get("address").then(function (resp) {
                page.couponData = resp.data;

                console.log( page.couponData)
            }).catch(function (err) {

            })

        },

        methods: {
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