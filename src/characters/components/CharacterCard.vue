<script setup lang="ts">
import type { Character } from '@/characters/interfaces/character'
import { toRef } from 'vue';
import { useRouter } from 'vue-router';

// interface Props {
//     character: Character
// }

const props = defineProps<{character: Character}>() //no desestructurar props ya que perdería la reactividad
const character = toRef(props, 'character') //una referencia al prop

const router = useRouter();

const goTo = () => {
    router.push(`by/${character.value.id}`)
}

</script>

<template>
    <div class="character-card" @click="goTo">
        <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" alt=""> -->
        <img :src="character.image" :alt="character.name">
        <h3>{{character.name}}</h3>
    </div>
</template>


<style scoped>
.character-card{
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
}

img {
    width: 150px;
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
    transition: all .5s;

}
img:hover{
    box-shadow: 0px 2px 10px rgba(20, 19, 19, 0.5);
    transition: all .5s;
}
</style>