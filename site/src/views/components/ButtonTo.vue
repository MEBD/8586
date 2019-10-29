<template>
  <router-link class="button-to" :to="to">
    <span>{{text}}</span>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ButtonTo extends Vue {
  @Prop() to?:string;
  @Prop() text?:string;
}
</script>

<style lang="scss">
@import "../../styles/main.scss";
</style>
