import { useEffect, useState } from "react";
import apiClent from "../services/api-clent";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
}

interface FetchGameResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [gameList, setGameList] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const controller = new AbortController();
      apiClent
        .get<FetchGameResponse>("/games", {signal: controller.signal})
        .then((res) => setGameList(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        });
      return () => controller.abort();
    }, []);

    return {gameList, error}
}

export default useGames