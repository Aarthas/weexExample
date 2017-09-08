<template>


    <div style="display: flex;flex-wrap: wrap;flex-direction: row;justify-content: space-around;padding-left: 10px;padding-right: 10px;">
        <div class="iconpane" v-for="item in data.data" @click="clickicon(item)">
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
                type: Object,
                default () {
                    return {}
                }
            }
        }
        ,
        created:function () {
            console.log(this.data.data)
        },
        methods: {
            clickicon: function (item) {

            }
        }
    }
</script>

<style scoped>


    .iconpane {
        display: flex;
        flex-direction: column;

        margin-bottom: 10px;
        align-items: center;

    }

    .img {
        width: 350px;
        height: 175px;

    }

    .info {
        text-align: center;
        color: #2F2F2F;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 22px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

    }
</style>