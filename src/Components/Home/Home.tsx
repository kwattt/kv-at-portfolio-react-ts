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

const Home = () => {
  const { t } = useTranslation();
  const contColor = useColorModeValue("#c0d3db", "#3c3c3c")
  const headColor = useColorModeValue("linear(to-l, #718d90,#43585a)", "linear(to-l, #dbdbdb,#aea3a3)")

  return (<>
  
      <Container 
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
          <Navbar/>
        </Center>
      </Container>


      <Container 
        bg=""
        mt={5}
      >

      <Grid
        rowGap={5}
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(1, 1fr)"
      >

        <GridItem>
          <About/>
        </GridItem>

        <GridItem>
          <Projects/>
        </GridItem>

        <GridItem>
          <Contact/>
        </GridItem>
  
      </Grid>

      </Container>


  </>);


}

export default Home;