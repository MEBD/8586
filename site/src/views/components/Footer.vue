<template>
  <footer class="footer">
    <div class="brand">
      <p>8586©</p>
    </div>
    <div class="contact">
      <ul>
        <li class="contact-item" v-for="item in $t.contact.list" :key="item.place">
          <h5 class="h6">{{item.place}}</h5>
          <a class="link" :href="'tel:'+item.phone" target="_blank">
            <span>{{item.phone}}</span>
          </a>
          <a class="link" :href="'mailto:'+item.email" target="_blank">
            <span>{{item.email}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="social">
      <ul>
        <li>
          <p>Instagram</p>
        </li>
        <li>
          <p>Facebook</p>
        </li>
        <li>
          <p>Dribbble</p>
        </li>
        <li>
          <p>Behance</p>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
@import "../../styles/main.scss";

.footer {
  padding: $gap $gap * 0.75;
  background: $black;
  color: $white;

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
      padding: $gap*1.5 0 0 0;

      @media (min-width: 768px) {
        padding: 0 $gap * 4 0 0;

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
    }
  }

  .social {
    flex: 1;
    display: flex;
    justify-content: center;
    padding-top: $gap;

    @media (min-width: 768px) {
      padding-top: 0;
      justify-content: flex-end;
    }

    li {
      padding: 0 $gap * 0.5;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }
}
</style>
