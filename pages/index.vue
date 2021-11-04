<template>
  <div class="home-container">
    <h1 class="text-center">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  layout: 'Home',
  data: () => ({
    title: 'Home'
  })
  /* head () {
    return {
      title: 'My awesome project',
      script: [
        {
          hid: 'stripe',
          src: 'http://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/js/TweenLite.min.js',
          defer: true,
          // Changed after script load
          callback: () => { this.isStripeLoaded = true }
        }
      ]
    }
  }, */
}
</script>

<style>

</style>
