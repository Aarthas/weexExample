<template>


    <div style="display: flex;flex-wrap: wrap;flex-direction: row;justify-content: center;padding-top: 10px;width: 750px;">
        <div class="iconpane" v-for="item in list " @click="clickItem(item)">
            <image class="img" style="" :src="item.img"></image>
            <text class="info" style="">{{item.title}}</text>
        </div>

    </div>

</template>
<script>
    const storage = weex.requireModule('storage')
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
                storage.setItem('name', 'Hanks', event => {

                    console.log('set success')
                })
                storage.getItem('name', event => {
                    console.log('get value:', event.data)
                })
                weex.requireModule('HomeModule').routeTo(item)
            }
        }
    }
</script>

<style scoped>


    .iconpane {
        display: flex;
        flex-direction: column;

        padding-left: 26px;
        padding-right: 26px;
        align-items: center;

    }

    .img {
        width: 90px;
        height: 90px;

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