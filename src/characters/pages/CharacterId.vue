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

const {data} = useQuery(
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
    <div>
        <h1>Character {{id}}</h1>
        <pre>{{ data }}</pre>
    </div>
</template>


<style lang="scss" scoped>

</style>