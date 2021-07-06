<template>
  <div>
    <h1 class="text-center">
      Home
      {{ dd }}
    </h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    dd: 'test'
  }),
  mounted () {
    console.log('here')
    this.test()
  },
  methods: {
    test () {
      console.log('hreeeeee')
    }
  }
}
</script>

<style>

</style>
