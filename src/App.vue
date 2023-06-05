<script>
import { store } from './store.js'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import ListCard from './components/ListCard.vue'

export default {
  components: {
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
