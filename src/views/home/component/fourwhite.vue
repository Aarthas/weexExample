<template>


    <div style="display: flex;flex-wrap: nowrap;flex-direction: row;justify-content: space-around;padding-left: 10px;padding-right: 10px;">
        <div class="iconpane" v-for="item in data" @click="clickicon(item)">
            <image class="img" style="" :src="item.img"></image>
        </div>

    </div>

</template>
<script>

    export default {
        components: {},
        data () {
            return {}

        },
        props: {
            data: {

            }
        }
        ,
        created:function () {
            console.log(this.data.data)
        },
        methods: {
            clickicon: function (item) {
                weex.requireModule('route-module').jtByElement(item);
            }
        }
    }
</script>

<style scoped>



    .img {
        width: 175px;
        height: 385px;
        flex: 1;
    }


</style>