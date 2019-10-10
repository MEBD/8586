<template>
  <section>
    <header>
      <h1>Services</h1>
    </header>
    <HelloWorld />
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
export default class Services extends Vue {}
</script>
