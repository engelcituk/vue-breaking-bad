import { ref, computed  } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import breakingBadApi from '@/api/breakingBadApi'
import type {  Character, MortyCharacter } from '@/characters/interfaces/character'


const characterSet = ref<{[id: string]:Character}>({})
// const isLoading = ref<boolean>(false)
const hasError = ref<boolean>(false)
const errorMessage = ref<string | null>(null)

const getCharacter = async( id: string):Promise<Character> =>{
    if( characterSet.value[id] ){
        return characterSet.value[id]
    }
    const data = await breakingBadApi.get<Character>(`/character/${id}`)
    //TOOD: manejar error
    return data.data
}

const loadedCharacter = (character: Character) => {
    hasError.value = false
    errorMessage.value = null
    characterSet.value[character.id] = character
}

const useCharacter = (id:string) => {

    const {isLoading} = useQuery(
        ['characters', id],
        () => getCharacter(id),
        {
            onSuccess( character ){
                loadedCharacter(character)
            }
        }
    )

    return {
        //properties
        errorMessage,
        hasError,
        isLoading,
        list: characterSet,

        //getters

        //methods
    }
}

export default useCharacter