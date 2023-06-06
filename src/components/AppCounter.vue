<script>
import { store } from './../store.js'

export default {
    name: 'AppCounter',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="counter-card">
        Found {{ store.cardList.length }} card
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;

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
</style>