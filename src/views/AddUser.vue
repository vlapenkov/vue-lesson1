<template>
  <div>
    <h2>Добавление пользователя</h2>

    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>

    <!--<user-form v-else :user="user" @input="value => (user = value)" /> -->
    <user-form v-else v-model="user" />
    <hr />
    <button type="button" class="btn btn-primary" @click="save">Save</button>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import axios from "axios";

const emptyObj = {
  id: 0,
  isActive: false,
  balance: "",
  picture: "",
  age: 0,
  accessLevel: "",
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  address: "",
  about: "",
  registered: ""
};

export default {
  name: "AddUserPage",
  components: {
    "user-form": UserForm
  },
  data: function() {
    return {
      // Пользователь
      user: null
    };
  },
  mounted: function() {
    this.loadData();
  },
  methods: {
    loadData: function() {
      this.user = Object.assign({}, emptyObj);
    },
    save: function() {
      axios.post("http://localhost:3004/users/", this.user).then(response => {
        console.log(response);
        this.$router.push("/users");
      });
    }
  }
};
</script>
