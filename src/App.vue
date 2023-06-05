<script>
import AppHeader from './components/AppHeader.vue'
import ListCard from './components/ListCard.vue'

export default {
  components: {
    AppHeader,
    ListCard
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <ListCard />
  </main>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;

main {
  background-color: $primary_color;
  min-height: 90vh;
  padding: 50px 0;
  overflow: auto;
}
</style>
