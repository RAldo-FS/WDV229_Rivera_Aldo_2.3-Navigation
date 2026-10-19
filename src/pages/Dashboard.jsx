import { useState, useEffect } from 'react'
import { Box, Button, Flex, Heading, Image, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import CoffeeCard from '../components/CoffeeCard.jsx'
import AddCoffeeForm from '../components/AddCoffeeForm.jsx'

// SampleAPIs Coffee API (from my Week 1 research). Im milestone 2, I had manual entries just for presentation. For milestone 3 we now have real API data coming in for localStorage.
const API_URL = 'https://api.sampleapis.com/coffee/hot'

function Dashboard({ coffees, onAddCoffee }) {
  // Variables for coffee drinks from the API, plus loading and error messages for our ".catch()"
  const [apiCoffees, setApiCoffees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch our API data once, when the Dashboard first loads ([] = run once)
  useEffect(() => {
    // fetch() asks the API for data. It takes a moment, so we wait for each step with .then()
    fetch(API_URL)
      // Step 1: the API sends back text. .json() turns that text into a JavaScript array
      .then((response) => response.json())
      // Step 2: Now save the array of coffee drinks in state
      .then((data) => {
        setApiCoffees(data)
        setLoading(false)
      })
      // .catch() only runs if something went wrong, like no internet, or API is down
      .catch(() => {
        setError('Sorry! Could not load coffee suggestions right now.')
        setLoading(false)
      })
  }, [])

  // This variables job is to suggest 3 new coffee drinks that aren't already in their journal.
  const suggestions = []
    apiCoffees.forEach((drink) => {
    // Our .filter() method returns every coffee in my journal with the same name as this drink
    const matches = coffees.filter((coffee) => coffee.name === drink.title)
    const alreadyInJournal = matches.length > 0

    // Add the drink if: it has a name, it's not in my journal yet, and we have fewer than 3
    if (drink.title && !alreadyInJournal && suggestions.length < 3) {
      suggestions.push(drink)
    }
  })

  // This function is responsible for turning an API drink into a journal entry.   
  const addSuggestion = (drink) => {
    onAddCoffee({
      id: Date.now(), // current time in milliseconds returns a different id every time
      name: drink.title,
      method: 'Café drink',
      rating: 0,
      notes: drink.description,
    })
  }

  return (
    <Box>
      <Text color = "gray.700" mb = {6}>
        Here are the coffees in your journal. Click a card to see its tasting notes.
      </Text>

      {/* Coffees saved in localStorage */}
      <SimpleGrid columns = {{ base: 1, sm: 2, lg: 4 }} gap = {5} mb = {8}>
        {/* The .map() method is like forEach, but it returns something for each item.
            Here it returns one CoffeeCard per coffee, which React outputs on the page.
            key = {coffee.id} helps React keep track of each card. */}
        {coffees.map((coffee) => (
          // Each card will link to the Tasting Notes (detail) page
          <CoffeeCard key = {coffee.id} coffee = {coffee} />
        ))}
      </SimpleGrid>

      {/* Suggestions from our API */}
      <Heading size="md" mb={3} color="brand.black">Try Something New</Heading>
      {loading && <Flex align="center" gap={2} color="gray.600" mb={8}><Spinner size="sm" /> Loading suggestions...</Flex>}
      {error && <Text color="red.600" mb={8}>{error}</Text>}

      <SimpleGrid columns = {{ base: 1, sm: 3 }} gap = {4} maxW = "720px" mb = {8}>
        {/* One suggestion box per coffee drink */}
        {suggestions.map((drink) => (
          <Box key = {drink.id} bg = "white" borderRadius = "lg" boxShadow = "sm" p = {3}>
            {/* Styling for the tan box behind the photo. If the photo is missing/broken, the tan box will show instead. */}
            <Box bg = "brand.taupe" h = "100px" borderRadius = "md" overflow = "hidden">
              {/* This section will show an API photo, only if it provided one */}
              {drink.image && (
                <Image
                  src = {drink.image}
                  alt = {drink.title}
                  w = "100%"
                  h = "100%"
                  objectFit = "cover"
                  onError = {(e) => (e.target.style.display = 'none')}
                />
              )}
            </Box>
            <Text fontWeight = "bold" fontSize = "sm" mt = {2} color = "brand.black">{drink.title}</Text>
            <Button size = "xs" mt = {2} bg = "brand.brown" color = "white" onClick = {() => addSuggestion(drink)}>
              + Add to Journal
            </Button>
          </Box>
        ))}
      </SimpleGrid>

      {/* Form to log my own coffee */}
      <AddCoffeeForm onAddCoffee={onAddCoffee} />
    </Box>
  )
}

export default Dashboard
