<template>

    <div style=" display: flex;flex-direction: column;background-color: white;">
        <div @click="toDetail">
            <image style="height: 200px;width: 200px;"
                   src="http://img.sanjiang.com/image/20169/27/image1474964460211.jpg"/>
            <text style="color: #333333;font-size: 24px;width: 200px;text-align: center;margin-top: 20px;">枪手杀虫气雾剂（绿茶香型）600毫升</text>
        </div>
        <div style="display: flex;flex-direction: row;justify-content: space-around;padding-right: 10px;padding-right: 10px;width: 200px;">

            <text style="font-size: 22px;color: #666">￥111</text>
            <image style="width: 50px;height: 50px;" src="http://onpxz5rdd.bkt.clouddn.com/ic_put_into_cart.png" @click="action_addToCart"></image>
        </div>
    </div>


</template>

<script>

    export default {
        components: {},
        props: {
            item: Object
        },
        methods: {
            toDetail: function () {
//                let that = this;
//                that.$emit('goDetail', this.item)
            },
            action_addToCart: function () {


            }
        }
    }
</script>

<style scoped>

</style>