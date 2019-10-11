<template>
  <section class="home">
    <header>
      <h1>
        {{$t.home.title}} .
        <strong>
          <span v-for="(key, i) in $t.home.title_keywords" :key="key" :class="{show:(index === i)}">{{key}}</span>
        </strong>
      </h1>
      <p class="subtitle">{{$t.home.subtitle}}</p>
      <router-link class="button primary" to="/services">
        <span>{{$t.home.cta}}</span>
      </router-link>
    </header>
    <span class="underscore"></span>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  public index: number = 0;
  public timer: any;

  /**
   * mounted
   */
  public mounted(): void {
    this.$store.state.ui.color = "white";
    this.$store.state.ui.background = "black";

    this.timer = window.setInterval(() => {
      this.index += 1;
      if (this.index === (this as any).$t.home.title_keywords.length) {
        this.index = 0;
      }
    }, 150);
  }

  /**
   * beforeDestroy
   */
  public beforeDestroy(): void {
    window.clearInterval(this.timer);
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/utilities/variables";

@keyframes title {
  0% {
    transform: scale(1, 1) translate(100%, 0%);
  }

  5% {
    transform: scale(1, 1) translate(0%, 0%);
  }

  95% {
    transform: scale(1, 1) translate(0%, 0%);
  }

  100% {
    transform: scale(1, 1) translate(-100%, 0%);
  }
}

.home {
  header {
    padding: $gap * 4 $gap * 2;
  }

  h1 {
    display: block;
    margin-bottom: $gap;

    strong {
      color: $primary;

      span {
        display: none;

        &.show {
          display: initial;
        }
      }
    }
  }
}
</style>