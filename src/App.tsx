import React from 'react';
import { 
  ChakraProvider, 
} from '@chakra-ui/react';
import { Card } from './components/Card/Card'
import { Login } from "./services/login";

function App() {
  return (
    <ChakraProvider >
      <Card headerTitle='Faça o Login' textButton='Entrar' onClickButton={Login} />
    </ChakraProvider>

  );
}

export default App;
