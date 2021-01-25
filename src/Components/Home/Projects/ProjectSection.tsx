import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Icon 
} from '@chakra-ui/react'
import { ComponentType } from "react";


import { IconType } from "react-icons/lib";

interface projectC {
  title: string,
  icon: IconType,
  Content : ComponentType
}


const ProjectSection = ({title, icon, Content} : projectC) => {
  
  return (<AccordionItem>
    <AccordionButton>
      <Box flex="1" textAlign="left">
        {title}
      </Box>
      <Icon
        aria-label="Icon"
        fontSize={30}
        as={icon}
      />
      <AccordionIcon />
    </AccordionButton>

    <AccordionPanel pb={4}>
      <Content/>
    </AccordionPanel>
  </AccordionItem>)
}

export default ProjectSection