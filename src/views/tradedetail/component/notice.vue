<template>


    <div @click="clickItem" style="display: flex;flex-direction: row;justify-content: flex-start;padding-left: 10px;padding-right: 10px;height: 64px;width: 750px;align-items: center;background-color: #f6f6f6;
border-top-style:solid;border-top-width:1px;border-top-color:#d1d1d1;
border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#d1d1d1;
">


            <image  style="height: 42px;width: 121px;margin-left: 15px;margin-right: 15px;
           "  src="http://img.dev.sanjiang.info/image/20179/21/image1505971376094.png"></image>

        <div style="width: 1px;height: 30px;align-items: center;background-color: #dddddd;margin-left: 16px;margin-right: 20px;"></div>

        <marquee-comp style="height: 50px;flex: 1;" :data="data"   :element="element"></marquee-comp>

    </div>

</template>
<script>

    export default {
        components: {},
        data () {
            return {
                element: {
                    jt: 100,
                    aim: "http://193.0.1.157:8080/dist/weex/views/notice/app.js"
                }
            }

        },
        props: {
            data:{}
        }
        ,
        created:function () {

        },
        methods: {
            clickItem: function () {
                weex.requireModule('route-module').jtByElement( this.element);
            }
        }
    }
</script>

<style scoped>






</style>