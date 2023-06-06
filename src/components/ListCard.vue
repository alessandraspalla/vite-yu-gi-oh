<script>
import { store } from './../store.js'
import Card from './Card.vue'
import AppCounter from './AppCounter.vue'

export default {
    name: 'ListCard',
    components: {
        Card,
        AppCounter
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <AppCounter />
        <Card v-for="card in store.cardList" :details="card" />
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;

.container {
    margin: 0 auto;
    background-color: $white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 70px;
    padding-bottom: 25px;
    position: relative;
}
</style>