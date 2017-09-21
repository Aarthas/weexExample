<template>
    <div style="display: flex;flex-direction: column;align-items: center">

        <text style="font-size: 40px;margin-top: 10px;">安鲜生活</text>
        <text style="color: #999999;font-size: 26px;margin-top: 10px;line-height: 60px;">亲爱的家人，我们正式你的亲爱的家人，我们正式你的亲爱的家人，我们正式你的亲爱的家人，我们正式你的</text>

        <div>
            <image style="width:650px; height:350px;"
                   src="http://193.0.1.157:9091/coupon2.png"></image>
            <div style=" position:absolute;top:10px;left:10px;background-color: #afddff">
                <textarea class="textarea"  style="line-height: 60px;"  value="奥术大师大所大所大所大所大所大所大所大所大所大所大所奥术大师大所大所大所大所大所大所大所大所大所大所大所奥术大师大所大所大所大所大所大所大所大所大所大所大所奥术大师大所大所大所大所大所大所大所大所大所大所大所"    rows="10"  placeholder="sadasd"  @input="oninput"></textarea>
            </div>
        </div>


        <!--</scroller>-->
    </div>
</template>


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


        },


        mounted () {
            page = this;


        },

        methods: {
            oninput (event) {
                console.log('oninput:', event.value)
                modal.toast({
                    message: `oninput: ${event.value}`,
                    duration: 0.8
                })
            },

        }
    }
</script>

<style scoped>
    .textarea {
        font-size: 36px;
        width: 630px;
        height: 300px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
        line-height: 220px;

        color: #666666;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
    }
</style>