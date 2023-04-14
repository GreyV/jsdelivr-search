<script setup>
import SearchInput from './components/SearchInput.vue'
import SearchResult from './components/SearchResult.vue'
import SearchNav from './components/SearchNav.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="container">
    <header>jsDelivr API search</header>
    <main>
      <h1>Search</h1>
      <SearchInput />
      <SearchResult />
      <SearchNav />
    </main>
    <TheFooter />
  </div>
</template>