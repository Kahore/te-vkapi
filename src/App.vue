<template>
  <div id="app">
    <VKData/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    VKData: () => import('./components/VKData.vue')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
