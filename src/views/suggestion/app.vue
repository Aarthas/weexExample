<template>
    <div @appear="onappear" @disappear="ondisappear" style="display: flex;flex-direction: column;align-items: center">
        <!--<scroller class="scroller">-->

        <div style="background-color: #4e735e;width: 750px;height: 96px;display: flex;flex-direction: row;align-items: center;padding-right: 96px;">
            <image style="height: 96px;width: 96px;padding: 30px;"
                   src="http://onpxz5rdd.bkt.clouddn.com/ic_arrow_left_fff.png" @click="onbackpress"></image>
            <text style="color: white;font-size: 36px;flex: 1;text-align: center">在线留言</text>
        </div>

        <text style="font-size: 40px;margin-top: 10px;">安鲜生活</text>
        <text style="color: #999999;font-size: 26px;margin-top: 10px;">亲爱的家人，我们正式你的</text>

        <div style="background-color: #0088fb;width: 750px;height: 300px;">
            <!--<image style="width:660px; height:750px;"-->
                   <!--src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></image>-->
            <div style=" position:absolute;top:50px;left:10px;">
                <!--<text style="font-size:50px; color: #ff0000">你好，image</text>-->
                <input type="text" placeholder="Input Text" style="width: 660px;border-color: transparent;height: 200px; " :autofocus=true value="aa" />

            </div>
        </div>


        <!--</scroller>-->
    </div>
</template>


<style scoped>

</style>

<script>

    const modal = weex.requireModule('modal')

    var page;
    export default {
        components: {},
        data () {
            return {
                versionname: ""
            }
        },
        computed: {},

        created(){

            weex.requireModule('LogModule').log("created")
        },


        mounted () {
            page = this;
            let versionName = weex.requireModule('DeviceModule').getVersionName(function (resp) {
                page.versionname = resp;
//                modal.toast({
//                    message: resp,
//                    duration: 1
//                })
            });


        },

        methods: {
            onbackpress: function () {
                weex.requireModule('EventModule').onbackpress();
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