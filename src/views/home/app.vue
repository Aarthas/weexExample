<template>
    <div @appear="onappear" @disappear="ondisappear">
        <scroller style="width: 750px;" class="scroller">

            <div>


                <div v-for="floor in floors">
                    <!--<div>aa</div>-->
                    <banner v-if="floor.vt==1" :list="floor.data"></banner>
                    <menu v-if="floor.vt==2" :list="floor.data"></menu>

                    <image v-if="floor.vt==3" style="height: 220px;" @click="clickItem(floor.data[0])"
                           :src="floor.data[0].img"></image>


                    <fourwhite v-if="floor.vt==5" :data="floor.data"></fourwhite>

                    <image v-if="floor.vt==6" style="height: 360px;" @click="clickItem(floor.data[0])"
                           :src="floor.data[0].img"></image>
                    <horizon-scroll v-if="floor.vt==7" style="width: 750px;height: 360px;"  :itemlist="floor.data"></horizon-scroll>
                </div>


                                <!--<image style="height: 300px;"-->
                <!--src="https://m.360buyimg.com/babel/s746x376_jfs/t8731/137/890745710/126735/d04e7518/59b0b878N53711567.jpg!q50.jpg.webp"></image>-->

                <!--<div style="display: flex;flex-wrap: wrap;flex-direction: row;justify-content: space-around;padding-left: 10px;padding-right: 10px;">-->
                <!--<recommend_cell></recommend_cell>-->
                <!--<recommend_cell></recommend_cell>-->
                <!--<recommend_cell></recommend_cell>-->
                <!--<recommend_cell></recommend_cell>-->
                <!--<recommend_cell></recommend_cell>-->
                <!--<recommend_cell></recommend_cell>-->
                <!--</div>-->


            </div>
        </scroller>
    </div>
</template>


<style scoped>

</style>

<script>
    import banner from './component/banner.vue' ;
    import menu from './component/menu.vue' ;
    import fourwhite from './component/fourwhite.vue' ;
    import recommend_cell from './component/recommend_cell.vue' ;
    import api from '../../utils/api' ;
    const modal = weex.requireModule('modal')

    var page;
    export default {
        components: {
            banner,
            menu,
            fourwhite, recommend_cell
        },
        data () {
            return {
                malldata: null,

                floors: []
            }
        },
        computed: {
//            item: function () {
//                if (malldata) {
//                    return page.malldata.floors[2].data[1]
//                }
//                return {};
//            }
        },

        created(){
//            weex.requireModule('LogModule').log("created")
        },


        mounted () {

//            weex.requireModule('LogModule').log("mounted")
            console.log("aaa")
            page = this;

            api.api({
                url: 'home/index',
                success: function (basebean) {
                    let mallData = basebean.getData();
                    page.malldata = mallData;
                    page.floors = mallData.floors
                    console.log(page.floors)

                }
            })
//            stream.fetch({
//                method: 'GET',
//                type: 'json',
//                url: 'http://app.sanjiang.com/home/index'
//            }, function (resp) {
//                console.log(resp.data.data.head)
//
//                console.log(page.malldata.floors[1])
//
//
//            })
        },

        methods: {
            clickItem (item) {
                console.log("aaa")
                weex.requireModule('HomeModule').jtByElement(item);

            },
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