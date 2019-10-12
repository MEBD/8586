<template>
  <section class="contact">
    <header>
      <h1>Contact</h1>
    </header>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Contact extends Vue {
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
    done();
  }

  /**
   * transitionOut
   */
  public transitionOut(done: any) {
    done();
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/utilities/variables";

.contact {
  header {
    padding: $gap * 4 $gap * 2;
  }
}
</style>