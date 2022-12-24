import type { Character } from "@/characters/interfaces/character"

interface Store {
    characters: {
        list: Character;
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