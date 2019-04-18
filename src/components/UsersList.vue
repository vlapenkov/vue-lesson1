<!--<template>
  <div>
    <span>usersList</span>
    <ul v-if="userslist" class="list-unstyled">
      <li class="m-b-10" v-for="user in userslist" v-bind:key="user.id">
        {{ user.id }} {{ user.firstName }}
      </li>
    </ul>
  </div>
</template> -->

<template>
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
      <tr v-for="item in userslist" :key="item.id">
        <td>
          <router-link :to="'/edit/' + item.id"> # {{ item.id }} </router-link>
        </td>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.isActive }}</td>
        <td>{{ item.balance }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.registered }}</td>
        <td>  <button @click="removeUser(item.id)">X</button></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="8">Всего пользователей: {{ total }}</th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import axios from 'axios';
export default {
  name: "users-list",

  props: {
    userslist: {
      type: Array,
      required: false
    }
  },
  computed: {
    // Общее количество пользователей
    total: function() {
      return this.userslist.length
    }
  },

  methods:{
    removeUser:function(userId)
    {
      this.$emit('removeuser', userId);

    }
  }

};
</script>

<style></style>
