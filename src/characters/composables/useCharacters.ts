import { ref, onMounted } from 'vue';
import breakingBadApi from '@/api/breakingBadApi';
import type { MarvelCharacter, Character} from '@/characters/interfaces/character'
import axios from 'axios';

const characters = ref<Character[]>([])
const isLoading = ref<boolean>(true)
const hasError = ref<boolean>(true)
const errorMessage = ref<string>()



export const useCharacters = () => {

    onMounted( async() => {
        await loadCharacters()
    })

    const loadCharacters = async () => {
        if(characters.value.length > 0) return;
        
        isLoading.value = true

        try {
            const { data } = await breakingBadApi.get<MarvelCharacter>('/characters')    
            characters.value = data.data.results
            isLoading.value = false
        } catch (error) {
            hasError.value = true
            isLoading.value = false
            if(axios.isAxiosError(error)){
                return errorMessage.value = error.message
            }
            return errorMessage.value = JSON.stringify(error)
            
        }
            
    }

  

    return {
        characters,
        isLoading,
        hasError,
        errorMessage,
    }
}