<template>
    <div>
        <slider class="slider" interval="4500" auto-play=true  >
            <div class="frame" v-for="item in list">
                <image class="image" resize="cover" :src="item.img" @click="clickItem(item)"></image>
            </div>
            <indicator width="750px" class="indicator"></indicator>
        </slider>
    </div>
</template>

<script>
    export default {
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
        },
        methods: {
            clickItem (item) {
                console.log("aaa")
                weex.requireModule('HomeModule').jtByElement(item);

            }
        }
    }
</script>
<style>
    .image {
        width: 750px;
        height: 380px;
    }

    .slider {
        width: 750px;
        height: 380px;
    }

    .indicator {
        height: 30px;
        width: 750px;
        display: flex;
        justify-content: center;
        item-color: #d0cdd1;
        item-selected-color: #04be02;
        item-size: 14px;
        position: absolute;
        bottom: 10px;
    }
</style>y