<template>
  <div>
    <h2>Редактирование пользователя</h2>
    {{ user }}
    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>
    <!--<user-form v-else :value="user" @input="value => (user = value)" />-->
    <template v-else>
      <user-form v-model="user" @errors="value => (hasErrors = value)" />
    </template>
    <hr />
    <button type="button" class="btn btn-primary" :disabled="hasErrors" @click="save">Save</button>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
import axios from "axios";
import UserForm from "@/components/UserForm.vue";
export default {
  name: "EditUser",
  components: {
    "user-form": UserForm
  },
  data: function() {
    return {
      // Пользователь
      user: null,
      hasErrors: false
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    url() {
      return "http://localhost:3004/users/" + this.id;
    }
  },
  mounted: function() {
    this.loadData();
  },
  methods: {
    save: function() {
      axios
        .put(this.url, this.user)
        .then(response => {
          console.log(response);
          this.$router.push("/users");
        })
        .catch(console.error);
    },
    loadData: function() {
      axios.get(this.url).then(({ data }) => {
        this.user = data;
      });
    }
  }
};
</script>
