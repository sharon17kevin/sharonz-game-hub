import usePlatfroms from "./usePlatform";

const useGetPlatform = (id? : number) => {
    const {data: platforms} = usePlatfroms();
    return platforms.results.find((p)=> p.id === id)
}

export default useGetPlatform