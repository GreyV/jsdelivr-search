<template>
  <form class="col-sm-10">
    <div class="input-group mb-3">
      <input
        v-model="query"
        type="text"
        @keydown.enter.prevent="search"
        class="form-control"
        placeholder="Type package name"
        aria-label="search"
        aria-describedby="button-search"
        required
      />
      <button @click="search" class="btn btn-primary" type="button" id="button-search">
        Search
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SearchInput',
  data() {
    return {
      query: ""
    }
  },
  methods: {
    ...mapActions({
      getList: 'packages/getPackagesByQuery'
    }),
    search() {
      if (this.query.length == 0) return
      this.getList(this.query)
    }
  }
}
</script>