import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";

import theme from './Theme'
import Home from './Components/Home/Home';

function App() {
  return (<>
    <ColorModeScript initialColorMode="dark" />
    <ChakraProvider theme={theme}>
      <Home/>
    </ChakraProvider>
  </>);
}

export default App;
