<template>
    <div @appear="onappear" @disappear="ondisappear"
         style="background-color: #f6f6f6;display: flex;flex-direction: column;align-items: center">

        <titlebar title="公告详情"></titlebar>


        <list class="list">
            <cell  v-for="item in couponData">
                <notice_item ></notice_item>
            </cell>
        </list>


    </div>
</template>


<style scoped>

</style>

<script>
    import notice_item from './component/notice_item.vue' ;
    import api from '../../utils/api' ;
    import titlebar from '../../components/titlebar.vue' ;
    const modal = weex.requireModule('modal')

    var page;
    export default {
        components: {
            titlebar,
            notice_item
        },
        data () {
            return {
                couponData: []
            }
        },
        computed: {},

        created(){

        },


        mounted () {


//            console.log("aaa")
            page = this;
            api.get("address").then(function (resp) {
                page.couponData = resp.data;
                console.log( page.couponData)
            }).catch(function (err) {

            })

        },

        methods: {
            onappear (event) {
                console.log('onappear:', event)
                modal.toast({
                    message: 'onappear',
                    duration: 0.8
                })
            },
            ondisappear (event) {
                console.log('ondisappear:', event)
                modal.toast({
                    message: 'ondisappear',
                    duration: 0.8
                })
            }


        }
    }
</script>