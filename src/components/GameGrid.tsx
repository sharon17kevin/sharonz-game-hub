import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const {gameList, error} = useGames();

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
