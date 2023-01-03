import breakingBadApi from '@/api/breakingBadApi'
import type { Character, MortyCharacter } from '@/characters/interfaces/character';

import { reactive }  from 'vue'
interface Store {
    characters: {
        list: Character[];
        count: number;
        isLoading: boolean;
        hasError: boolean;
        errorMessage: string | null;
    },
    ids:{
        list:{
            [id: string]:Character
        };
        isLoading: boolean;
        hasError: boolean;
        errorMessage: string | null;

    },

    // methods de Characters
    startLoadingCharacters: () => void;
    loadedCharacters: ( data: Character[]) => void;
    loadCharactersFailed: ( error: string) => void;

    // methods de Character por IDs
    startLoadingCharacter: () => void;
    checkIdInStore: (id:string ) => boolean;
    loadedCharacter: ( character: Character) => void;


}
// Initial State
const characterStore = reactive<Store>({
    characters: {
        count: 0,
        errorMessage: null,
        hasError: false,
        isLoading: true,
        list: [],
    },
    ids:{
        list:{},
        errorMessage: null,
        hasError: false,
        isLoading: true,
    },
    //methods de Characters
    async startLoadingCharacters(){
        // console.log("start loading characters")
        const data = await breakingBadApi.get<MortyCharacter>('/character')
        this.loadedCharacters(data.data.results)
    },
    loadedCharacters(data: Character[]){
        this.characters = {
            count: data.length,
            errorMessage: null,
            hasError: false,
            isLoading: false,
            list: data,
        }
        
    },
    loadCharactersFailed(error: string){
        this.characters = {
            count: 0,
            errorMessage: error,
            hasError: true,
            isLoading: false,
            list: [],
        }
    },
    // methodos de Character by IDs
    startLoadingCharacter(){
        this.ids = {
            ...this.ids,
            isLoading: true,
            hasError: false,
            errorMessage: null
        }
    },
    checkIdInStore( id:string ){
        return !!this.ids.list[id] //true doble negación
    },
    loadedCharacter( character: Character){
        this.ids.isLoading = false
        this.ids.list[character.id] = character
    }

})

characterStore.startLoadingCharacters()

export default characterStore