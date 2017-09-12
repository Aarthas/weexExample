<template>
    <div @appear="onappear"  @disappear="ondisappear">
        <scroller class="scroller">

            <div>

                <!--<banner2 :bannerdata="bannerdata" style="width:100vw;height:400px"></banner2>-->
                <banner :list="bannerdata" ></banner>
                <menu :list="menudata"> </menu>

                <div v-for="floor in floors">
                    <fourwhite v-if="floor.vt==3" :data="floor"></fourwhite>
                </div>

                <image style="height: 300px;"
                       src="https://m.360buyimg.com/babel/s746x376_jfs/t8731/137/890745710/126735/d04e7518/59b0b878N53711567.jpg!q50.jpg.webp"></image>

                <div style="display: flex;flex-wrap: wrap;flex-direction: row;justify-content: space-around;padding-left: 10px;padding-right: 10px;">
                    <recommend_cell></recommend_cell>
                    <recommend_cell></recommend_cell>
                    <recommend_cell></recommend_cell>
                    <recommend_cell></recommend_cell>
                    <recommend_cell></recommend_cell>
                    <recommend_cell></recommend_cell>
                </div>


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
    const modal = weex.requireModule('modal')
    var stream = weex.requireModule('stream')
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
                bannerdata: [],
                menudata: [],
                floors:[]
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
            weex.requireModule('LogModule').log("created")
        },


        mounted () {

            weex.requireModule('LogModule').log("mounted")
            console.log("aaa")
            page = this;
            stream.fetch({
                method: 'GET',
                type: 'json',
                url: 'http://app.sanjiang.com/home/index'
            }, function (resp) {
                console.log(resp.data.data.head)
                page.malldata = resp.data.data;


                page.bannerdata = resp.data.data.head;

                page.menudata = resp.data.data.menu;
                page.floors =  page.malldata.floors
                console.log(page.malldata.floors[1])


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