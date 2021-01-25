import { HStack } from '@chakra-ui/react'

import { BsServer, BsController, BsGraphDown } from 'react-icons/bs';
import { CgScreen, CgMathPlus } from 'react-icons/cg';
import { SiVueDotJs, SiTypescript, SiFlask, SiDjango } from 'react-icons/si';
import { VscLibrary } from 'react-icons/vsc';
import { DiReact } from 'react-icons/di';

import Tech from './Tech'

export const CplusCase = () => {
  return (<>
    <HStack>
      <Tech title="stdlib/boost" size={35} icon={VscLibrary} desc="Uso y comprensión de la misma" color="#72c550"/>
      <Tech title="desktop apps" size={35} icon={CgScreen} desc="Aplicaciones simples de escritorio." color="#bed640"/>
    </HStack>

    <HStack mt={2}>
      <Tech title="Game Modding" size={35} icon={BsController} desc="Múltiples juegos y distintas modificaciones." color="#72c550"/>
    </HStack>
  </>)
}


export const JSCase = () => {
  return (<>
    <HStack>
      <Tech title="TypeScript" size={35} icon={SiTypescript} desc="Uso de Typescript" color="#72c550"/>
      <Tech title="React" size={35} icon={DiReact} desc="Creación de distintas aplicaciones, webs." color="#72c550"/>
      <Tech title="Vue.Js" size={35} icon={SiVueDotJs} desc="Creación de webs." color="#bed640"/>
    </HStack>
    <HStack mt={2}>
      <Tech title="Express" size={35} icon={BsServer} desc="Servidores básicos en Express" color="#bed640"/>
    </HStack>
  </>)
}


export const PythonCase = () => {

  return (<>
    <HStack>
      <Tech title="Flask" size={35} icon={SiFlask} desc="Construcción de API, webs interactivas, uso de websockets." color="#72c550"/>
      <Tech title="Numpy" size={35} icon={CgMathPlus} desc="Cálculos extensos y optimizados" color="#bed640"/>
      <Tech title="Django" size={35} icon={SiDjango} desc="Construcción de Blog, libreta virtual" color="#bed640"/>
    </HStack>

    <HStack mt={2}>
    <Tech title="Matplotlib" size={35} icon={BsGraphDown} desc="Gráficas" color="#bed640"/>
      <Tech title="Pygame" size={35} icon={BsController} desc="Juegos sencillos" color="#72c550"/>
    </HStack>

  </>)
}

