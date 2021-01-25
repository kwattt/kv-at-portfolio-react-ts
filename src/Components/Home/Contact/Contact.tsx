
import { useTranslation } from 'react-i18next'

import { 
  Box, 
  Center, 
  Heading, 
  useColorModeValue,
  HStack
} from '@chakra-ui/react';

import Mail from './Mail'
import Github from './Github'
import Linkedin from './Linkedin'

const Contact = () => {
  const { t } = useTranslation();
  const contColor = useColorModeValue("#c0d3db", "#3c3c3c")

  return (<Box mb={5}>
    <Center>
      <Heading as="h2" size="md">
        {t('contact-title')}
      </Heading>
    </Center>

    <Box mt={2} p={2}>
      <Center>
        <HStack bg={contColor} p={3} spacing={3} alignContent="center">
          <Box><Mail/></Box>
          <Box><Linkedin/></Box>
          <Box><Github/></Box>
        </HStack>
      </Center>
    </Box>

  </Box>)
}

export default Contact;