<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import type { Character, MortyCharacter } from '@/characters/interfaces/character'
import characterStore from '@/store/characters.store'
import breakingBadApi from '@/api/breakingBadApi'

const route = useRoute()

const { id } = route.params as {id: string}

const getCharacterCacheFirst = async( characterId: string):Promise<Character> =>{
    if(characterStore.checkIdInStore(characterId)){
        return characterStore.ids.list[characterId]
    }
    const data = await breakingBadApi.get<Character>(`/character/${characterId}`)
    return data.data

}

const {data: character} = useQuery(
    ['characters', id],
    () => getCharacterCacheFirst(id),
    {
        onSuccess( character ){
            characterStore.loadedCharacter(character)
        }
    }
)
</script>

<template>
        <h1 v-if="!character">Loading</h1>
        <div v-else>
            <h1> {{character.name}}</h1>     
            <div class="character-container">
                <img :src="character.image" :alt="character.name">
                <ul>
                    <li>Especie: {{ character.species }}</li>
                    <li>Tipo: {{ character.type }}</li>
                    <li>Género: {{ character.gender }}</li>
                    <li>Status: {{ character.status }}</li>

                </ul> 
            </div> 
            <pre>
            {{ character }}</pre>     
        </div>
</template>


<style  scoped>
.character-container{
    display: flex;
    flex-direction: row;
}
img {
    width: 150px;
    border-radius: 5px;
}
</style>