<template>
    <div
            @viewappear="viewappear" @viewdisappear="viewdisappear"
            style="background-color: #f6f6f6;display: flex;flex-direction: column;

">

        <scroller class="scroller">

            <div>

                <!--<div v-if="!isAddressEmpty">-->
                <div>
                    <div style="flex-direction: row;justify-content: flex-start;padding-left: 30px;padding-right: 30px;height: 90px;align-items: center;">
                        <text style="font-size: 30px;color: #333333">我的自提地址</text>
                    </div>


                    <div>
                        <div v-if="selfpick==null" style="background-color: white;width: 750px;align-items: center"
                             @click="jt_addselfpick">
                            <text style="font-size: 30px;color: #666666;line-height: 150px;">点击添加自提地址+</text>
                        </div>

                        <address_item v-else :item="selfpick"></address_item>
                    </div>


                    <div style="display:flex;flex-direction: row;justify-content: space-between;padding-left: 30px;padding-right: 30px;height: 90px;align-items: center;flex-wrap: nowrap;">
                        <text style="font-size: 30px;color: #333333;">我的配送地址</text>
                        <text style="font-size: 30px;color: #4f7560" @click="jt_addaddress">新增</text>
                    </div>

                    <div>
                        <div v-if="delivers==null||delivers.length == 0"
                             style="background-color: white;width: 750px;align-items: center" @click="jt_addaddress">
                            <text style="font-size: 30px;color: #666666;line-height: 150px;">点击添加收货地址+</text>
                        </div>
                        <div v-else>
                            <address_item v-for="item in delivers" :item="item" :key="item.id"></address_item>
                        </div>
                    </div>


                </div>


            </div>
        </scroller>
    </div>
</template>


<style scoped>

</style>

<script>
    import address_item from './component/address_item.vue' ;
    import api from '../../utils/api' ;
    import nlib from '../../utils/nlib' ;
    const modal = weex.requireModule('modal')

    var page;
    export default {
        components: {address_item},
        data () {
            return {
                selfpick: null,
                delivers: [],
                isAddressEmpty: false
            }
        },
        computed: {},

        created(){
            page = this;
        },


        mounted () {

            let aa = this.$getConfig().aa;
            modal.toast({
                message: "asd"+aa,
                duration: 0.8
            })
            loaddata();

        },

        methods: {
            jt_addselfpick: function () {
                nlib.router.addselfpick();
            },
            jt_addaddress: function () {
                nlib.router.addaddress();
            },
            viewappear (event) {
//                console.log('onappear:', event)
//                modal.toast({
//                    message: 'onappear',
//                    duration: 0.8
//                })
                loaddata();
            },
            viewdisappear (event) {
                console.log('ondisappear:', event)
                modal.toast({
                    message: 'ondisappear',
                    duration: 0.8
                })
            }


        }
    }
    function loaddata() {
        api.api({

            page:page,
            loading:{},
            url: 'address/getAllAddress',
            success: function (basebean) {
                let data = basebean.getData();
                page.selfpick = data.selfpick;
                page.delivers = data.delivers;
//                    page.deliver=null;
                if (page.selfpick == null && page.delivers == null && page.delivers.length == 0) {
                    page.isAddressEmpty = true;
                } else {
                    page.isAddressEmpty = false;
                }
//                    page.isAddressEmpty =  true;


            }
        })
    }
</script>