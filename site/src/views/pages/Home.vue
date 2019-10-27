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
      <div ref="cta">
        <router-link class="button primary" to="/services">
          <span>{{$t.home.cta}}</span>
        </router-link>
      </div>
    </header>
    <span ref="un" class="underscore"></span>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TweenLite, TimelineLite, Power4 } from "gsap";

@Component({
  components: {}
})
export default class Home extends Vue {
  public index: number = 0;
  public timer: any;

  /**
   *mounted
   */
  public mounted(): void {
    this.$store.state.ui.color = "white";
    this.$store.state.ui.background = "black";
  }

  //gsap.to(graph, { duration: 2.5 ease: CustomEase.create("custom", "M0,0 C0,0.692 0.003,0.798 0.112,0.888 0.248,1 0.504,1 1,1"), y: -500 });

  /**
   *transitionIn
   */
  public transitionIn(done: any) {
    const { title, subtitle, cta, un } = this.$refs;
    //
    const tl = new TimelineLite({
      onComplete: () => {
        done();
        this.tweenText();
      }
    });
    const ease = Power4.easeOut;
    tl.to(document.documentElement, 0, { scrollTo: 0 }, 0.0);
    tl.from(title, 0.45, { x: 50, opacity: 0, ease: ease }, 0.0);
    tl.from(subtitle, 0.45, { x: 50, opacity: 0, ease: ease }, 0.05);
    tl.from(cta, 0.45, { x: 50, opacity: 0, ease: ease }, 0.1);
    tl.from(un, 0.45, { width: "80vw", opacity: 0, ease: ease }, 0.15);
  }

  /**
   *transitionIn
   */
  public transitionOut(done: any) {
    // Tween in
    const { title, subtitle, cta, un } = this.$refs;
    //
    const tl = new TimelineLite({ onComplete: done });
    const ease = Power4.easeIn;
    tl.to(title, 0.75, { x: -50, opacity: 0, ease: ease }, 0.0);
    tl.to(subtitle, 0.75, { x: -50, opacity: 0, ease: ease }, 0.05);
    tl.to(cta, 0.75, { x: -50, opacity: 0, ease: ease }, 0.1);
    tl.to(un, 0.75, { width: "0vw", opacity: 0, ease: ease }, 0.15);
  }

  /**
   *tweenText
   */
  public tweenText(): void {
    const { keyword } = this.$refs;
    if (keyword) {
      this.index += 1;
      if (this.index === (this as any).$t.home.title_keywords.length) {
        this.index = 0;
      }
      //
      const text = (this as any).$t.home.title_keywords[this.index];
      TweenLite.to(keyword, 0.75, {
        text: text,
        delay: 1.5,
        onComplete: this.tweenText
      });
    }
  }

  /**
   *beforeDestroy
   */
  public beforeDestroy(): void {
    window.clearInterval(this.timer);
  }

  /**
   * $t
   */
  public get $t(): any {
    return this.$store.getters.translate;
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
    padding: 0 $gap * 0.75;

    @media (min-width: 768px) {
      padding: $gap * 4 $gap * 2;
    }
  }

  h1 {
    display: block;
    margin-bottom: $gap * 0.5;

    @media (min-width: 1280px) {
      margin-bottom: $gap;
    }

    strong {
      display: block;
      color: $primary;

      @media (min-width: 1280px) {
        display: initial;
      }
    }
  }

  .subtitle {
    margin-bottom: $gap * 2;

    @media (min-width: 768px) {
      margin-bottom: $gap * 4;
    }
  }
}
</style>