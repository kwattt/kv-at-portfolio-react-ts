import { 
  Box, 
  Center,
  Heading
} from "@chakra-ui/react";



import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (<Box>
    <Center><Heading as="h2" size="md">{t('work-title')}</Heading></Center>

  </Box>)
}

export default Projects;