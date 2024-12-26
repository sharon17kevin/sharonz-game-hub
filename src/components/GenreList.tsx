import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImage from "../services/crop-images";
import useGameQueryStore from "../zustand/gameQueryStore";

// interface Props {
//   selectedGenreId: number;
// }

const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  const setGenre = useGameQueryStore(s=>s.setGenre);
  const selectedGenreId = useGameQueryStore(s=> s.gameQuery.genreId)

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genre</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                onClick={() => setGenre(genre.id)}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
