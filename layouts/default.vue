<template>
  <div class="text-center">
    <NuxtLink to="/">
      Home
    </NuxtLink>-
    <NuxtLink to="/about">
      About
    </NuxtLink>
    <transition name="home">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
export default {
  layout: 'Header',
  transition: 'home'
}
</script>

<style>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
