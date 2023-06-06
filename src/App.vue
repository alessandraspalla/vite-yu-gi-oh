<script>
import { store } from './store.js'
import axios from 'axios'
import AppLoader from './components/AppLoader.vue'
import AppHeader from './components/AppHeader.vue'
import ListCard from './components/ListCard.vue'

export default {
  components: {
    AppLoader,
    AppHeader,
    ListCard
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      axios.get(store.apiURL)
        .then(res => {
          store.cardList = res.data.data;
          store.loading = false;
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  created() {
    this.getCard();
  }
}
</script>

<template>
  <AppLoader />
  <AppHeader />
  <main>
    <ListCard />
  </main>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;

body {
  position: relative;
}

main {
  height: calc(100vh - 50px);
  background-color: $primary_color;
  padding: 50px 0;
  overflow: auto;
}
</style>
