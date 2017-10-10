<template>
    <div
         style="background-color: #f6f6f6;display: flex;flex-direction: column;align-items: center">

        <titlebar title="公告详情"></titlebar>


        <list class="list">
            <cell  v-for="item in list">
                <notice_item :item="item"></notice_item>
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
                list: []
            }
        },
        computed: {},

        created(){

        },


        mounted () {


//            console.log("aaa")
            page = this;
            api.api({
                url: 'article/list',
                success: function (basebean) {

                    let data2 = basebean.getData().list;


                    page.list = data2;

                }
            })




        },

        methods: {


        }
    }
</script>