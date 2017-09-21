<template>
    <div style="flex: 1;flex-direction: column;align-items: center">
        <image style="height: 105px;width: 105px;"
               :src="item.img"/>
        <text style="color: #333333;font-size: 24px;text-align: center;margin-top: 20px;">{{item.text}}</text>
    </div>
</template>


<script>
    export default {
        data () {
            return {}
        },
        props: {
            item: {

            }
        },
        methods: {
            clickItem (item) {


            }
        }
    }
</script>
<style>

</style>y