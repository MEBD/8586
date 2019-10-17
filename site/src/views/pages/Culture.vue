<template>
  <section class="culture">
    <div>
      <div class="content">
        <ul>
          <li class="culture-item" v-for="item in $t.culture.list" :key="item.title">
            <h2 class="h1">{{item.title}}</h2>
            <p class="subtitle">{{item.subtitle}}</p>
          </li>
        </ul>
      </div>
      <div ref="cta" class="cta-container">
        <router-link class="button primary" to="/contact">
          <span>{{$t.culture.cta}}</span>
        </router-link>
      </div>
    </div>
    <span ref="un" class="underscore"></span>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TimelineLite, Power4 } from "gsap";

@Component({
  components: {}
})
export default class Culture extends Vue {
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
    const { cta, un } = this.$refs;
    const tl = new TimelineLite({ onComplete: done });
    const ease = Power4.easeOut;
    tl.to(document.documentElement, 0, { scrollTo: 0 }, 0.0);
    this.$el.querySelectorAll(".culture-item").forEach((item, i): void => {
      const t = item.querySelector(".h1") as HTMLElement;
      const st = item.querySelector(".subtitle") as HTMLElement;
      tl.from(t, 0.45, { x: 50, opacity: 0, ease: ease }, i * 0.1);
      tl.from(st, 0.45, { x: 50, opacity: 0, ease: ease }, i * 0.1 + 0.05);
    });
    tl.from(cta, 0.45, { x: 50, opacity: 0, ease: ease }, 0.4);
    tl.from(un, 0.45, { width: "80vw", opacity: 0, ease: ease }, 0.45);
  }

  /**
   * transitionOut
   */
  public transitionOut(done: any) {
    const { cta, un } = this.$refs;
    const tl = new TimelineLite({ onComplete: done });
    const ease = Power4.easeIn;
    this.$el.querySelectorAll(".culture-item").forEach((item, i): void => {
      const t = item.querySelector(".h1") as HTMLElement;
      const st = item.querySelector(".subtitle") as HTMLElement;
      tl.to(t, 0.47, { x: -50, opacity: 0, ease: ease }, i * 0.1);
      tl.to(st, 0.47, { x: -50, opacity: 0, ease: ease }, i * 0.1 + 0.05);
    });
    tl.to(cta, 0.47, { x: -50, opacity: 0, ease: ease }, 0.4);
    tl.to(un, 0.75, { width: "0vw", opacity: 0, ease: ease }, 0.45);
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/utilities/variables";

.culture {
  header {
    padding: $gap * 2;
  }

  .h1 {
    margin-bottom: $gap*0.5;
  }

  .subtitle {
    margin-bottom: $gap * 4;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    padding: $gap * 2 $gap * 2 0 $gap * 2;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
  }

  .cta-container {
    padding: 0 $gap * 2;
  }
}
</style>