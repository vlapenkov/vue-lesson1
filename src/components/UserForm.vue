<template>
  <div>
  <p>
<pre>
  {{localUser}}
</pre>
</p>
<div class="form-group">
      <label>Активен</label>
        <input
  type="checkbox"
  v-model="localUser.isActive"
>
    </div>

<div class="form-group">
      <label>Доступ</label>
        <select v-model="localUser.accessLevel">
          <option  value="">Не выбран</option>
  <option v-for="option in accessLevels" :value="option" :key="option">
    {{ option }}
  </option>


</select>
 </div>
<div class="form-group">
  <template v-for="option in accessLevels">
      <input type="radio"  v-model="localUser.accessLevel" :value="option" :key="option" :id="option" />
      <label :key="option" :for="option">{{option}}</label>
  </template>
    </div>
    <div class="form-group">
      <label>Имя</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.firstName">
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.lastName">
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.balance">
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.phone">
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.address">
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.company">
    </div>
<div>

  </div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'user-form',
  props: {
    // Объект с данными пользователя
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    // Локальный изменяемый объект пользователя
    localUser: null,
    accessLevels:[]
  }),
  watch: {
    localUser: {
      deep:true,
      handler()
      {
        console.log('UPDATE',this.localUser);
         this.$emit('input', Object.assign({}, this.localUser));
      }
    }
    // При изменении локального состояния
    // отправляем объект наверх
   /* localUser: function(newValue){

        console.log('new user',newValue);
        this.$emit('update', newValue);

    } */
  },
  created() {
    console.log('user',this.user);
    // Копируем пользователя в локальное состояние
    this.localUser = Object.assign({}, this.user)

     axios
      .get("http://localhost:3004/accessLevels")
      .then(response => (this.accessLevels= response.data))
      .catch(error => console.log(error));
  }
}
</script>
