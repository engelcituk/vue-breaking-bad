<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

import breakingBadApi from '@/api/breakingBadApi'
import characterStore from '@/store/characters.store'
import CardList from '@/characters/components/CardList.vue';
import type { Character, MortyCharacter } from '@/characters/interfaces/character';

const props = defineProps<{title:string, visible:boolean}>()

const getCharactersCacheFirst = async ():Promise<Character[]> => {
    if(characterStore.characters.count > 0) {
        return characterStore.characters.list
    }
    const data = await breakingBadApi.get<MortyCharacter>('/character'); 
    return data.data.results

}

useQuery(
    ['characters'],
    getCharactersCacheFirst,
    {
        onSuccess( data ){
            characterStore.loadedCharacters(data)
        }
    }
)


 </script>

<template>
    <h1 v-if="characterStore.characters.isLoading">Loading..</h1>
    <template v-else>
        <h2>{{props.title}}</h2>
        <CardList :characters="characterStore.characters.list || []"/>
    </template>
</template>


<style lang="scss" scoped>

</style>