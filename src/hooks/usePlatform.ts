import platforms from '../data/platforms'
import { useQuery } from "@tanstack/react-query"
import { FetchResponse } from "../services/api-clent"
import platformServices, { Platform } from '../services/platform-services'
import ms from 'ms'

const usePlatfroms = () => {
    return useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: platformServices.getAll,
        staleTime: ms('24h'),
        initialData: {count: platforms.length, results: platforms, next: null}
    })
}

export default usePlatfroms