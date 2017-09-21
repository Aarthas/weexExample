<template>


    <div style="display: flex;flex-wrap: wrap;flex-direction: row;justify-content: center;padding-top: 10px;width: 750px;">
        <div class="iconpane" v-for="item in list " @click="clickItem(item)">
            <image class="img" style="" :src="item.img"></image>
            <text class="info" style="">{{item.title}}</text>
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
            list: {
                type: Array,
                default () {
                    return []
                }
            }
        }
        ,
        methods: {
            clickItem: function (item) {
                weex.requireModule('route-module').jtByElement(item);
            }
        }
    }
</script>

<style scoped>


    .iconpane {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        justify-content: center;
        width: 150px;
        align-items: center;

    }

    .img {
        width: 80px;
        height: 80px;

    }

    .info {
        text-align: center;
        color: #2F2F2F;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 24px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

    }
</style>