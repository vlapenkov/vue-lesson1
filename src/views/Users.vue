<template>
  <section>
    <h1>{{ title }}</h1>
    <p>123</p>
    <div v-if="usersList.length">
      <users-list :userslist="usersList" v-on:removeuser="removeUser">
        <h1 slot="header">{{ title }}</h1>
      </users-list>
    </div>
    <div v-else>
      Loading...
    </div>
    <button type="button" @click="addUser">Add user</button>
  </section>
</template>

<script>
import UsersList from "@/components/UsersList.vue";

import axios from "axios";
import { debuglog } from "util";

export default {
  components: { UsersList },
  data: function() {
    return { title: "users", usersList: [] };
  },
  created: function() {
    // this.getUsers();
  },

  beforeRouteEnter(to, from, next) {
    axios
      .get("http://localhost:3004/users")

      .then(response => {
        next(vm => (vm.usersList = response.data));
      })
      .catch(error => {
        console.log("ERROR!");
        next(false);
      });
  },

  methods: {
    addUser() {
      this.usersList.push({ id: 10, name: "test2" });
      //console.log('add user');
    },
    getUsers: function() {
      axios
        .get("http://localhost:3004/users")
        .then(response => (this.usersList = response.data))
        .catch(error => console.log(error));
    },
    removeUser: function(userId) {
      axios
        .delete("http://localhost:3004/users/" + userId)
        .then(() => {
          this.usersList = this.usersList.filter(user => user.id !== userId);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style></style>
