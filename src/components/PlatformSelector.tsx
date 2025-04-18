import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGetPlatform from "../hooks/useGetPlatform";
import usePlatfroms from "../hooks/usePlatform";
import useGameQueryStore from "../zustand/gameQueryStore";

const PlatformSelector = () => {
  const { data, error } = usePlatfroms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatform = useGameQueryStore((s) => s.setPlatform);
  const selectedPlatform = useGetPlatform(selectedPlatformId);

  if (error) return;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => setPlatform(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
