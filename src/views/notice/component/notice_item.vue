<template>
    <div style="background-color: white;padding:28px;margin-top: 20px;width: 750px;">
        <text style="color: #b0b0b0;font-size: 32px;margin-bottom: 16px;" >发布日期：{{item.publishTime}}</text>
        <text style="color: #333333;font-size: 32px;">{{item.name}}</text>
    </div>
</template>


<script>
    export default {
        data () {
            return {}
        },
        props: {
            item: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        methods: {
            clickItem (item) {


            }
        }
    }
</script>
<style>
    .image {
        width: 750px;
        height: 420px;
    }

    .slider {
        width: 750px;
        height: 420px;
    }

    .indicator {

        height: 30px;
        display: flex;
        justify-content: center;
        item-color: #d0cdd1;
        item-selected-color: #04be02;
        item-size: 14px;
        position: absolute;
        bottom: 10px;

    }
</style>y