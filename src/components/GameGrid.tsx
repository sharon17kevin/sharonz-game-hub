import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";

const GameGrid = () => {
  const { gameList, error, isLoading } = useGames();
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={10} padding='10px'>
        {isLoading && skeletons.map(skeleton=> <SkeletonGameCard key={skeleton}/>)}
        {gameList.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
