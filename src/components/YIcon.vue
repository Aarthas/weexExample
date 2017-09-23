<template>
    <div >
        <!--<i class="weui-icon-success" v-show="type == 'default' && value"></i>-->
        <!--<i class="weui-icon-circle" v-show="type == 'default' && !value"></i>-->
        <!--<i class="weui-icon-cancel" v-show="type == 'cancel'"></i>-->
        <image class="icon" src="http://img.sanjiang.com/image/20179/23/image1506152902307.png" resize="contain" v-if="type == 'normal' && currentValue"></image>
        <image class="icon" src="http://img.sanjiang.com/image/20179/23/image1506152926019.png" resize="contain" v-if="type == 'normal' && !currentValue"></image>
        <!--<image class="icon" src="http://onpxz5rdd.bkt.clouddn.com/ic_check_unable.png" resize="contain" v-if="type == 'cancel'"></image>-->



    </div>
</template>

<script>


    export default {

        components: {},
        data () {
            return {
                currentValue: ''
            };
        },
        props: {
            checked: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'normal'
            }
        },
        watch: {
            checked (newVal) {
                this.currentValue = this.checked
            }
        },
        created:function () {
            this.currentValue = this.aa
        },

        methods: {
//            updateValue () {
//                this.$emit('update:value', !this.value)
//            }
        },

    }
</script>

<style scoped>
    .icon {
        width:80px;height: 80px;padding-left: 20px;padding-right:20px;
    }
</style>
