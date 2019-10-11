<template>
  <main id="app" :class="colorClass">
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
export default class Home extends Vue {
  /**
   * colorClass
   */
  public get colorClass(): string {
    return 'color-' + this.$store.state.ui.color + ' ' + 'background-' + this.$store.state.ui.background;
  }
}
</script>


<style lang="scss">
@import "./styles/main.scss";

#app {
  &.color-white {color: $white;}
  &.background-white {background: $white;}

  &.color-black {color: $black;}
  &.background-black {background: $black;}

  &.color-primary {color: $primary;}
  &.background-primary {background: $primary;}
}
</style>
