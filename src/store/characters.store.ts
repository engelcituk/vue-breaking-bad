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

    // methods
    startLoadingCharacters: () => void;
    loadedCharacters: ( data: Character[]) => void;
    loadCharactersFailed: ( error: string) => void;

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
    //methods
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

    }

})

characterStore.startLoadingCharacters()

export default characterStore