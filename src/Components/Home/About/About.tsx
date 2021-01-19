import { 
  Box,
  Text,
  Image,
  Heading,
  Center,
  HStack,
  Flex,
} from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  IconButton 
} from "@chakra-ui/react"

import { DiPython, DiJavascript, DiReact,  } from 'react-icons/di';
import { SiCplusplus,  } from 'react-icons/si';

import Circle from './Circle'

import { useTranslation } from 'react-i18next';

import Myself from './../../../static/me2.jpg'

const About = () => {
  const { t } = useTranslation();

  return (<Box p={4}>

    <Box>

      <Box display={{ md: "flex" }}>
        
          <Image 
              alt="Jorge Humberto González Ramos"
              src={Myself}
              borderRadius="lg"
              width={{ md: "198px"}}
              objectFit="cover"
              margin={2}
          />

        <Text mt={{ base: 2, md: 0 }} textAlign="justify">
          {t('about-text-1')}
          <br/>
          {t('about-text-2')}
        </Text>
      </Box>

      <Box>
        <Text textAlign="justify">
          {t('about-text-3')}
          <br/>
          {t('about-text-4')}
          <br/>
        </Text>
      </Box>

  </Box>

  <br/>


  </Box>)
}

export default About;