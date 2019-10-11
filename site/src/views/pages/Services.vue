<template>
  <section class="services">
    <div>
      <header>
        <h1 class="h2">{{$t.services.title}}</h1>
        <p class="subtitle">{{$t.services.subtitle}}</p>
      </header>
      <div class="content">
        <article>
          <span class="underscore"></span>
          <h1 class="h3">{{$t.services.strategy.title}}</h1>
          <ul>
            <li v-for="item in $t.services.strategy.list" :key="item">{{item}}</li>
          </ul>
        </article>
        <article>
          <span class="underscore"></span>
          <h1 class="h3">{{$t.services.creative.title}}</h1>
          <ul>
            <li v-for="item in $t.services.creative.list" :key="item">{{item}}</li>
          </ul>
        </article>
        <article>
          <span class="underscore"></span>
          <h1 class="h3">{{$t.services.technology.title}}</h1>
          <ul>
            <li v-for="item in $t.services.technology.list" :key="item">{{item}}</li>
          </ul>
        </article>
      </div>
      <div class="cta-container">
        <router-link class="button black" to="/about-us">
          <span>{{$t.services.cta}}</span>
        </router-link>
      </div>
    </div>
    <span class="underscore"></span>
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