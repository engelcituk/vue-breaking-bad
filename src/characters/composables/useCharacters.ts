import { ref, onMounted } from 'vue';
import breakingBadApi from '@/api/breakingBadApi';
import type { MortyCharacter, Character} from '@/characters/interfaces/character'
import axios from 'axios';

const characters = ref<Character[]>([])
const isLoading = ref<boolean>(true)
const isError = ref<boolean>(true)
const errorMessage = ref<string>()

export const useCharacters = () => {

    onMounted( async() => {
        await loadCharacters()
    })

    const loadCharacters = async () => {
        if(characters.value.length > 0) return;
        
        isLoading.value = true

        try {
            const { data } = await breakingBadApi.get<MortyCharacter>('/character')    
            characters.value = data.results
            isLoading.value = false
        } catch (error) {
            isError.value = true
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
        isError,
        error: errorMessage,
    }
}