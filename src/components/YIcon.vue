<template>
    <div @click="updateValue">
        <!--<i class="weui-icon-success" v-show="type == 'default' && value"></i>-->
        <!--<i class="weui-icon-circle" v-show="type == 'default' && !value"></i>-->
        <!--<i class="weui-icon-cancel" v-show="type == 'cancel'"></i>-->
        <image class="icon" src="http://onpxz5rdd.bkt.clouddn.com/ic_checked.png" resize="contain" v-if="type == 'normal' && value"></image>
        <image class="icon" src="http://onpxz5rdd.bkt.clouddn.com/ic_unchecked.png" resize="contain" v-if="type == 'normal' && !value"></image>
        <image class="icon" src="http://onpxz5rdd.bkt.clouddn.com/ic_check_unable.png" resize="contain" v-if="type == 'cancel'"></image>



    </div>
</template>

<script>


    export default {

        components: {},
        methods: {
            updateValue () {
                this.$emit('update:value', !this.value)
            }
        },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'normal'
            }
        }
    }
</script>

<style scoped>
    .icon {
        width:80px;height: 220px;padding-left: 20px;padding-right:20px;
    }
</style>
