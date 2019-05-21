<template>
  <div>
    <input
      type="file"
      class="d-none"
      accept="image/*"
      ref="input"
      @change="previewImage($event)"
    >
    <button
      class="btn btn-primary"
      @click="selectFile"
    ><slot></slot></button>
  </div>
</template>
<script>
  export default {
    name: 'yst-input-file',
    methods: {
      selectFile() {
        let input = this.$refs.input;
        input.click();
      },
      previewImage: function (event) {
        let el=this;
        let input = event.target;
        let info = {
          object: null,
          url: null,
          source: null,
          name: null
        };
        if (input.files && input.files[0]) {
          info.object = input.files[0];
          let URL = window.URL || window.webkitURL
          if (URL && URL.createObjectURL) {
            info.url = URL.createObjectURL(input.files[0])
          }
          let reader = new FileReader();
          reader.onload = (e) => {
            info.source = e.target.result;
            info.name = info.object.name;
             el.$emit('input', info.source);
          };
          reader.readAsDataURL(input.files[0]);
        }

      }
    }
  }
</script>
