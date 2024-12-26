import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string | null;
}

export interface GameQueryStore {
    gameQuery: GameQuery,
    search: (searchText: string)=>void;
    setGenre: (genreId: number)=>void;
    setPlatform: (platformId: number)=>void;
    setSortOrder: (sortOrder: string)=>void;
}

const useGameQueryStore = create<GameQueryStore>(set=> ({
    gameQuery: {} as GameQuery,
    search: (searchText)=>(set(()=>({gameQuery: {searchText}as GameQuery}))),
    setGenre: (genreId)=>set(store=>({gameQuery: {...store.gameQuery, genreId}})),
    setPlatform: (platformId)=>set(store=>({gameQuery: {...store.gameQuery, platformId}})),
    setSortOrder: (sortOrder)=>set(store=>({gameQuery: {...store.gameQuery, sortOrder}}))
}))

export default useGameQueryStore;
  