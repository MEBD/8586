<template>
  <section class="contact">
    <div>
      <div class="content">
        <ul>
          <li class="contact-item" v-for="item in $t.contact.list" :key="item.place">
            <h2 class="h1">{{item.place}}</h2>
            <p class="subtitle">
              <a class="link" :href="'tel:'+item.phone" target="_blank">
                <span>{{item.phone}}</span>
              </a>
              |
              <a class="link" :href="'mailto:'+item.email" target="_blank">
                <span>{{item.email}}</span>
              </a>
            </p>
          </li>
        </ul>
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
export default class Contact extends Vue {
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
    const { un } = this.$refs;
    const tl = new TimelineLite({ onComplete: done });
    const ease = Power4.easeOut;
    tl.to(document.documentElement, 0, { scrollTo: 0 }, 0.0);
    this.$el.querySelectorAll(".contact-item").forEach((item, i): void => {
      const t = item.querySelector(".h1") as HTMLElement;
      const st = item.querySelector(".subtitle") as HTMLElement;
      tl.from(t, 0.45, { x: 50, opacity: 0, ease: ease }, i * 0.1);
      tl.from(st, 0.45, { x: 50, opacity: 0, ease: ease }, i * 0.1 + 0.05);
    });
    tl.from(un, 0.45, { width: "80vw", opacity: 0, ease: ease }, 0.25);
  }

  /**
   *transitionOut
   */
  public transitionOut(done: any) {
    const { un } = this.$refs;
    const tl = new TimelineLite({ onComplete: done });
    const ease = Power4.easeIn;
    this.$el.querySelectorAll(".contact-item").forEach((item, i): void => {
      const t = item.querySelector(".h1") as HTMLElement;
      const st = item.querySelector(".subtitle") as HTMLElement;
      tl.to(t, 0.47, { x: -50, opacity: 0, ease: ease }, i * 0.1);
      tl.to(st, 0.47, { x: -50, opacity: 0, ease: ease }, i * 0.1 + 0.05);
    });
    tl.to(un, 0.75, { width: "0vw", opacity: 0, ease: ease }, 0.25);
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/utilities/variables";

.contact {
  .h1 {
    margin-bottom: $gap * 0.5;

    @media (min-width: 768px) {
      margin-bottom: $gap;
    }
  }

  .subtitle {
    color: $white;
    margin-bottom: $gap * 2;

    .link {
      color: $black;
    }

    @media (min-width: 768px) {
      color: $black;
      margin-bottom: $gap * 4;
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    padding: $gap * 0.75 $gap * 0.75 0 $gap * 0.75;

    @media (min-width: 768px) {
      padding: $gap * 2 $gap * 2 0 $gap * 2;
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}
</style>