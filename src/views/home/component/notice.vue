<template>


    <div style="display: flex;flex-direction: row;justify-content: flex-start;padding-left: 10px;padding-right: 10px;height: 60px;width: 750px;align-items: center;background-color: #f6f6f6;
border-top-style:solid;border-top-width:1px;border-top-color:#d1d1d1;
border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#d1d1d1;
">


            <image  style="height: 42px;width: 121px;margin-left: 15px;margin-right: 15px;
           "  src="http://img.dev.sanjiang.info/image/20179/21/image1505971376094.png"></image>

        <marquee-comp style="height: 50px;flex: 1;margin-left: 10px;"></marquee-comp>

    </div>

</template>
<script>

    export default {
        components: {},
        data () {
            return {}

        },
        props: {

        }
        ,
        created:function () {
//            console.log(this.data.data)
        },
        methods: {
            clickicon: function (item) {
                weex.requireModule('route-module').jtByElement(item);
            }
        }
    }
</script>

<style scoped>






</style>