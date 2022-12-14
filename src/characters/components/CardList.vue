<script setup lang="ts">
import { useCharacters } from '@/characters/composables/useCharacters';

const { characters, isLoading} = useCharacters()
/*
const {data} = await breakingBadApi.get<MarvelCharacter>('/characters')
const characters = data.data.results*/


</script>

<template>
    <h1 v-if="isLoading">Loading..</h1>
    <ul>
        <li
            v-for="character of characters"
            :key="character.id"
        >
        {{character.name}}
        </li>
    </ul>
</template>


<style scoped>

</style>