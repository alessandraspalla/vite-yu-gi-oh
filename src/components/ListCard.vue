<script>
import Card from './Card.vue'

export default {
    name: 'ListCard',
    components: {
        Card
    }
}
</script>

<template>
    <div class="container">
        <Card />
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;

.container {
    margin: 0 auto;
    height: 500px;
    background-color: $white;
}
</style>