<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';

import breakingBadApi from '@/api/breakingBadApi';
import CardList from '@/characters/components/CardList.vue';
import type { Character, MortyCharacter } from '@/characters/interfaces/character';

const props = defineProps<{title:string, visible:boolean}>()

const getCharacters = async ():Promise<Character[]> => {
    const data = await breakingBadApi.get<MortyCharacter>('/character'); 
    return data.data.results

}

const {isLoading, data:characters } = useQuery(
    ['characters'],
    getCharacters

)

 </script>

<template>
    <h1 v-if="isLoading">Loading..</h1>
    <template v-else>
        <h2>{{props.title}}</h2>
        <CardList :characters="characters || []"/>
    </template>
</template>


<style lang="scss" scoped>

</style>