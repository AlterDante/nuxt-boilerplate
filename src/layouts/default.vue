<template>
  <div>
    <Header/>
    <nuxt class="page-content"/>
    <Footer/>
  </div>
</template>
<style lang="scss">
  .page-content{
    min-height: calc(100vh - 50px - 70px);
  }

</style>
<script>
import Footer from '~/components/partials/footer/footer.vue'
import Header from '~/components/partials/header/header.vue'
export default {
  components: {
    Footer,
    Header,
  },
  transition: {
    name: 'slid-left',
    mode: 'out-in',
  },
}
</script>

