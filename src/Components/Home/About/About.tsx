import { 
  Box,
} from "@chakra-ui/react";

import Experience from "./Experience";
import Intro from "./Intro";

const About = () => {

  return (<Box p={4}>

  <Intro/>
  <br/>
  <Experience/>

  </Box>)
}

export default About;