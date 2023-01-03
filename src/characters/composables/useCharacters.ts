import { ref } from 'vue'
import axios from 'axios'
import breakingBadApi from '@/api/breakingBadApi'
import type {  Character} from '@/characters/interfaces/character'

const characters = ref<Character[]>([])
const isLoading = ref<boolean>(false)
const hasError = ref<boolean>(false)
const errorMessage = ref<string | null>(null)


const useCharacters = () => {
    return {
        //propierties 
        characters,
        isLoading,
        hasError,
        errorMessage

        //getters

        //methods
    }
}

export default useCharacters