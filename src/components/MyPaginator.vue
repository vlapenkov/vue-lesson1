<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">

      <li
        v-for="(item, index) in numOfButtons"
        :key="item.index"
        class="page-item"
      >
        <a
          class="page-link active"
          href="javascript:void(0);"
          @click="setPage(index + 1)"
          >{{ index + 1 }}</a
        >
      </li>

    </ul>
  </nav>
</template>

<script>
export default {
  name: "my-paginator",
  props: {
    total: {
      type: Number,
      required: true
    },
    countPerPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    numOfButtons: function() {
      return Math.ceil(this.total / this.countPerPage);
    }
  },
  methods: {
    setPage: function(pageNumber) {
      this.$emit("input", pageNumber);
    }
  }
};
</script>

<style></style>
