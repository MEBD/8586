<template>
  <section class="services">
    <div>
      <header>
        <h1 ref="title" class="h2">{{$t.services.title}}</h1>
        <p ref="subtitle" class="subtitle">{{$t.services.subtitle}}</p>
      </header>
      <div class="content">
        <article>
          <span ref="unOne" class="underscore"></span>
          <h1 ref="serOne" class="h3">{{$t.services.strategy.title}}</h1>
          <ul ref="listOne">
            <li v-for="item in $t.services.strategy.list" :key="item">{{item}}</li>
          </ul>
        </article>
        <article>
          <span ref="unTwo" class="underscore"></span>
          <h1 ref="serTwo" class="h3">{{$t.services.creative.title}}</h1>
          <ul ref="listTwo">
            <li v-for="item in $t.services.creative.list" :key="item">{{item}}</li>
          </ul>
        </article>
        <article>
          <span ref="unThree" class="underscore"></span>
          <h1 ref="serThree" class="h3">{{$t.services.technology.title}}</h1>
          <ul ref="listThree">
            <li v-for="item in $t.services.technology.list" :key="item">{{item}}</li>
          </ul>
        </article>
      </div>
      <div ref="cta" class="cta-container">
        <router-link class="button black" to="/about-us">
          <span>{{$t.services.cta}}</span>
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
export default class Services extends Vue {
  /**
   *mounted
   */
  public mounted(): void {
    this.$store.state.ui.color = "black";
    this.$store.state.ui.background = "white";
  }

  /**
   *transitionIn
   */
  public transitionIn(done: any) {
    const {
      title,
      subtitle,
      //
      unOne,
      unTwo,
      unThree,
      //
      serOne,
      serTwo,
      serThree,
      //
      listOne,
      listTwo,
      listThree,
      //
      cta,
      un
    } = this.$refs;
    //
    const tl = new TimelineLite({ onComplete: done });
    const ease = Power4.easeOut;
    tl.to(document.documentElement, 0, { scrollTo: 0 }, 0.0);
    tl.from(title, 0.45, { x: 50, opacity: 0, ease: ease }, 0.0);
    tl.from(subtitle, 0.45, { x: 50, opacity: 0, ease: ease }, 0.05);
    tl.from(unOne, 0.45, { x: 50, opacity: 0, ease: ease }, 0.15);
    tl.from(unTwo, 0.45, { x: 50, opacity: 0, ease: ease }, 0.2);
    tl.from(unThree, 0.45, { x: 50, opacity: 0, ease: ease }, 0.25);
    tl.from(serOne, 0.45, { x: 50, opacity: 0, ease: ease }, 0.2);
    tl.from(serTwo, 0.45, { x: 50, opacity: 0, ease: ease }, 0.25);
    tl.from(serThree, 0.45, { x: 50, opacity: 0, ease: ease }, 0.3);
    tl.from(listOne, 0.45, { x: 50, opacity: 0, ease: ease }, 0.25);
    tl.from(listTwo, 0.45, { x: 50, opacity: 0, ease: ease }, 0.3);
    tl.from(listThree, 0.45, { x: 50, opacity: 0, ease: ease }, 0.35);
    tl.from(cta, 0.45, { x: 50, opacity: 0, ease: ease }, 0.4);
    tl.from(un, 0.45, { width: "80vw", opacity: 0, ease: ease }, 0.45);
  }

  /**
   *transitionOut
   */
  public transitionOut(done: any) {
    const {
      title,
      subtitle,
      //
      unOne,
      unTwo,
      unThree,
      //
      serOne,
      serTwo,
      serThree,
      //
      listOne,
      listTwo,
      listThree,
      //
      cta,
      un
    } = this.$refs;
    //
    const tl = new TimelineLite({ onComplete: done });
    const ease = Power4.easeIn;
    tl.to(title, 0.75, { x: -50, opacity: 0, ease: ease }, 0.0);
    tl.to(subtitle, 0.75, { x: -50, opacity: 0, ease: ease }, 0.05);
    tl.to(unOne, 0.75, { x: -50, opacity: 0, ease: ease }, 0.15);
    tl.to(unTwo, 0.75, { x: -50, opacity: 0, ease: ease }, 0.2);
    tl.to(unThree, 0.75, { x: -50, opacity: 0, ease: ease }, 0.25);
    tl.to(serOne, 0.75, { x: -50, opacity: 0, ease: ease }, 0.2);
    tl.to(serTwo, 0.75, { x: -50, opacity: 0, ease: ease }, 0.25);
    tl.to(serThree, 0.75, { x: -50, opacity: 0, ease: ease }, 0.3);
    tl.to(listOne, 0.75, { x: -50, opacity: 0, ease: ease }, 0.25);
    tl.to(listTwo, 0.75, { x: -50, opacity: 0, ease: ease }, 0.3);
    tl.to(listThree, 0.75, { x: -50, opacity: 0, ease: ease }, 0.35);
    tl.to(cta, 0.75, { x: -50, opacity: 0, ease: ease }, 0.4);
    tl.to(un, 0.75, { width: "0vw", opacity: 0, ease: ease }, 0.45);
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/utilities/variables";

.services {
  header {
    width: 100%;
    padding: 0 $gap * 0.75 $gap;

    @media (min-width: 768px) {
      padding: $gap * 2;
    }
  }

  .h2 {
    margin-bottom: $gap * 0.5;

    @media (min-width: 768px) {
      margin-bottom: $gap;
    }
  }

  .content {
    padding: $gap $gap * 0.75 0;

    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      padding: 0 $gap $gap * 4 $gap * 2;
    }

    article {
      padding: 0 0 $gap * 2 0;

      @media (min-width: 768px) {
        min-width: $gap * 10;
        padding: 0 $gap 0 0;
      }
    }

    .underscore {
      position: relative;
      left: initial;
      bottom: initial;
      width: 100%;
      margin-bottom: $gap * 0.75;

      @media (min-width: 768px) {
        margin-bottom: $gap;
      }
    }

    .h3 {
      margin-bottom: $gap * 0.25;

      @media (min-width: 768px) {
        margin-bottom: $gap;
      }
    }

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    li {
      padding: $gap * 0.1 0;
    }
  }
}
</style>