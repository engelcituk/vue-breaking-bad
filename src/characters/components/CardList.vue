<script setup lang="ts">
import breakingBadApi from '@/api/breakingBadApi';
import { useCharacters } from '@/characters/composables/useCharacters';
import {  useQuery } from "@tanstack/vue-query";
import type { MortyCharacter, Character } from '../interfaces/character';

/*
const {data} = await breakingBadApi.get<MarvelCharacter>('/characters')
const characters = data.data.results*/

// Composable function
// const { characters, isLoading, hasError, errorMessage } = useCharacters()

// tanStack

const getCharactersSlow = async ():Promise<Character[]> => {
    const data = await breakingBadApi.get<MortyCharacter>('/character'); 
    return data.data.results
}

const {isLoading, isError, data:characters, error } = useQuery(
    ['characters'],
    getCharactersSlow
)

</script>

<template>
    <h1 v-if="isLoading">Loading..</h1>
    <h1 v-if="isError">{{error}}</h1>

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