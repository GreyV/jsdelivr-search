<template>
  <tr @click="showDetails" data-bs-toggle="modal" data-bs-target="#modal">
    <td>{{ name }}@{{ version }}</td>
    <td><span class="badge text-bg-primary">{{ version }}</span></td>
  </tr>
</template>

<script>
export default {
  name: 'SearchRow',
  props: {
    name: String,
    version: String,
    links: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  emits: ['details'],
  methods: {
    showDetails() {
        this.$emit('details',  {
            name: this.name,
            version: this.version
        })
    }
  }
}
</script>