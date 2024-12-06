import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfroms from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
    onSelectPlatform: (platform: Platform | null)=> void;
}

const PlatformSelector = ({onSelectPlatform}: Props) => {
    const {data, error} = usePlatfroms();

    if (error) return;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map(platform => <MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
