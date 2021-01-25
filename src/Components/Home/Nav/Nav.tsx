import { 
  HStack,
  Link,
  Box,
} from "@chakra-ui/react"

import { useTranslation } from 'react-i18next';
import {RefObject} from 'react'

import ColorMode from './ColorMode'
import Lang from './Lang'

interface navT{
  start : RefObject<HTMLDivElement>,
  about : RefObject<HTMLDivElement>,
  projects : RefObject<HTMLDivElement>,
  contact : RefObject<HTMLDivElement>
}

const Nav = ({start, about, projects, contact} : navT) => {
  const { t } = useTranslation();

  const scrollToElement = (ref : RefObject<HTMLDivElement>) => {
    if(ref.current !== null){
      ref.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (<>
    <Box display={{ base: "block", sm: "none"}}>  
      <HStack spacing={5}>
      <Link onClick={() => {scrollToElement(start)}}>{t('home')}</Link>
      <Link onClick={() => {scrollToElement(about)}}>{t('about')}</Link>
      <Link onClick={() => {scrollToElement(projects)}}>{t('work')}</Link>
      </HStack>
      <HStack spacing={5}>
        <Link onClick={() => {scrollToElement(contact)}}>{t('info')}</Link>
        <Lang/>
        <ColorMode/>
      </HStack>
    </Box>

    <Box display={{ base: "none", sm: "flex"}}>
      <HStack spacing={5}>

      <Link onClick={() => {scrollToElement(start)}}>{t('home')}</Link>
      <Link onClick={() => {scrollToElement(about)}}>{t('about')}</Link>
      <Link onClick={() => {scrollToElement(projects)}}>{t('work')}</Link>
      <Link onClick={() => {scrollToElement(contact)}}>{t('info')}</Link>

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