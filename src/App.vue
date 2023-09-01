<template>
  <div id="app">
    <Diagram/>
  </div>
</template>

<script>
import Diagram from './components/Diagram.vue'

export default {
  name: 'App',
  components: {
    Diagram
  }
}
</script>

<style>
  @import url(./styles/normalize.css);
  @import url(./styles/fonts.css);
</style>
