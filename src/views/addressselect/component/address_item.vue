<template>
    <div @click="clickItem" style="flex-direction: column;height: 160px;background-color: white;justify-content: center;padding-left: 30px;
border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#d1d1d1;
">

        <text style="font-size: 30px;color: #666666">{{item.consignee}}                {{item.mobile}}  </text>
        <text style="font-size: 30px;color: #666666;margin-top: 16px;margin-right: 100px;">{{detail}}</text>

        <image style="width: 48px;height: 48px;padding: 6px; position:absolute;top: 60px;right: 20px;"
               src="http://img.sanjiang.com/image/20179/22/image1506064578017.png" @click="jteditaddress"></image>
    </div>
</template>


<script>
    import nlib from '../../../utils/nlib' ;
    export default {
        data () {
            return {}
        },
        props: {
            item: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        computed: {
            detail(){
                if (this.item.deliver){
                    return  this.item.areaDesc +"    "+ this.item.detailAddress;
                }else
                {
                    return  "("+this.item.shopName+")"+ this.item.detailAddress;
                }

            }

        },

        methods: {

            clickItem (item) {
                nlib.event.setSelectAddress(this.item)
                nlib.router.naviback();
            },

            jteditaddress:function () {
                nlib.router.editaddress(this.item);
            }
        }
    }
</script>
<style>

</style>y