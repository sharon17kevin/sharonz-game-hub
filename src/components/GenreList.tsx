import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImage from "../services/crop-images";

const GenreList = () => {
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
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
