import { Box, Stack } from "@chakra-ui/react";

import PC from './ProjectCase'
import { useTranslation } from 'react-i18next';

const Games = () => {
  const { t } = useTranslation();

  return (<Box>
    <Stack>
      <PC
        title="ForestRedemption" 
        subtitle="Red Dead Redemption II mod" 
        description={t('work3-1')} 
        badges={["C++", "Scripting", "WIP"]}
        source="https://github.com/kwattt/ForestRedemption"
      />
    </Stack>
  </Box>)
}

export default Games;