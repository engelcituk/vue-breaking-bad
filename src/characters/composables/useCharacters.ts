import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import breakingBadApi from '@/api/breakingBadApi'
import type {  Character, MortyCharacter } from '@/characters/interfaces/character'

const characters = ref<Character[]>([])
const isLoading = ref<boolean>(false)
const hasError = ref<boolean>(false)
const errorMessage = ref<string | null>(null)

const getCharacters = async ():Promise<Character[]> => {
    if(characters.value.length > 0) {
        return characters.value
    }
    const data = await breakingBadApi.get<MortyCharacter>('/character'); 
    return data.data.results
}

const loadedCharacters = (data: Character[]) => {
    hasError.value = false
    errorMessage.value = null
    characters.value = data
}

const useCharacters = () => {

    const {isLoading } = useQuery(
        ['characters'],
        getCharacters,
        {
            onSuccess( data ){
                loadedCharacters(data)
            }
        }
    )

    return {
        //propierties 
        characters,
        isLoading,
        hasError,
        errorMessage,

        //getters
        count: characters.value.length

        //methods
    }
}

export default useCharacters