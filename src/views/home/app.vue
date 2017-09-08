<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import dreamApi from 'api/dream'
  import mixins from 'mixins'

  export default {
    mixins: [mixins],

    data () {
      return {
        feeds: []
      }
    },

    mounted () {
      dreamApi.dreamFeeds({
        anchorId: -1,
        size: 20
      }).then(res => {
        this.feeds = res.data.feeds
        console.log('请求成功~', res.data.feeds)
      }).catch(res => {
        console.log('请求失败~')
      })
      let globalEvent = weex.requireModule('globalEvent')
      globalEvent.addEventListener('geolocation', function (e) {
        console.log('get geolocation')
        weex.requireModule('myModule').printLog(JSON.stringify(e))
      })



    },

    methods: {
      toDetail(infoUuid) {
        console.log('toDetail')
        weex.requireModule('myModule').printLog('我是一个测试!', function (d) {
          console.log(d)
        })



      }
    }
  }
</script>