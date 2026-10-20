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
    // Instructor Dan, I think this is what you were warning us about. On a brand new browser nothing is saved yet, so it gives back null. That's why we check "if (saved)" below instead of assuming the data exists.
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
    newCoffee.id = Date.now()
    setCoffees([...coffees, newCoffee])
  }

  // Replaces one coffee with its updated version used by the edit button and star rating.
  // forEach() method goes through every coffee and builds a new list then the coffee with the matching id gets swapped for the updated one, the rest stay the same.
  const editCoffee = (updatedCoffee) => {
    const updatedList = []

    coffees.forEach((coffee) => {
      if (coffee.id === updatedCoffee.id) {
        updatedList.push(updatedCoffee)
      } else {
        updatedList.push(coffee)
      }
    })

    setCoffees(updatedList)
  }

  // Removes one coffee. filter keeps every coffee EXCEPT the one with this id.
  const deleteCoffee = (id) => {
    setCoffees(coffees.filter((coffee) => coffee.id !== id))
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
            <Route path = "/search" element = {<Search coffees = {coffees} onAddCoffee = {addCoffee} />} />
                {/* Two routes for the same page:
                tasting notes, from the sidebar (shows my first coffee)
                tasting notes :id, from a coffee card (:id is that coffee's id) */}
            <Route
              path = "/tasting-notes"
              element = {<TastingNotes coffees = {coffees} onUpdateCoffee={editCoffee} onDeleteCoffee = {deleteCoffee} />}
            />
            <Route
              path = "/tasting-notes/:id"
              element = {<TastingNotes coffees = {coffees} onUpdateCoffee = {editCoffee} onDeleteCoffee = {deleteCoffee} />}
            />
            <Route path="/profile" element={<Profile coffees={coffees} />} />
          </Routes>
        </Box>
      </Flex>
    </Flex>
  )

}

export default App
