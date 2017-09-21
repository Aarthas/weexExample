<template>
    <div style="width: 720px;height: 220px;border-radius: 15px;">
        <image style="width: 720px;height: 220px;" src="http://img.sanjiang.com/image/20179/21/image1505983813262.png" ></image>
        <div style="display: flex;flex-direction: column;position:absolute; top:20px; left:20px;">
            <div style="display: flex;flex-direction: row;margin-left: 40px;">
                <div style="display: flex;flex-direction: column;width: 168px;height: 130px;
    border-right-style:solid;border-right-width:1px;border-right-color:#d1d1d1;margin-bottom: 10px;
    justify-content: flex-start;padding-top: 10px;
    ">
                    <div style="display: flex;flex-direction: row;align-items: flex-end">
                        <text style="color: red;font-size: 36px;margin-bottom: 10px;">¥</text>
                        <text style="color: red;font-size: 72px;">3</text>
                    </div>

                    <text style="color: #666666;font-size: 24px;">满40使用</text>
                </div>
                <div style="height: 130px;display: flex;flex-direction: column;margin-left: 20px;justify-content: space-around">
                    <div style="display: flex;flex-direction: row;align-items: center;height: 40px;">
                        <text style="color:#f03838;font-size: 20px;line-height: 20px;text-align: center;border-style:solid;border-width:1px;border-color:#f03838;border-radius: 4px;padding: 5px;">满减券</text>
                        <text style="color: #666666;font-size: 24px;margin-left: 12px;">新手券满40减3</text>
                    </div>

                    <text style="color: #666666;font-size: 22px;">2017</text>
                    <text style="color: #666666;font-size: 20px;">仅线上使用</text>
                </div>
            </div>
            <div style="border-top-style:solid;border-top-width:1px;border-top-color:#d1d1d1;width: 660px;">
                <text style="color: #666666;font-size: 20px;line-height: 50px;">所有门店全场商品通用</text>
            </div>
        </div>


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