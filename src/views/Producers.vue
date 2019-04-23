<template>
  <section>
    <h1>{{ title }}</h1>
    <div v-if="producers.length">
      <producers-list
        :producers="producers"
        :total="total"
        :activePage="activePage"
        :countPerPage="countPerPage"
        @input="updateActivePage"
        @count="updateCount"
      />
    </div>
    <div v-else>
      Loading...
    </div>
  </section>
</template>

<script>
import ProducersList from "@/components/ProducersList.vue";

import axios from "axios";

export default {
  components: { ProducersList },
  data() {
    return {
      producers: [],
      title: "Список производителей с сервера",
      total: 0,
      countPerPage: 10,
      activePage: 1
    };
  },
  created: function() {
    this.getProducers();
  },
  methods: {
    getProducers: function() {
      axios
        .get(
          `https://localhost:44302/api/ProductsForAutocomplete/producers?page=${
            this.activePage
          }&countperpage=${this.countPerPage}`
        )
        .then(response => {
          this.producers = response.data.result;
          this.total = response.data.total;
        })
        .catch(error => console.log(error));
    },
    updateCount(count) {
      this.countPerPage = count;
      this.getProducers();
    },
    updateActivePage(page) {
      this.activePage = page;
      this.getProducers();
    }
  }
};
</script>

<style></style>
