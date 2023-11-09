import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

//theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#ECEAE7",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter  >
     <ChakraProvider theme={theme}>
      <App/>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
