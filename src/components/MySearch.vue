<template>
  <form>
    <div class="form-group">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search..."
          v-model="localFilter.searchText"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            @click="localFilter.searchText = ''"
          >
            X
          </button>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="active"
          v-model="localFilter.active"
        />
        <label class="custom-control-label" for="active">Активность</label>
      </div>
    </div>
  </form>
</template>

<script>
//import _ from "lodash";
export default {
  name: "my-search",
  data: () => ({
    localFilter: null,
    loadedOnce: false
  }),
  props: {
    value: {
      type: Object,
      required: true
    }
  },

  watch: {
    localFilter: {
      deep: true,
      handler() {
        console.log("UPDATE FILTER", this.localFilter);
        this.$emit("input", Object.assign({}, this.localFilter));
      }
      /*  handler: _.debounce(function() {
        console.log("UPDATE FILTER", this.localFilter);
        this.$emit("input", Object.assign({}, this.localFilter));
      }, 1000)
      */
    }
  },

  created() {
    this.localFilter = Object.assign({}, this.value);
  }
  /*
  ,
  methods: {
    // не используется
    update: _.debounce(function() {
      console.log(this);

      // this.$emit('input',e.target.value)
      this.$emit("input", Object.assign({}, this.localFilter));
    }, 1000)
  }*/
};
</script>
