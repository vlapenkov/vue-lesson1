<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>producerId</th>
          <th>name</th>
          <th>active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in producers" :key="item.producerId">
          <td>
            <router-link :to="'/edit/' + item.producerId">
              # {{ item.producerId }}
            </router-link>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.active }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="3">Всего производителей: {{ total }}</th>
        </tr>
      </tfoot>
    </table>
    <my-select
      :value="countPerPage"
      @input="value => $emit('count', value)"
      :countPerPageArray="[5, 10, 50, 100]"
    ></my-select>
    <my-paginator
      :total="total"
      :countPerPage="countPerPage"
      :activePage="activePage"
      @input="value => $emit('input', value)"
    ></my-paginator>
  </div>
</template>

<script>
import MyPaginator from "@/components/MyPaginator.vue";
import MySelect from "@/components/MySelect.vue";

export default {
  name: "producers-list",
  components: { MyPaginator, MySelect },
  props: {
    producers: {
      type: Array,
      required: true
    },
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
  }
};
</script>
