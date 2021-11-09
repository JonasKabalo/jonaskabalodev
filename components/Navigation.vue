<template>
  <div id="navigation-container">
    <NuxtLink to="/">
      Home
    </NuxtLink>-
    <NuxtLink to="/contact">
      Contact
    </NuxtLink>-
    <NuxtLink to="">
      Log in
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'Navigation',
  fetch () {
    // $Root =>
    // console.log(process.cwd())
  }
}
</script>

<style lang="scss">
#navigation-container {
  text-align: right;
  margin: 10px 20px;
  a {
    color: black;
    text-decoration: none;
  }
}
</style>
