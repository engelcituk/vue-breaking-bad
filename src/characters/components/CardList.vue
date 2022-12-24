<script setup lang="ts">
import CharacterCard from '@/characters/components/CharacterCard.vue'
import type { Character } from '@/characters/interfaces/character';

interface Props {
    characters: Character[]
}

const props = defineProps<Props>();

/*
import breakingBadApi from '@/api/breakingBadApi'
import { useCharacters } from '@/characters/composables/useCharacters'
import {  useQuery } from "@tanstack/vue-query"


/*
const {data} = await breakingBadApi.get<MarvelCharacter>('/characters')
const characters = data.data.results*/

// Composable function
// const { characters, isLoading, hasError, errorMessage } = useCharacters()

// tanStack

/*
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
   
)*/

</script>

<template>
    <!-- <h1 v-if="isLoading">Loading..</h1> -->
    <!-- <h1 v-if="isError">{{error}}</h1> -->
    <div class="card-list">
        
            <CharacterCard 
                v-for="character of props.characters"
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