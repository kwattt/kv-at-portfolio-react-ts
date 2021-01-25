import { Icon, Link, Flex } from '@chakra-ui/react'
import {FaGithub} from 'react-icons/fa'

const Github = () => {

  return (<Flex display="inline">
    <Link href="https://www.github.com/kwattt/" isExternal>
      <Icon as={FaGithub} fontSize={30}/>
      <b> Github</b>
    </Link>
  </Flex>)
}

export default Github;