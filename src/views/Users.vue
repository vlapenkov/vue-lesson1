<template>
  <div v-if="usersList.length">
    <users-list :userslist="usersList" v-on:removeuser="removeUser" />
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
/* eslint-disable */
import UsersList from "@/components/UsersList.vue";

import axios from "axios";


export default {
  components: { UsersList },
  data: function() {
    return { dispTitle: "users", usersList: [] };
  },
  created: function() {


    axios
      .get("http://localhost:3004/users")
      .then(response => (this.usersList = response.data))
      .catch(error => console.log(error));
  },
  methods: { removeUser: function(userId) {

       axios.delete('http://localhost:3004/users/'+userId).then(response=>
       {
       this.usersList= this.usersList.filter(user=> user.id!==userId);
       }
       ).catch(error => console.log(error));
  } }
};
</script>

<style></style>
