<template>
  <footer class="footer">
    <div class="brand">
      <p>©2019</p>
    </div>
    <div class="contact">
      <ul>
        <li class="contact-item" v-for="item in $t.contact.list" :key="item.place">
          <h5 class="h6">{{item.place}}</h5>
          <a class="link default" :href="'tel:'+item.phone" target="_blank">
            <span>{{item.phone}}</span>
          </a>
          <a class="link default" :href="'mailto:'+item.email" target="_blank">
            <span>{{item.email}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="languages">
      <ul>
        <li>
          <a class="link default" href="#" @click="changeLanguage($event, 'en')">en/</a>
        </li>
        <li>
          <a class="link default" href="#" @click="changeLanguage($event, 'es')">es/</a>
        </li>
        <li>
          <a class="link default" href="#" @click="changeLanguage($event, 'fr')">fr/</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  /**
   * changeLanguage
   */
  public changeLanguage($event: MouseEvent, lang: string): void {
    this.$store.state.locale.current = lang;

    // Storage
    if (typeof Storage !== "undefined") {
      localStorage.setItem("current_lang", lang);
    }

    //
    $event.preventDefault();
    $event.stopPropagation();
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
@import "../../styles/main.scss";

.footer {
  padding: $gap * 1.5 $gap * 0.75;
  background: $black;
  color: $white;
  border-top: 1px solid rgba($color: $white, $alpha: 0.25);

  @media (min-width: 768px) {
    display: flex;
    padding: $gap * 2;
  }

  ul {
    display: block;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  .brand {
    font-size: $font-size-5;
  }

  .contact {
    li {
      padding: $gap * 1.5 0 0 0;

      @media (min-width: 768px) {
        padding: 0 $gap * 2 0 0;

        &:first-child {
          padding-left: $gap * 4;
        }
      }
    }

    h5 {
      margin-bottom: $gap * 0.5;

      @media (min-width: 768px) {
        margin-bottom: $gap;
      }
    }

    .link {
      display: block;

      &::before {
        background: rgba($color: $white, $alpha: 0.25);
      }
    }
  }

  .languages {
    flex: 1;
    display: flex;
    padding-top: $gap;

    @media (min-width: 768px) {
      padding-top: 0;
      justify-content: flex-end;
    }

    ul {
      display: flex;

      @media (min-width: 768px) {
        display: block;
      }
    }

    li {
      padding: 0;
      margin: 0 $gap 0 0;

      @media (min-width: 768px) {
        margin: 0;
      }
    }
  }
}
</style>
