<template>
  <section class="services">
    <div>
      <header>
        <h1 ref="title" class="h2">{{$t.services.title}}</h1>
        <p ref="subtitle" class="subtitle">{{$t.services.subtitle}}</p>
      </header>
      <div class="content">
        <article>
          <span ref="underscoreOne" class="underscore"></span>
          <h1 ref="serviceOne" class="h3">{{$t.services.strategy.title}}</h1>
          <ul ref="serviceListOne">
            <li v-for="item in $t.services.strategy.list" :key="item">{{item}}</li>
          </ul>
        </article>
        <article>
          <span ref="underscoreTwo" class="underscore"></span>
          <h1 ref="serviceTwo" class="h3">{{$t.services.creative.title}}</h1>
          <ul ref="serviceListTwo">
            <li v-for="item in $t.services.creative.list" :key="item">{{item}}</li>
          </ul>
        </article>
        <article>
          <span ref="underscoreThree" class="underscore"></span>
          <h1 ref="serviceThree" class="h3">{{$t.services.technology.title}}</h1>
          <ul ref="serviceListThree">
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
    <span ref="underscore" class="underscore"></span>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Services extends Vue {
  /**
   * mounted
   */
  public mounted(): void {
    this.$store.state.ui.color = "black";
    this.$store.state.ui.background = "white";
  }

  /**
   * transitionIn
   */
  public transitionIn(done: any) {
    const tl = new TimelineLite();
    const {
      title,
      subtitle,

      underscoreOne,
      underscoreTwo,
      underscoreThree,

      serviceOne,
      serviceTwo,
      serviceThree,

      serviceListOne,
      serviceListTwo,
      serviceListThree,

      cta,
      underscore
    } = this.$refs;

    tl.from(title, 0.35, { x: 50, opacity: 0 }, 0.0);
    tl.from(subtitle, 0.35, { x: 50, opacity: 0 }, 0.05);
    tl.from(
      underscoreOne,
      0.35,
      { x: "100%", scaleX: 0, transformOrigin: "0% 0%", opacity: 0 },
      0.15
    );
    tl.from(
      underscoreTwo,
      0.35,
      { x: "100%", scaleX: 0, transformOrigin: "0% 0%", opacity: 0 },
      0.2
    );
    tl.from(
      underscoreThree,
      0.35,
      { x: "100%", scaleX: 0, transformOrigin: "0% 0%", opacity: 0 },
      0.25
    );
    tl.from(serviceOne, 0.35, { x: 50, opacity: 0 }, 0.2);
    tl.from(serviceTwo, 0.35, { x: 50, opacity: 0 }, 0.25);
    tl.from(serviceThree, 0.35, { x: 50, opacity: 0 }, 0.3);

    tl.from(serviceListOne, 0.35, { x: 50, opacity: 0 }, 0.25);
    tl.from(serviceListTwo, 0.35, { x: 50, opacity: 0 }, 0.3);
    tl.from(serviceListThree, 0.35, { x: 50, opacity: 0 }, 0.35);

    tl.from(cta, 0.35, { x: 50, opacity: 0 }, 0.4);
    tl.from(
      underscore,
      0.45,
      {
        width: "80vw",
        transformOrigin: "0% 0%",
        opacity: 0,
        onComplete: () => {
          done();
        }
      },
      0.45
    );
  }

  /**
   * transitionOut
   */
  public transitionOut(done: any) {
    const tl = new TimelineLite();
    const {
      title,
      subtitle,

      underscoreOne,
      underscoreTwo,
      underscoreThree,

      serviceOne,
      serviceTwo,
      serviceThree,

      serviceListOne,
      serviceListTwo,
      serviceListThree,

      cta,
      underscore
    } = this.$refs;

    tl.to(title, 0.35, { x: -50, opacity: 0 }, 0.0);
    tl.to(subtitle, 0.35, { x: -50, opacity: 0 }, 0.05);
    tl.to(
      underscoreOne,
      0.35,
      { x: "0%", scaleX: 0, transformOrigin: "0% 0%", opacity: 0 },
      0.15
    );
    tl.to(
      underscoreTwo,
      0.35,
      { x: "0%", scaleX: 0, transformOrigin: "0% 0%", opacity: 0 },
      0.2
    );
    tl.to(
      underscoreThree,
      0.35,
      { x: "0%", scaleX: 0, transformOrigin: "0% 0%", opacity: 0 },
      0.25
    );
    tl.to(serviceOne, 0.35, { x: -50, opacity: 0 }, 0.2);
    tl.to(serviceTwo, 0.35, { x: -50, opacity: 0 }, 0.25);
    tl.to(serviceThree, 0.35, { x: -50, opacity: 0 }, 0.3);

    tl.to(serviceListOne, 0.35, { x: -50, opacity: 0 }, 0.25);
    tl.to(serviceListTwo, 0.35, { x: -50, opacity: 0 }, 0.3);
    tl.to(serviceListThree, 0.35, { x: -50, opacity: 0 }, 0.35);

    tl.to(cta, 0.35, { x: -50, opacity: 0 }, 0.4);
    tl.to(
      underscore,
      0.45,
      { width: "0vw", transformOrigin: "0% 0%", opacity: 0, onComplete: done },
      0.45
    );
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/utilities/variables";

.services {
  header {
    padding: $gap * 2;
  }

  .h2 {
    margin-bottom: $gap;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    padding: $gap * 2 $gap $gap $gap * 2;

    article {
      min-width: $gap * 10;
      padding: 0 $gap $gap 0;
    }

    .underscore {
      position: relative;
      left: initial;
      bottom: initial;
      width: 100%;
      margin-bottom: $gap;
    }

    .h3 {
      margin-bottom: $gap;
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

  .cta-container {
    padding: 0 $gap * 2;
  }

  .underscore {
    background: $primary;
  }
}
</style>