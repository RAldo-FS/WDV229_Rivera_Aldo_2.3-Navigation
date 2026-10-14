import { Box, Flex } from '@chakra-ui/react'
import { Routes, Route } from 'react-router'

import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Overview from './pages/Overview.jsx'
import Search from './pages/Search.jsx'
import TastingNotes from './pages/TastingNotes.jsx'
import Profile from './pages/Profile.jsx'

function App() {
  return (
    <Flex direction = "column" minH = "100vh">
      {/* Display header on every page. */}
      <Header />

      <Flex flex = "1" direction = {{ base: 'column', md: 'row' }}>
        {/* Dsiplay sidebar navigation on every page. */}
        <Sidebar />

        {/* Only this part should change when our URL changes. */}
        <Box as="main" flex="1" bg="brand.smoke" p={{ base: 4, md: 8 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/search" element={<Search />} />
            <Route path="/tasting-notes" element={<TastingNotes />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Flex>
    </Flex>
  )
}

export default App
