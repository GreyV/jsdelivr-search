<template>
  <div
    class="modal fade"
    id="modal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-2" id="staticBackdropLabel">{{ name }}</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="detail">
          <div>
            <h4>
              Version:
              <span class="badge rounded-pill text-bg-light">{{ name }}@{{ version }} </span>
            </h4>
          </div>

          <div class="overflow-x-auto">
            <h4>Links:</h4>
            <div class="link" v-for="(link, links) in links" :key="link">
              <span class="badge text-bg-warning">
                <a :href="link">{{ links }}</a> </span
              >:
              <span class="badge rounded-pill text-bg-light">{{ link }}</span>
            </div>
          </div>

          <div class="overflow-x-auto">
            <h4>Tags:</h4>
            <div class="link">
              <span v-for="(key, tag) in tags" :key="key" class="badge text-bg-secondary"
                >{{ key }}:{{ tag }}</span
              >
            </div>
          </div>
          <div>
            <h4>Bandwidth:</h4>
            <span class="badge text-bg-success">{{ bandwidth }}</span>
          </div>
          <div>
            <h4>Hits:</h4>
            <span class="badge text-bg-info">{{ hits }}</span>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalDetail',
  props: {
    name: String,
    version: String,
    bandwidth: String,
    hits: Number,
    detail: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    tags() {
      return this.detail?.tags
    },
    links() {
      return this.detail?.links
    }
  }
}
</script>