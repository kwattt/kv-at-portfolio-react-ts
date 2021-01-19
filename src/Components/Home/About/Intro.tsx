import { 
  Box,
  Image,
  Text
} from "@chakra-ui/react";

import { useTranslation } from 'react-i18next';

import Myself from './../../../static/me2.jpg'

const Intro = () => {
  const { t } = useTranslation();

  return (<Box>
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
  )
}

export default Intro;