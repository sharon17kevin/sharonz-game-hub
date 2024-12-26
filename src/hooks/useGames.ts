import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchResponse } from "../services/api-clent";
import gameServices, { Game } from "../services/game-services";
import useGameQueryStore from "../zustand/gameQueryStore";

// const useGames = (gameQuery: GameQuery) => 
//     useData<Game>("/games",
        //  {params: {
        //         genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText
        //     }},
//              [gameQuery]
//             );

const useGames = () => {
    const gameQuery = useGameQueryStore(s=>s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        initialPageParam: 1,
        queryKey: ['games', gameQuery],
        queryFn: ( {pageParam = 1})=> 
            gameServices.getAll(
                {params: {
                genres: gameQuery.genreId, 
                parent_platforms: gameQuery.platformId, 
                ordering: gameQuery.sortOrder, 
                search: gameQuery.searchText,
                page: pageParam
            }}),
        staleTime: ms('24h'),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next? allPages.length + 1 : undefined;
        }
        //keepPreviousData: true,
    })
}

export default useGames