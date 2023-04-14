<template>
  <nav aria-label="navigation" v-if="showNavigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="prevPage">Previous</a>
      </li>
      <li class="page-item"  :class="{ disabled: currentPage === pageCount }">
        <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: "SearchNav",
  computed: {
    ...mapState("packages", {
        currentPage: state => state.currentPage,
    }),
    ...mapGetters({
      pageCount: "packages/pageCount",
      showNavigation: "packages/showNavigation"
    }),
  },
  methods: {
    ...mapActions({
      prevPage: 'packages/prevPage',
      nextPage: 'packages/nextPage'
    }),
  }
}
</script>