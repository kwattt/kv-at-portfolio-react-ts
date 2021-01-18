import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"


import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';

const Lang = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng : string) => {
    i18n.changeLanguage(lng);
  }

  return (<>
    <Menu>
      <MenuButton variant="">
      {t('lang')}
      </MenuButton>
      <MenuList>
          <MenuItem
            onClick={() => changeLanguage('en')}
          >
            {t('eng')}
          </MenuItem>
          <MenuItem
            onClick={() => changeLanguage('es')}
          >
            {t('esp')}
          </MenuItem>
        </MenuList>
    </Menu>
  </>)
}

export default Lang;