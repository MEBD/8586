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

@Component({
  components: {
    Nav
  }
})
export default class Home extends Vue {
  /**
   * transitionIn
   */
  public transitionIn(el: any, done: any): void {
    this.$children.forEach((page: any) => {
      if (page.$el === el) {
        page.transitionIn(done);
      }
    });
  }

  /**
   * transitionOut
   */
  public transitionOut(el: any, done: any): void {
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

#app,
.nav {
  transition: background-color 1.5s $ease-out;
}

#app {
  &.color-white {
    color: $white;
    .nav a {
      color: $white;
    }
    .nav svg path {
      fill: $white;
    }
  }
  &.background-white {
    background: $white;
    .nav {
      background: $white;
    }
  }

  &.color-black {
    color: $black;
    .nav a {
      color: $black;
    }
    .nav svg path {
      fill: $black;
    }
  }
  &.background-black {
    background: $black;
    .nav {
      background: $black;
    }
  }

  &.color-primary {
    color: $primary;
    .nav a {
      color: $primary;
    }
    .nav svg path {
      fill: $primary;
    }
  }
  &.background-primary {
    background: $primary;
    .nav {
      background: $primary;
    }
  }
}
</style>