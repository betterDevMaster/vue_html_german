<template>
  <div class="restaurant-wraper">
    <TopHead />
    <AboutUs/>
    <KassenSystem/>
    <MobileApp/>
    <OnlineShops/>
    <div style="background-color: #fff;height: 30px;"></div>
    <ContactUs/>
    <Footer/>
    <PosServicePopup/>
    <AskButton/>
    <BackToTop/>
    <BottomLogo/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHead from '@/components/TopHead.vue'
import AboutUs from '@/components/AboutUs.vue'
import KassenSystem from '@/components/KassenSystem.vue'
import MobileApp from '@/components/MobileApp.vue'
import OnlineShops from '@/components/OnlineShops.vue'
import ContactUs from '@/components/ContactUs.vue'
import Footer from '@/components/Footer.vue'
import PosServicePopup from '@/components/PosServicePopup.vue'
import AskButton from '@/components/Piece/AskButton.vue'
import BackToTop from '@/components/Piece/BackToTop.vue'
import BottomLogo from '@/components/Piece/BottomLogo.vue'

export default {
  name: 'home',
  components: {
    TopHead,
    AboutUs,
    KassenSystem,
    MobileApp,
    OnlineShops,
    ContactUs,
    Footer,
    AskButton,
    BackToTop,
    BottomLogo,
    PosServicePopup
  }
}
</script>
<style scoped>

</style>
