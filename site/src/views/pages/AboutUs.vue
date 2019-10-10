<template>
  <section>
    <header>
      <h1>AboutUs</h1>
    </header>
    <HelloWorld/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/views/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class AboutUs extends Vue {}
</script>

<style scoped lang="scss"></style>