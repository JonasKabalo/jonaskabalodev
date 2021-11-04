<template>
  <div id="main-container">
    <Navigation />
    <transition name="home">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
export default {
  layout: 'Main',
  transition: {
    name: 'home',
    mode: 'out-in'
  }
}
</script>

<style>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
