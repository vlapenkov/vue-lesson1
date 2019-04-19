<template>
  <div>
    <label>Кол-во эл-тов</label>
    <select v-model="countPerPageValue">
      <option v-for="option in countPerPageArray" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "my-select",
  data: function() {
    return {
      countPerPageValue: 10
    };
  },

  props: {
    value: {
      type: Number,
      required: true
    },
    countPerPageArray: {
      type: Array,
      required: true
    }
  },
  watch: {
    countPerPageValue: function() {
      this.$emit("input", this.countPerPageValue);
    }
  },
  created: function() {
    this.countPerPageValue = this.value;
  }
};
</script>
