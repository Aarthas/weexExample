<template>
    <div
            style="background-color: #f6f6f6;display: flex;flex-direction: column;align-items: center">
        <!--<scroller class="scroller">-->
        <titlebar title="我的优惠券"></titlebar>
        <!--<coupon_item ></coupon_item>-->

        <scroller>
            <div style="width: 750px;justify-content: center;align-items: center">

                <!--<div style="height:40px;width: 10px;"></div>-->
                <div v-for="item in list">
                    <coupon_item style="margin-top: 10px;margin-bottom: 10px;"></coupon_item>
                </div>
            </div>
        </scroller>
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
            coupon_item
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
                url: 'search/hotwords',
                success: function (basebean) {

                    let data2 = basebean.getData();


                    page.list = data2;

                }
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