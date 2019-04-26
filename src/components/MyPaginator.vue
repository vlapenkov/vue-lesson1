<template>
  <nav aria-label="Page navigation example">
    <div>Active page is {{ activePage }}</div>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: activePage === 1 }">
        <a href="#" class="page-link" aria-label="First" @click.prevent="setPage(1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="item of numOfButtons"
        :key="item"
        class="page-item"
        :class="{ active: activePage === item }"
        v-show="showCriteria(item)"
      >
        <a class="page-link" @click="setPage(item)">{{ item }}</a>
      </li>
      <li class="page-item" :class="{ disabled: activePage === numOfButtons }">
        <a href="#" class="page-link" aria-label="Last" @click.prevent="setPage(numOfButtons)">
          <span aria-hidden="true">&raquo;</span>
        </a>
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
    },
    activePage: {
      type: Number,
      required: true
    }
  },
  /*watch:{ countPerPage()
  {
    this.setPage(1);
  }}, */
  computed: {
    numOfButtons() {
      return Math.ceil(this.total / this.countPerPage);
    },
    showCriteria() {
      return number =>
        [1, this.numOfButtons, this.activePage, this.activePage - 1, this.activePage + 1].some(
          x => x == number
        );
    }
  },
  methods: {
    setPage(pageNumber) {
      //  this.activePage=pageNumber;
      console.log("active page ", pageNumber);
      this.$emit("input", pageNumber);
    },
    // Предыдущая страница
    prevPage() {
      const pageNum = this.activePage - 1;
      if (pageNum > 0) {
        this.setPage(pageNum);
      }
    },
    // Следующая страница
    nextPage() {
      const pageNum = this.activePage + 1;
      if (pageNum <= this.total) {
        this.setPage(pageNum);
      }
    }
  }
};
</script>
<style>
.page-item {
  cursor: pointer;
}
</style>
>
