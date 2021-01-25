import { 
  Box, 
  Center,
  Heading,
  Accordion
} from "@chakra-ui/react";

import { useTranslation } from 'react-i18next';
import {FaFirefoxBrowser} from 'react-icons/fa'
import {BsController, BsLayoutTextWindow, BsGearFill} from 'react-icons/bs'


import ProjectSection from './ProjectSection'

import Sites from './Sites'
import Others from './Others'
import Games from './Games'

const Projects = () => {
  const { t } = useTranslation();

  return (<Box>
    <Center>
      <Heading as="h2" size="md">
        {t('work-title')}
      </Heading>
    </Center>

    <Box 
      mt={5}
      borderRadius="md"
    >
      <Box>

      <Accordion allowToggle>
        <ProjectSection title={t('work-sec1')} icon={FaFirefoxBrowser} Content={Sites}/>
        <ProjectSection title={t('work-sec3')} icon={BsController} Content={Games}/>
        <ProjectSection title={t('work-sec4')} icon={BsGearFill} Content={Others}/>
      </Accordion>

      </Box>

    </Box>

  </Box>)
}

//         <ProjectSection title={t('work-sec2')} icon={BsLayoutTextWindow} Content={Sites}/>


export default Projects;