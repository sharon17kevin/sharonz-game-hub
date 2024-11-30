import { useEffect, useState } from "react";
import apiClent from "../services/api-clent";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  interface Game {
    id: number;
    name: string;
  }

  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

  const [gameList, setGameList] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClent
      .get<FetchGameResponse>("/games")
      .then((res) => setGameList(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {gameList.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
