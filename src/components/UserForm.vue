<template>
  <div>
    <pre>{{ errors }}</pre>
    <div class="form-group">
      <label>Дата</label>
      <my-picker v-model="localUser.registered"></my-picker>
    </div>
    <div class="form-group">
      <label>Активен</label>
      <input type="checkbox" v-model="localUser.isActive" />
    </div>

    <div class="form-group">
      <label>Доступ</label>
      <select v-model="localUser.accessLevel">
        <option value>Не выбран</option>
        <option v-for="option in accessLevels" :value="option" :key="option">{{ option }}</option>
      </select>
    </div>
    <!--<div class="form-group">
      <template v-for="option in accessLevels">
        <input
          type="radio"
          v-model="localUser.accessLevel"
          :value="option"
          :key="option"
          :id="option"
        />
        <label :key="option" :for="option">{{ option }}</label>
      </template>
    </div>-->
    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" v-model="localUser.firstName" />
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input type="text" class="form-control" v-model="localUser.lastName" />
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input type="text" class="form-control" v-model="localUser.balance" />
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input type="text" class="form-control" v-model="localUser.phone" />
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input
        type="text"
        v-validate="'unique'"
        name="address"
        class="form-control"
        v-model="localUser.address"
      />
      <span class="alert-danger">{{ errors.first("address") }}</span>
    </div>

    <div class="form-group">
      <label>Компания</label>
      <!-- <input type="text" class="form-control" v-model="localUser.company" /> -->
      <rich-editor v-model="localUser.company" />
    </div>
    <div></div>
  </div>
</template>

<script>
import { ru } from "vuejs-datepicker/dist/locale";
import axios from "axios";
import MyPicker from "@/components/MyPicker.vue";
import RichEditor from "@/components/RichEditor.vue";
import { error } from "util";

export default {
  name: "user-form",
  components: {
    MyPicker,
    RichEditor
  },
  props: {
    // Объект с данными пользователя
    value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    // Локальный изменяемый объект пользователя
    localUser: null,
    accessLevels: [],
    ru: ru
  }),
  watch: {
    localUser: {
      deep: true,
      handler() {
        console.log("UPDATE USER", this.localUser);
        this.$emit("input", Object.assign({}, this.localUser));
      }
    },
    "errors.items": function() {
      this.$emit("errors", this.errors.any());
    }
  },
  created() {
    // Копируем пользователя в локальное состояние
    this.localUser = Object.assign({}, this.value);
    this.getAccessLevels();
  },
  methods: {
    getAccessLevels() {
      axios
        .get("http://localhost:3004/accessLevels")
        .then(response => (this.accessLevels = response.data))
        .catch(error => console.log(error));
    }
  }
};
</script>
