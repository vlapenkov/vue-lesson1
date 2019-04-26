<template>
  <div class="home">

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
     <pre>{{ test }}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  props: { test1: String },
  data: ()=> ({
     test: process.env
  }),
  components: {
    HelloWorld
  }
};
</script>
