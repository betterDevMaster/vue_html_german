<template>
  <div id="preloader">
      <div id="status">
          <div class="spinner">
              <div class="rect1"></div>
              <div class="rect2"></div>
              <div class="rect3"></div>
              <div class="rect4"></div>
              <div class="rect5"></div>
          </div><!--end spinner-->
      </div><!--end status-->
  </div><!--end preloader-->
</template>

<script>
export default {
  name: 'Preeloader',
  props: {
    msg: String
  }
}
</script>
