import { Icon, Link, Flex } from '@chakra-ui/react'
import {FaLinkedin} from 'react-icons/fa'

const Linkedin = () => {

  return (<Flex display="inline">
    <Link href="https://www.linkedin.com/in/jorge-humberto-gonz%C3%A1lez-ramos-57a3b9149/" isExternal>
      <Icon as={FaLinkedin} fontSize={30}/>
      <b> Linkedin</b>
    </Link>
  </Flex>)
}

export default Linkedin;