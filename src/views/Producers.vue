<template>
  <section class="m-t-150">
    <h1>Компонент поиска по производителям</h1>
    {{ activePage }}
    <my-search v-model="filter" @input="()=>getProducers(true)"/>
    <my-select
      :value="countPerPage"
      @input="value => updateCount(value)"
      :countPerPageArray="[5, 10, 50, 100]"
    ></my-select>
    <my-paginator
      :total="total"
      :countPerPage="countPerPage"
      :activePage="activePage"
      @input="value=>updateActivePage(value)"
    ></my-paginator>

    <div v-if="!isLoading">
      <producers-list :producers="producers" :total="total"/>
    </div>
    <div v-else-if="producers.length>0 " class="position-relative">
      <div class="position-absolute text-center" style="width:100%">
        <div class="position-relative spinner-border text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div style="opacity:0.5">
        <producers-list :producers="producers" :total="total"/>
      </div>
    </div>
    <div v-else>
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </section>
</template>

<script>
import ProducersList from "@/components/ProducersList.vue";
import MySearch from "@/components/MySearch.vue";
import MySelect from "@/components/MySelect.vue";
import MyPaginator from "@/components/MyPaginator.vue";
//import {constants} from "@/myConstants";
import { default as constants } from "@/myConstants";

import axios from "axios";

const filterObj = {
  searchText: "",
  active: false
};
export default {
  components: { ProducersList, MySearch, MySelect, MyPaginator },
  data() {
    return {
      producers: [],
      title: "Список производителей с сервера",
      total: 0,
      countPerPage: 10,
      activePage: constants.ACTIVE_PAGE,
      filter: filterObj,
      //  searchText:'',
      isLoading: true
    };
  },
  created() {
    console.log(this.filter);
    this.getProducers();
  },
  methods: {
    getProducers(filterUpdated) {
      if (filterUpdated) this.activePage = 1;
      // console.log("filterUpdated",filterUpdated);
      this.isLoading = true;
      let url = `${constants.URL_PREFIX_TERMINAL}/api/productsforautocomplete/producers`;

      axios
        .get(url, {
          params: {
            page: this.activePage,
            countperpage: this.countPerPage,
            q: this.filter.searchText
          }
        })
        .then(response => {
          this.producers = response.data.result;
          this.total = response.data.total;
          this.isLoading = false;
        })
        .catch(error => {
          console.log(error);
          this.isLoading = false;
        });
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

<style>
.m-t-150 {
  margin-top: 150px;
}
</style>
