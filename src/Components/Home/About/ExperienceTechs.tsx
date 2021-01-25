import { HStack } from '@chakra-ui/react'

import { BsServer, BsController, BsGraphDown } from 'react-icons/bs';
import { CgScreen, CgMathPlus } from 'react-icons/cg';
import { SiVueDotJs, SiTypescript, SiFlask, SiDjango } from 'react-icons/si';
import { VscLibrary } from 'react-icons/vsc';
import { DiReact } from 'react-icons/di';

import Tech from './Tech'

import {useTranslation} from 'react-i18next'

export const CplusCase = () => {
  const {t} = useTranslation()
  return (<>
    <HStack>
      <Tech title="stdlib/boost" size={35} icon={VscLibrary} desc={t('exp-cplus')} color="#72c550"/>
      <Tech title="desktop apps" size={35} icon={CgScreen} desc={t('exp-desk')} color="#bed640"/>
    </HStack>

    <HStack mt={2}>
      <Tech title="Game Modding" size={35} icon={BsController} desc={t('exp-game')} color="#72c550"/>
    </HStack>
  </>)
}


export const JSCase = () => {
  const {t} = useTranslation()
  return (<>
    <HStack>
      <Tech title="TypeScript" size={35} icon={SiTypescript} desc={t('exp-ts')} color="#72c550"/>
      <Tech title="React" size={35} icon={DiReact} desc={t('exp-react')} color="#72c550"/>
      <Tech title="Vue.Js" size={35} icon={SiVueDotJs} desc={t('exp-vue')} color="#bed640"/>
    </HStack>
    <HStack mt={2}>
      <Tech title="Express" size={35} icon={BsServer} desc={t('exp-express')}  color="#bed640"/>
    </HStack>
  </>)
}


export const PythonCase = () => {
  const {t} = useTranslation()
  return (<>
    <HStack>
      <Tech title="Flask" size={35} icon={SiFlask} desc={t('exp-flask')} color="#72c550"/>
      <Tech title="Numpy" size={35} icon={CgMathPlus} desc={t('exp-numpy')} color="#bed640"/>
      <Tech title="Django" size={35} icon={SiDjango} desc={t('exp-django')} color="#bed640"/>
    </HStack>

    <HStack mt={2}>
    <Tech title="Matplotlib" size={35} icon={BsGraphDown} desc={t('exp-plot')} color="#bed640"/>
      <Tech title="Pygame" size={35} icon={BsController} desc={t('exp-pygame')} color="#72c550"/>
    </HStack>

  </>)
}

