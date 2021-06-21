<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  mounted () {
  }
}

</script>



<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
