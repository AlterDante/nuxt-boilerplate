<template>
  <div>
    <Header/>
    <nuxt class="page-content" />
    <Footer/>
    <modal/>
  </div>
</template>
<style lang="scss">
  .page-content {
    min-height: calc(100vh - 50px - 70px);
    background-color: #111111;
  }
</style>
<script>
import Footer from '~/components/partials/footer/footer.vue'
import Header from '~/components/partials/header/header.vue'
import modal from '~/components/modal/modal.vue'

export default {
  components: {
    Footer,
    Header,
    modal,
  },
}
</script>

