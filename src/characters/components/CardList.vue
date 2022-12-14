<script setup lang="ts">
import { ref } from 'vue'
import breakingBadApi from '@/api/breakingBadApi';
import type { MarvelCharacter, Character} from '@/characters/interfaces/character'

const {data} = await breakingBadApi.get<MarvelCharacter>('/characters')
const characters = data.data.results

/*
breakingBadApi.get<MarvelCharacter>('/characters')
    .then( resp => {
        characters.value = resp.data.data.results
    });*/
</script>

<template>
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