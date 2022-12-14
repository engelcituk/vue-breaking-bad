import { ref } from 'vue'
import breakingBadApi from '@/api/breakingBadApi';
import type { MarvelCharacter, Character} from '@/characters/interfaces/character'

export const useCharacters = () => {

const characters = ref<Character[]>([])
const isLoading = ref<boolean>(true)

breakingBadApi.get<MarvelCharacter>('/characters')
    .then( resp => {
        characters.value = resp.data.data.results
        isLoading.value = false
    })
    return {
        characters,
        isLoading
    }
}