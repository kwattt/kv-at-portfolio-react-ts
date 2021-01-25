import { Box, Stack } from "@chakra-ui/react";

import PC from './ProjectCase'
import { useTranslation } from 'react-i18next';

const Others = () => {
  const { t } = useTranslation();

  return (<Box>
    <Stack>
      <PC
        title="twscrap" 
        subtitle="A twitter scraping package" 
        description={t('work4-1')} 
        badges={["Python", "Package"]}
        source="https://github.com/kwattt/twscrap"
      />
      <PC
        title="Meteor Defense" 
        subtitle="A simple python game" 
        description={t('work4-2')} 
        badges={["Python", "pygame"]}
        source="https://github.com/kwattt/meteorDefense"
      />
      <PC
        title="react-cap" 
        subtitle="A sniffer with a react interface" 
        description={t('work4-3')} 
        badges={["Python", "sanic", "react", "scapy"]}
        source="https://github.com/kwattt/react-cap"
      />
    </Stack>
  </Box>)
}


export default Others;