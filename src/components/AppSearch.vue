<script>
import { store } from './../store.js'

export default {
    name: 'AppSearch',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <select v-model="store.searchText">
        <option v-for="option in store.archetypeList" @click="$emit('search')" :value="option.archetype_name">{{
            option.archetype_name }}
        </option>
    </select>
</template>

<style lang="scss" scoped></style>
