import { 
  Box, 
  Text,
  Center,
  Heading,
  useColorModeValue,
  Badge,
  HStack
} from "@chakra-ui/react"

import { useTranslation } from 'react-i18next';

import { DiPython, DiJavascript } from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';

import {PythonCase, JSCase, CplusCase} from './ExperienceTechs'

import LangCase from './LangCase'

const Experience = () => {
  const contColor = useColorModeValue("#c0d3db", "#3c3c3c")

  const { t } = useTranslation();

  return (<Box>
    <Center><Heading as="h2" size="md">{t('experience')}</Heading></Center>

    <Text textAlign="justify">
      {t('experience-text')}
    </Text>

    <Center>
      <Box bg={contColor} p={4} borderRadius="md" mt={6}>
        

        <Box alignContent="center">
          <Center>
            <LangCase name="Python" Icon={DiPython} Content={PythonCase}/> 
            <LangCase name="JavaScript" Icon={DiJavascript} Content={JSCase}/> 
            <LangCase name="C++" Icon={SiCplusplus} Content={CplusCase}/> 
          </Center>
        </Box>
        <Box textAlign="center">
          {t('experience-util')}
          <Box>
            <HStack>
              <Badge colorScheme="green">git</Badge>
              <Badge colorScheme="green">ci/cd (github)</Badge>
              <Badge colorScheme="green">SQL</Badge>
            </HStack>
            <HStack mt={2}>
              <Badge colorScheme="green">AWS</Badge>
              <Badge colorScheme="green">linux</Badge>
              <Badge colorScheme="purple">photoshop</Badge>
            </HStack>
            <HStack mt={2}>
              <Badge colorScheme="purple">verilog</Badge>
              <Badge colorScheme="purple">mongodb</Badge>
              <Badge colorScheme="purple">vegas pro</Badge>
            </HStack>
          </Box>
        </Box>
      </Box>

    </Center>


  </Box>
  )
}

export default Experience;