import {
  Heading,
  Center,
  Grid,
  GridItem,
  Container, 
  Text,
  useColorModeValue, 
  Box
} from "@chakra-ui/react";

import Navbar from './Nav/Nav';
import Typed from 'react-typed';

import { useTranslation } from 'react-i18next';
import About from "./About/About";
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import { useRef } from "react";

const Home = () => {
  const { t } = useTranslation();
  const contColor = useColorModeValue("#c0d3db", "#3c3c3c")
  const headColor = useColorModeValue("linear(to-l, #718d90,#43585a)", "linear(to-l, #dbdbdb,#aea3a3)")

  const start = useRef<HTMLInputElement>(null)
  const about = useRef<HTMLInputElement>(null)
  const projects = useRef<HTMLInputElement>(null)
  const contact = useRef<HTMLInputElement>(null)

  return (<>
  
      <Container 
        ref={start}
        mt={30}
        bg={contColor}
        borderTopRadius={3}
        borderBottomRadius={3}
      >

        <Center>
          <Heading 
            as="h2" 
            size="2xl"
            bgGradient={headColor}
            bgClip="text"
          >
            kv-at
          </Heading>
        </Center>

        <Center>
          <Text>
            <b>
            <Typed 
              strings={[
                "kv",
                "Jorge Humberto González Ramos"
              ]}
              startDelay={200}
              showCursor={false}
              typeSpeed={50}
              smartBackspace={true}
            /> 
            </b>
            <Box textAlign="center"><i>{t('subtext')}</i></Box>
          </Text> 
        </Center>

        <Center>
          <Navbar start={start} about={about} projects={projects} contact={contact}/>
        </Center>
      </Container>


      <Container 
        bg=""
        mt={5}
        mb={10}
      >

      <Grid>

        <GridItem ref={about}>
          <About/>
        </GridItem>

        <GridItem ref={projects}>
          <Projects/>
        </GridItem>

        <GridItem ref={contact}>
          <Contact/>
        </GridItem>

      </Grid>

      </Container>
  </>);


}

export default Home;