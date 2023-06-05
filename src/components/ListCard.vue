<script>
import { store } from './../store.js'
import Card from './Card.vue'

export default {
    name: 'ListCard',
    components: {
        Card
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
        <div class="counter-card">
            Found 15 card
        </div>
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

    .counter-card {
        height: 50px;
        padding: 15px;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: $white;
    }
}
</style>