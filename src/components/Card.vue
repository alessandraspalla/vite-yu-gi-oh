<script>
export default {
    name: 'Card',
    props: {
        details: Object
    }
}
</script>

<template>
    <div class="card">
        <div class="image">
            <img :src="details.card_images[0].image_url" alt="">
        </div>
        <div class="text">
            <h5>{{ details.name }}</h5>
            <p v-if="details.archetype">{{ details.archetype }}</p>
            <p v-else>Other</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;

.card {
    width: 18%;
    margin-bottom: 15px;
    background-color: $primary_color;

    .text {
        padding: 15px;
        text-align: center;

        h5 {
            color: $white;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
    }


}
</style>