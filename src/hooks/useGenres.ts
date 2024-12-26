import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import { FetchResponse } from "../services/api-clent";
import genreServices, { Genre } from "../services/genre-services";

const useGenre = ( ) => {
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: genreServices.getAll,
        staleTime: ms('24h'),
        initialData: {count: genres.length, results: genres, next: null}
      });

}

export default useGenre;