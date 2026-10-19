import { useState, useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Routes, Route } from 'react-router'

import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Overview from './pages/Overview.jsx'
import Search from './pages/Search.jsx'
import TastingNotes from './pages/TastingNotes.jsx'
import Profile from './pages/Profile.jsx'
import starterCoffees from './data/starterCoffees.js'

function App() {
  // The coffee list lives here in App (a lifted state), so every page can use it.
  // On the first load, check localStorage. If nothing is saved yet, use the sample coffees.
  const [coffees, setCoffees] = useState(() => {
    // localStorage.getItem('coffees') reads what's saved under the name 'coffees'.
    // Instructor Dan, I think this is what you were warning us about. On a brand new browser nothing is saved yet, so it gives back null.
    const saved = localStorage.getItem('coffees')

    if (saved) {
      // JSON.parse turns the saved text back into an array
      return JSON.parse(saved)
    }
    return starterCoffees // nothing saved yet, so start with the sample coffees
  })

  // Every time the coffee list changes, save it to localStorage.
  // localStorage only stores text, so JSON.stringify turns the array into text. Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify 
  // You can see it in DevTools, Application, Local Storage.
  useEffect(() => {
    localStorage.setItem('coffees', JSON.stringify(coffees))
  }, [coffees])

  // Adds a new coffee to the end of the list.
  // Pages call this through a prop (callback prop).
  const addCoffee = (newCoffee) => {
    setCoffees([...coffees, newCoffee])
  }

  return (
    <Flex direction = "column" minH="100vh">
      {/* Header shows on every page */}
      <Header />

      <Flex flex = "1" direction = {{ base: 'column', md: 'row' }}>
        {/* Sidebar navigation shows on every page */}
        <Sidebar />

        {/* Only this part changes when the URL changes */}
        <Box as = "main" flex = "1" bg = "brand.smoke" p = {{ base: 4, md: 8 }}>
          <Routes>
            <Route path = "/" element = {<Dashboard coffees = {coffees} onAddCoffee = {addCoffee} />} />
            <Route path = "/overview" element = {<Overview coffees = {coffees} />} />
            <Route path="/search" element={<Search coffees={coffees} onAddCoffee={addCoffee} />} />
            <Route path = "/tasting-notes" element = {<TastingNotes />} />
            <Route path = "/profile" element = {<Profile />} />
          </Routes>
        </Box>
      </Flex>
    </Flex>
  )
}

export default App
