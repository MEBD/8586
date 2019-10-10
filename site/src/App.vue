<template>
  <main id="app">
    <Nav/>
    <router-view/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/views/components/Nav.vue'; // @ is an alias to /src

@Component({
  components: {
    Nav,
  },
})
export default class Home extends Vue {}
</script>


<style lang="scss">
@import "./styles/main.scss";
</style>
