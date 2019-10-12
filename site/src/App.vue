<template>
  <main id="app" :class="colorClass">
    <Nav />
    <transition mode="out-in" @appear="transitionIn" @enter="transitionIn" @leave="transitionOut">
      <router-view />
    </transition>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/views/components/Nav.vue"; // @ is an alias to /src

import "gsap/CSSPlugin";
import "gsap/TextPlugin";

@Component({
  components: {
    Nav
  }
})
export default class Home extends Vue {
  /**
   * transitionIn
   */
  public transitionIn(el, done): void {
    this.$children.forEach((page: any) => {
      if (page.$el === el) {
        page.transitionIn(done);
      }
    });
  }

  /**
   * transitionOut
   */
  public transitionOut(el, done): void {
    this.$children.forEach((page: any) => {
      if (page.$el === el) {
        page.transitionOut(done);
      }
    });
  }

  /**
   * colorClass
   */
  public get colorClass(): string {
    return (
      "color-" +
      this.$store.state.ui.color +
      " " +
      "background-" +
      this.$store.state.ui.background
    );
  }
}
</script>


<style lang="scss">
@import "./styles/main.scss";

#app {
  transition: background-color 1.5s $ease-out;

  &.color-white {
    color: $white;
  }
  &.background-white {
    background: $white;
  }

  &.color-black {
    color: $black;
  }
  &.background-black {
    background: $black;
  }

  &.color-primary {
    color: $primary;
  }
  &.background-primary {
    background: $primary;
  }
}
</style>
