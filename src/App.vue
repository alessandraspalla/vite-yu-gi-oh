<script>
import { store } from './store.js'
import axios from 'axios'
import AppLoader from './components/AppLoader.vue'
import AppHeader from './components/AppHeader.vue'
import ListCard from './components/ListCard.vue'
import AppSearch from './components/AppSearch.vue'

export default {
  components: {
    AppLoader,
    AppHeader,
    ListCard,
    AppSearch
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      let myURL = store.apiURL;

      if (store.searchText !== '') {
        myURL = `https://db.ygoprodeck.com/api/v7/cardinfo.php?${store.apiArchetypeParameter}=${store.searchText}`
      }
      console.log(myURL);
      axios.get(myURL)
        .then(res => {
          store.cardList = res.data.data;

          store.loading = false;
        })
        .catch(error => {
          console.log(error);
        })
    },
    getArchetype() {
      axios.get(store.apiArchetypeURL)
        .then(result => {
          let archetype = result.data
          store.archetypeList = archetype;
          console.log(store.archetypeList);
        })
    }
  },
  created() {
    this.getCard();
    this.getArchetype();
  }
}
</script>

<template>
  <AppLoader v-if="store.loading" />
  <AppHeader />
  <main>
    <AppSearch @search="getCard" />
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
