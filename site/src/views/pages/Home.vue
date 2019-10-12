<template>
  <section class="home">
    <header>
      <h1 ref="title">
        {{$t.home.title}} .
        <strong>
          <span ref="keyword">{{$t.home.title_keywords[0]}}</span>
        </strong>
      </h1>
      <p ref="subtitle" class="subtitle">{{$t.home.subtitle}}</p>
      <div ref="cta" class="cta-container">
        <router-link class="button primary" to="/services">
          <span>{{$t.home.cta}}</span>
        </router-link>
      </div>
    </header>
    <span ref="underscore" class="underscore"></span>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TweenLite, TimelineLite } from "gsap";

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
  }

  /**
   * transitionIn
   */
  public transitionIn(done: any) {
    const tl = new TimelineLite();
    const { title, subtitle, keyword, cta, underscore } = this.$refs;

    tl.from(title, 0.35, { x: 50, opacity: 0 }, 0.0);
    tl.from(subtitle, 0.35, { x: 50, opacity: 0 }, 0.05);
    tl.from(cta, 0.35, { x: 50, opacity: 0 }, 0.1);
    tl.from(
      underscore,
      0.35,
      {
        width: "80vw",
        transformOrigin: "0% 0%",
        opacity: 0,
        onComplete: () => {
          done();
          this.tweenText();
        }
      },
      0.15
    );
  }

  /**
   * transitionIn
   */
  public transitionOut(done: any) {
    // Tween in
    const { title, subtitle, cta, underscore } = this.$refs;
    const tl = new TimelineLite();

    tl.to(title, 0.35, { x: -50, opacity: 0 }, 0.0);
    tl.to(subtitle, 0.35, { x: -50, opacity: 0 }, 0.05);
    tl.to(cta, 0.35, { x: -50, opacity: 0 }, 0.1);
    tl.to(
      underscore,
      0.35,
      { width: "0vw", transformOrigin: "0% 0%", opacity: 0, onComplete: done },
      0.15
    );
  }

  public tweenText(): void {
    const { keyword } = this.$refs;
    if (keyword) {
      this.index += 1;
      if (this.index === (this as any).$t.home.title_keywords.length) {
        this.index = 0;
      }
      const text = (this as any).$t.home.title_keywords[this.index];
      TweenLite.to(keyword, 0.5, {
        text: text,
        delay: 1,
        onComplete: this.tweenText
      });
    }
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
    }
  }
}
</style>