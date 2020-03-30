<template>
  <div class="top-head">
    <nav class="navbar navbar-expand-lg navbar-custom navbar-light fixed-top sticky">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="images/resto/logo-light.png" class="l-dark" style="height:50px" alt />
          <img src="images/resto/logo-light.png" class="l-light" style="height:50px" alt />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="mdi mdi-menu"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav nav-justified">
            <li class="nav-item">
              <router-link to="/#aboutus" class="nav-link">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/#kassensystem" class="nav-link">Kassensystem</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/#mobileapp" class="nav-link">Mobile App</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/#onlineshops" class="nav-link">Online Shops</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/#contact" class="nav-link">Kontak</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/shop" class="nav-link">Category</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link to="/#cartshow" id="cart" style="display: block;" data-toggle="dropdown">
                <i class="fa fa-shopping-cart"></i> Cart
                <span class="badge">3</span>
              </router-link>
              <ul class="dropdown-menu" style="height: 490px;">
                <div class="wrap cf">
                  <div class="heading cf">
                    <h4 style="margin-top: -12px;margin-bottom: 0em;">My Cart</h4>
                    <a
                      href="#"
                      class="continue"
                      style="background-color: #82ca9c;padding: 5px 9px;margin-top: -37px;"
                    >Continue Shopping</a>
                  </div>
                  <div class="cart">
                    <ul class="cartWrap" style="padding-right: 15px;">
                      <Cart />
                      <Cart />
                      <Cart />
                      <Cart />
                      <!--<li class="items even">Item 2</li>-->
                    </ul>
                  </div>

                  <div class="promoCode">
                    <label for="promo">Have A Promo Code?</label>
                    <input type="text" name="promo" placholder="Enter Code" />
                    <a
                      href="#"
                      class="btn"
                      style="font-size: 20px;background-color: #82ca9c;padding: 2px 0px;"
                    ></a>
                  </div>

                  <div class="subtotal cf">
                    <ul>
                      <li class="totalRow">
                        <span class="label">Subtotal</span>
                        <span class="value">$35.00</span>
                      </li>

                      <li class="totalRow">
                        <span class="label">Shipping</span>
                        <span class="value">$5.00</span>
                      </li>

                      <li class="totalRow">
                        <span class="label">Tax</span>
                        <span class="value">$4.00</span>
                      </li>
                      <li class="totalRow final">
                        <span class="label">Total</span>
                        <span class="value">$44.00</span>
                      </li>
                      <li class="totalRow">
                        <a
                          href="#"
                          class="btn continue"
                          style="background-color: #82ca9c;padding: 2px 7px"
                        >Checkout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Cart from '@/components/Piece/Cart.vue'
export default {
  name: 'TopHead',
  components: {
    Cart
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
