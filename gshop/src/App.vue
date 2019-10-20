<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide  v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>


<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'

    export default {

        created () {
            // 异步获取 address
            // this.$store.dispatch('getAddress')

        },

        components: {
            FooterGuide
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
