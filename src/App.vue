<template>
  <div id="app">
    <ces-header/>
    <b-container>
      <router-view/>
    </b-container >

    <b-container class="fixed-bottom">
      <ces-footer/>
    </b-container >
  </div>
</template>

<script>
import CesHeader from '@/components/TheHeader.vue';
import CesFooter from '@/components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    CesHeader,
    CesFooter,
  },
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
