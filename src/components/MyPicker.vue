<template>
  <div>
    <p><input name="my-picker" v-model="localValue" /></p>
    <p>
      <datepicker
        :value="dateFromString(localValue)"
        :format="'dd.MM.yyyy'"
        @selected="selectDate"
        :language="ru"
      ></datepicker>
    </p>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { ru } from "vuejs-datepicker/dist/locale";

import moment from "moment";
export default {
  components: { Datepicker },

  name: "my-picker",
  data: function() {
    return {
      localValue: "",
      ru: ru
    };
  },
  props: {
    // Объект с данными пользователя
    value: {
      type: String,
      required: true
    }
  },
  watch: {
    localValue: function(newValue) {
      debugger;
      this.$emit("input", newValue);
    }
  },
  methods: {
    dateFromString: function(strDate) {
      return moment(strDate, "DD.MM.YYYY").toString();
    },
    selectDate(newDate) {
      this.localValue = moment(newDate).format("DD.MM.YYYY");

      // console.log(this.parseDate(newDate));
    }
  },
  created: function() {
    this.localValue = this.value;
  }
};
</script>

<style></style>
