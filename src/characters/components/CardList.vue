<script setup lang="ts">
import breakingBadApi from '@/api/breakingBadApi';

breakingBadApi.get('/characters')
    .then( resp => {
        console.log({data: resp.data});
    })
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