<template>
  <div class="home">
    <div>{{ test }}</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  props: { test1: String },
  data: function() {
    return { test: 123 };
  },
  components: {
    HelloWorld
  }
};
</script>
