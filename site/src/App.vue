<template>
  <main id="app" :class="colorClass">
    <Nav />
    <transition mode="out-in" @appear="transitionIn" @enter="transitionIn" @leave="transitionOut">
      <router-view />
    </transition>
    <Footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/views/components/Nav.vue"; // @ is an alias to /src
import Footer from "@/views/components/Footer.vue"; // @ is an alias to /src

@Component({
  components: {
    Nav,
    Footer
  }
})
export default class Home extends Vue {
  /**
   *transitionIn
   */
  public transitionIn(el: any, done: any): void {
    this.$children.forEach((page: any) => {
      if (page.$el === el) {
        page.transitionIn(done);
      }
    });
  }

  /**
   *transitionOut
   */
  public transitionOut(el: any, done: any): void {
    this.$children.forEach((page: any) => {
      if (page.$el === el) {
        page.transitionOut(done);
      }
    });
  }

  /**
   *colorClass
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