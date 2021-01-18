import { 
  useColorMode,
  IconButton
} from "@chakra-ui/react";

import { BiSun, BiMoon } from 'react-icons/bi';

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      size="sm"
      variant=""
      aria-label="Colormode"
      fontSize="15px"
      icon={
        colorMode === "light" ? 
          <BiMoon />
        :
          <BiSun />
      }
      onClick={() => {toggleColorMode()}}
    />

  )

}

export default ColorMode;