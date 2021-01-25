import { 
  Box,
  Heading,
  Image,
  Text,
  Badge,
  useColorModeValue,
  Link,
  Icon,
  HStack
} from "@chakra-ui/react"

import {GoMarkGithub} from "react-icons/go"

import {
  ExternalLinkIcon,
}
from '@chakra-ui/icons'

interface caseProps {

  title: string, 
  subtitle: string, 
  description: string,
  badges ?: Array<string>,
  image ?: string,
  source ?: string
  demo ?: string
}

const ProjectCase = ({title, subtitle, description, badges = [], image, source, demo} : caseProps) => {
  const contColor = useColorModeValue("#c0d3db", "#3c3c3c")

  return (
    <Box 
      borderRadius="md"
      bg={contColor}
      p={2} 
      display={{ md: "flex" }}
    >

  <Box flexShrink={0}>
    {image !== undefined &&
      <Image
        borderRadius="md"
        width={{ md: 40 }}
        src={image}
        alt="Project image"
      />  
    }

  </Box>

  <Box mt={{ base: 2, md: 0 }} ml={{ md: 4 }}>
    <Heading
      textTransform="uppercase"
      as="h2"
      size="md"
    >
      {title}
    </Heading>

    <Text
      mt={1}
      fontWeight="600"
      textTransform="uppercase"
      display="block"
      fontSize="md"
    >
      {subtitle}
    </Text>

    <Text 
      mt={2} 
    >
      {description}
    </Text>

    {demo !== undefined &&
      <>
        
        <Link href={demo} isExternal>
          Demo <ExternalLinkIcon mx="2px"/>
        </Link>
      </>
    }

    {source !== undefined &&
      <>
        <HStack spacing={2}>
          <Icon as={GoMarkGithub}/>
          <Link href={source} isExternal>
            Source <ExternalLinkIcon mx="2px"/>
          </Link>

        </HStack>
      </>
    }

    <ShowBadges props={badges}/>

  </Box>
</Box>)

}

type badgeProp = {
  props : Array<string>
}


const ShowBadges = ({props} : badgeProp) => {

  if(props) 
    return (<Box letterSpacing={1}>{
      props.map((val) => {
        return (
          <Badge mr={1}>
            {val}
          </Badge>
        )
      })
    }</Box>)
  else return <></>
}

export default ProjectCase;