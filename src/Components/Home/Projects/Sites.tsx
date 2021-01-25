import { Box, Stack } from "@chakra-ui/react";

import PC from './ProjectCase'

import kLogo from '../../../static/tologo.png'
import { useTranslation } from 'react-i18next';

const Sites = () => {
  const { t } = useTranslation();

  return (<Box>
    <Stack spacing={2}>
    <PC  
      title="Sophii" 
      subtitle="discord bot" 
      description={t('work1-1')} 
      image="https://sophii.kv-at.com/static/media/logo.6e215ce4.webp"
      badges={["Javascript", "React", "Python", "Flask-Quart", "API", "PostgreSQL"]}
      demo="https://sophii.kv-at.com/"
    />

    <PC 
      title="Portfolio" 
      subtitle="this site :)" 
      description={t('work1-2')} 
      image={kLogo}
      badges={["Typescript", "React", "Chakra-UI"]}
      demo="https://www.kv-at.com"
      source="https://github.com/kwattt/kv-at-portfolio-react-ts"
    />

    </Stack>
  </Box>)
}

export default Sites;