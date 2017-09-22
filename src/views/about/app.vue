<template>
    <div style="display: flex;flex-direction: column;align-items: center">
        <!--<scroller class="scroller">-->

        <titlebar title="关于我们"></titlebar>
        <image src="http://img.sanjiang.com/images/1015992/00.jpg"
               style="height: 300px;width: 300px;margin-top: 130px;"></image>
        <text style="font-size: 40px;margin-top: 10px;">安鲜生活</text>
        <text style="color: #999999;font-size: 26px;margin-top: 10px;">当前版本:V {{versionname}}</text>

        <div style="margin-left: 28px;margin-right: 28px;flex: 1">
            <text style="color: #999999;font-size: 30px;margin-top: 10px;">      三江公司成立于 1995 年，自公司第一家位于宁波市中心的曙光商场开业以来，始终坚持“用较少的钱，过更好的生活”的公司使命，立足社区老百姓日常生活所需，坚持“便宜、便利”的价值理念，为会员顾客带来“新鲜、实惠、每一天”的顾客体验。




            </text>
        </div>

        <div style="width: 750px;align-items: center">
            <text>Copyright©2009-2015</text>
            <text>三江购物www.sanjiang.com 版权所有</text>
        </div>

    </div>
</template>


<style scoped>

</style>

<script>
    import titlebar from '../../components/titlebar.vue' ;
    const modal = weex.requireModule('modal')
    import Vue from 'vue'
    var page;
    export default {
        components: {titlebar},
        data () {
            return {
                versionname:""
            }
        },
        computed: {

        },

        created(){
//            weex.requireModule('device-module').setStatusbarColor("#6dc027");
        },


        mounted () {
            page = this;
            weex.requireModule('device-module').getVersionName(function (resp) {
                page.versionname = resp;
//                Vue.nextTick(function () {
//                    // DOM 更新了
//                    page.aa = resp;
//                    modal.toast({
//                        message: page.versionname,
//                        duration: 1
//                    })
//                })

            });


        },

        methods: {



        }
    }
</script>