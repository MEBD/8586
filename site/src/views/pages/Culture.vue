<template>
  <section class="culture">
    <div>
      <div class="content">
        <ul>
          <li v-for="item in $t.culture.list" :key="item.title">
            <h2 class="h1">{{item.title}}</h2>
            <p class="subtitle">{{item.subtitle}}</p>
          </li>
        </ul>
      </div>
      <div class="cta-container">
        <router-link class="button primary" to="/about-us">
          <span>{{$t.culture.cta}}</span>
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
export default class Culture extends Vue {
  /**
   * mounted
   */
  public mounted(): void {
    this.$store.state.ui.color = "white";
    this.$store.state.ui.background = "black";
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
    margin-bottom: $gap;
  }

  .subtitle {
    margin-bottom: $gap*4;
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