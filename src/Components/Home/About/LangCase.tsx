import { ComponentType } from "react";
import { IconType } from "react-icons/lib";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton 
} from "@chakra-ui/react"

interface langCType {
  name : string
  Icon : IconType,
  Content : ComponentType
}

const LangCase = ({name, Icon, Content} : langCType) => {

  return (

  <Popover>
    <PopoverTrigger>
      <IconButton
            variant=""
            aria-label={name}
            fontSize="45px"
            icon={ <Icon /> }
      />
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>{name}</PopoverHeader>
      <PopoverBody>

        <Content/>

      </PopoverBody>
    </PopoverContent>
  </Popover>

  )


}

export default LangCase;
