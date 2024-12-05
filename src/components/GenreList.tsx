import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/crop-images";

interface Props {
    setGenre: (genre: Genre) => void;
}

const GenreList = ( {setGenre}: Props ) => {
  const { data, isLoading, error} = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner/>
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImage(genre.image_background)}
            />
            <Button onClick={() => setGenre(genre)} variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
