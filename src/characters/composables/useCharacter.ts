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

    try {
        const data = await breakingBadApi.get<Character>(`/character/${id}`)
        return data.data
    } catch (error: any ) {
        throw new Error(error)
    }
}

const loadedCharacter = (character: Character) => {
    hasError.value = false
    errorMessage.value = null
    characterSet.value[character.id] = character
}

const loadedWithError = (error:string) => {
    hasError.value = true
    errorMessage.value = error
}

const useCharacter = (id:string) => {

    const {isLoading} = useQuery(
        ['characters', id],
        () => getCharacter(id),
        {
            onSuccess( character ){
                loadedCharacter(character)
            },
            onError( error: string ){
                loadedWithError(error)
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
        //puede venir nulo en un determinado tiempo
        character: computed<Character | null >( ()=> characterSet.value[id]) 

        //methods
    }
}

export default useCharacter