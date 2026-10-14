import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Chakra UI gives us prebuilt styled components (Box, Button, Input...)
import { ChakraProvider } from '@chakra-ui/react'
// BrowserRouter lets React Router control which page shows for each URL
import { BrowserRouter } from 'react-router'
import { system } from './theme.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value = {system}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
