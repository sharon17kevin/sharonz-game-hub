import useData from "./useData"
import { Platform } from "./useGames"

const usePlatfroms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatfroms