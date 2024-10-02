import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useProductQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformID = useProductQueryStore((s) => s.productQuery.platformID);
  const setselectedPlatformID = useProductQueryStore((s) => s.setPlatformID);
  const selectedPlatform = usePlatform(selectedPlatformID);

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        size={{ base: "sm", md: "md" }}
      >
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setselectedPlatformID(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
