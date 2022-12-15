<script setup lang="ts">
import CharacterCard from '@/characters/components/CharacterCard.vue'

import breakingBadApi from '@/api/breakingBadApi'
import { useCharacters } from '@/characters/composables/useCharacters'
import {  useQuery } from "@tanstack/vue-query"
import type { MortyCharacter, Character } from '@/characters/interfaces/character'


/*
const {data} = await breakingBadApi.get<MarvelCharacter>('/characters')
const characters = data.data.results*/

// Composable function
// const { characters, isLoading, hasError, errorMessage } = useCharacters()

// tanStack

const getCharactersSlow = async ():Promise<Character[]> => {
    return new Promise( (resolve) => {
        setTimeout( async () => {
            const data = await breakingBadApi.get<MortyCharacter>('/character'); 
            resolve( data.data.results)
        }, 1)
    })
    
}

const {isLoading, isError, data:characters, error } = useQuery(
    ['characters'],
    getCharactersSlow,
    {
        cacheTime: 1000 * 60,
        refetchOnReconnect: 'always' //petición cuando se conecte a internet
    }
)

</script>

<template>
    <h1 v-if="isLoading">Loading..</h1>
    <!-- <h1 v-if="isError">{{error}}</h1> -->
    <div class="card-list">
        
            <CharacterCard 
                v-for="character of characters"
                :key="character.id"
                :character="character"
            >
            {{character.name}}
            </CharacterCard>
       
    </div>
</template>


<style scoped>
.card-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>