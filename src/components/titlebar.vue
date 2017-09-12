<template>
    <div style="background-color: #4e735e;width: 750px;height: 96px;display: flex;flex-direction: row;align-items: center;padding-right: 96px;">

        <image style="height: 96px;width: 96px;padding: 30px;" src="http://onpxz5rdd.bkt.clouddn.com/ic_arrow_left_fff.png" @click="onbackpress"></image>
        <text style="color: white;font-size: 36px;flex: 1;text-align: center" >{{title}}</text>
    </div>
</template>


<script>
    export default {
        data () {
            return {}
        },
        props: {
            title: {
                type: String,

            }
        },
        methods: {
            onbackpress:function () {
                weex.requireModule('EventModule').onbackpress();
            },
        }
    }
</script>
<style>

</style>y