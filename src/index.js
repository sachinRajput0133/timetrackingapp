import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { TimerHolder } from './context/AppStore';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <TimerHolder>
        <App />
      </TimerHolder>

      <ColorModeScript />
    </ChakraProvider>
  </StrictMode>
);
