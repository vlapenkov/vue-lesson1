<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Активен</th>
          <th>Баланс</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Зарегистрирован</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <!--(selectedPage-1)*countPerPage,countPerPage)-->
        <tr v-for="item in listOnPage" :key="item.id">
          <td>
            <router-link :to="'/edit/' + item.id">
              # {{ item.id }}
            </router-link>
          </td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.isActive }}</td>
          <td>{{ item.balance }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.registered }}</td>
          <td><button @click="removeUser(item.id)">X</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="8">Всего пользователей: {{ total }}</th>
        </tr>
      </tfoot>
    </table>
    <my-select
      v-model="countPerPage"
      :countPerPageArray="[5, 10, 50, 100]"
    ></my-select>
    <my-paginator
      :total="userslist.length"
      :countPerPage="countPerPage"
      @input="value => (selectedPage = value)"
    ></my-paginator>
  </div>
</template>

<script>
import MyPaginator from "@/components/MyPaginator.vue";
import MySelect from "@/components/MySelect.vue";

export default {
  name: "users-list",
  data: function() {
    return { countPerPage: 5, selectedPage: 1 };
  },
  components: { MyPaginator, MySelect },
  props: {
    userslist: {
      type: Array,
      required: false
    }
  },
  computed: {
    // Общее количество пользователей
    total: function() {
      return this.userslist.length;
    },
    listOnPage: function() {
      return this.userslist.slice(
        (this.selectedPage - 1) * this.countPerPage,
        this.selectedPage * this.countPerPage
      );
    }
  },

  methods: {
    removeUser: function(userId) {
      this.$emit("removeuser", userId);
    }
  }
};
</script>

<style></style>
