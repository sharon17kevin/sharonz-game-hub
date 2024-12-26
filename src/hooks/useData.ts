
// const useData = <T>( endpoint : string, requestConfig?: AxiosRequestConfig, dep?: any[]) => {
//     const [data, setGenres] = useState<T[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setIsLoading] = useState(false)
  
//     useEffect(() => {
//       const controller = new AbortController();
//       setIsLoading(true)
//       apiClent
//         .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
//         .then((res) => {
//             setGenres(res.data.results)
//             setIsLoading(false)
//         }
//         )
//         .catch((err) => {
//             if (err instanceof CanceledError) return;
//             setError(err.message)
//             setIsLoading(false)
//         });
//       return () => controller.abort();
//     }, dep? [...dep]:[] );

//     return {data, error, isLoading}
// }

// export default useData;