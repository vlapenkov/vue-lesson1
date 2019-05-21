<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <pre>{{ test }}</pre>
    <div>
    <yst-input-file @input="setImagePreview($event)">Прикрепить картинку</yst-input-file>
    </div>
    <img :src="pathToImage"/>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import YstInputFile from "@/components/YSTInputFile.vue"

export default {
  name: "home",
  props: { test1: String },
  data: () => ({
    test: process.env,
    pathToImage:''
  }),
  components: {
    HelloWorld,
    YstInputFile
  },
  methods: {
    setImagePreview(event){
      console.log(event);

      this.pathToImage=event;

    }
  }
};
</script>
