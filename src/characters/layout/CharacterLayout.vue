<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue'

</script>

<template>
    
    <h1>Personajes</h1>
    <!-- Navbar -->
    <NavBar :show-icon="false" />

    <RouterView/>


</template>


<style lang="scss" scoped>

</style>