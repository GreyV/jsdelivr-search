<template>
  <table class="table table-striped" v-if="hasResult">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Version</th>
      </tr>
    </thead>
    <tbody>
      <SearchRow
        v-for="row in displayedPackages"
        :key="row.version"
        :name="row.name"
        :version="row.version"
        @details="showDetails"
      />
    </tbody>
  </table>
  <div v-else>
    <p class="lead">No packages found.</p>
  </div>
  <ModalDetail :name="modalName" :version="modalVersion" :detail="packageDetail" :bandwidth="bandwidth" :hits="hits"/>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Modal } from 'bootstrap'
import SearchRow from './SearchRow.vue'
import ModalDetail from './ModalDetail.vue'
export default {
  name: 'SearchResult',
  components: { SearchRow, ModalDetail },
  data() {
    return {
      modalName: "",
      modalVersion: "",
      modal: null
    }
  },
  mounted() {
    this.modal = new Modal("#modal", {})
  },
  beforeUnmount() {
    this.modal.dispose()
  },
  methods: {
    ...mapActions({
      getDetailsByVersion: "packages/getDetailsByVersion",
      getStatsByPackage: "packages/getStatsByPackage"
    }),
    showDetails(detail) {
      const { name, version } = detail;
      this.modalName = name;
      this.modalVersion = version;
      this.getDetailsByVersion(version)
      this.getStatsByPackage(name + "@" + version)
    }
  },
  computed: {
    ...mapGetters({
      displayedPackages: "packages/displayedPackages",
      packageDetail: "packages/getPackageDetail",
      bandwidth: "packages/bandwidth",
      hits: "packages/hits",
      hasResult: "packages/hasResult"
    }),
  },
}
</script>