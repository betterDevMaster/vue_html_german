<template>
  <div>
    <div class='router'>
      <router-link to="/">Home</router-link> |
      <router-link to="/Shop">Shop</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  watch: {
    $route (to, from) {
      // console.log(to, from)
    }
  },
  updated () {
    window.urlChanged()
  }
}
</script>

<style lang="scss">

.router {
  line-height: 10px;
}
</style>
