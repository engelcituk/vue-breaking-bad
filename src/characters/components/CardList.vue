<script setup lang="ts">
import breakingBadApi from '@/api/breakingBadApi';
import type { MarvelCharacter } from '@/characters/interfaces/character';

breakingBadApi.get<MarvelCharacter>('/characters')
    .then( resp => {
        console.log(resp.data.data.results[0]);
    });
</script>

<template>
    <ul>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
    </ul>
</template>


<style scoped>

</style>