import {
  Box,
  Flex,
  Center,
  Icon,
  Tooltip
} from "@chakra-ui/react"
import { IconType } from "react-icons/lib";

import Circle from './Circle'

interface iconT {
  title: string,
  desc: string,
  color: string,
  icon: IconType,
  size?: number
}

const Tech = ({title, size = 45, desc, color, icon}: iconT) => {

    return (
      <Box
        borderRadius="md"
        padding={1}

        border="1px solid gray"
      >
              
        <Tooltip label={desc} >

        <span>

        <Flex display="flex" align="center">
          <b>{title}</b> 
          <Circle color={color}/>
        </Flex>

        <Center>

            <Icon
              aria-label="Icon"
              fontSize={size}
              as={icon}
            />

      </Center>

      </span>

      </Tooltip>


    </Box>
    )
}
export default Tech;