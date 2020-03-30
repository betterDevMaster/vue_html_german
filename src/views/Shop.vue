<template>
  <div class="restaurant-wraper">
    <TopHead />
    <ShopHead />
    <div style="background-color: #f7f7f7; padding-top: 40px;">
      <div class="container" style="margin-top: -200px;">
        <CardBig/>
        <CardBig/>
        <div class="row">
          <CardSmall/>
          <CardSmall/>
          <CardSmall/>
          <CardSmall/>
          <CardSmall/>
          <CardSmall/>
        </div>
      </div>
    </div>
    <Footer/>
    <BackToTop/>
    <BottomLogo/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHead from '@/components/TopHead.vue'
import ShopHead from '@/components/ShopHead.vue'
import Footer from '@/components/Footer.vue'
import CardBig from '@/components/Card/CardBig.vue'
import CardSmall from '@/components/Card/CardSmall.vue'
import BackToTop from '@/components/Piece/BackToTop.vue'
import BottomLogo from '@/components/Piece/BottomLogo.vue'

export default {
  name: 'shop',
  components: {
    TopHead,
    ShopHead,
    CardBig,
    CardSmall,
    Footer,
    BackToTop,
    BottomLogo
  }
}
</script>
<style scoped>

</style>
