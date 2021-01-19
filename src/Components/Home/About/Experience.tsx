import { 
  Box, 
  Text,
  Center,
  Heading,
  useColorModeValue
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
        <LangCase name="Python" Icon={DiPython} Content={PythonCase}/> 
        <LangCase name="JavaScript" Icon={DiJavascript} Content={JSCase}/> 
        <LangCase name="C++" Icon={SiCplusplus} Content={CplusCase}/> 
      </Box>
    </Center>


  </Box>
  )
}

export default Experience;