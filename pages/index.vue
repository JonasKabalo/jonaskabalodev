<template>
  <div class="home-container">
    <div class="text-center">
      <h1><WelcomeWord /></h1>
      <!-- p>👋 Hi! My name is Jonas</p -->
      <div class="card-presentation">
        <div class="card-main">
          <h4>The true sign of intelligence is not knowledge but imagination.</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'Home'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');

.home-container {
  font-family: 'Libre Baskerville', serif;
  h1 {
    font-size: $size_r_11;
    margin: $margin_50_50;
  }
  .card-presentation {
    margin: $margin_10_10;
  }
}
</style>
