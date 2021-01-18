import { 
  HStack,
  Link,
  Box,
} from "@chakra-ui/react"

import { useTranslation } from 'react-i18next';

import ColorMode from './ColorMode'
import Lang from './Lang'

const Nav = () => {
  const { t } = useTranslation();

  return (<>
    <Box display={{ base: "block", sm: "none"}}>  
      <HStack spacing={5}>
        <Link>{t('home')}</Link>
        <Link>{t('about')}</Link>
        <Link>{t('work')}</Link>
      </HStack>
      <HStack spacing={5}>
        <Link>{t('info')}</Link>
        <Lang/>
        <ColorMode/>
      </HStack>
    </Box>

    <Box display={{ base: "none", sm: "flex"}}>
      <HStack spacing={5}>

      <Link>{t('home')}</Link>
      <Link>{t('about')}</Link>
      <Link>{t('work')}</Link>
      <Link>{t('info')}</Link>

      <Lang/>
      <ColorMode/>

      {
        /*
          import { ExternalLinkIcon } from '@chakra-ui/icons'
          <Link isExternal>Blog <ExternalLinkIcon mx="2px"/></Link>
        */
      }
      
      </HStack>
    </Box>
  </>);
}

export default Nav;