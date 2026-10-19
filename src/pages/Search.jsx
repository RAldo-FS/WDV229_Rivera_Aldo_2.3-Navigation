import { useState, useEffect } from 'react'
import { Box, Button, Flex, Image, Input, Spinner, Stack, Text } from '@chakra-ui/react'

// My SampleAPIs Coffee API from my week 1 research.
const myApiUrl = 'https://api.sampleapis.com/coffee/hot'

// My coffee drinks in this search page come from the API. Then they get added to journal. 
// The two arguments "coffee" and "onAddCoffee" come from my App, same as Dashboard.
function Search({coffees, onAddCoffee}) {
  // Variables for coffee drinks from the API, plus loading and error messages for our ".catch()"
  const [apiCoffees, setApiCoffees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Here I'm adding what the user types in the search bar, and storing it in state.
  const [searchTerm, setSearchTerm] = useState('')
  
  // Fetch our API data once, when the Dashboard first loads ([] = run once)
    useEffect(() => {
      // fetch() asks the API for data. It takes a moment, so we wait for each step with .then()
      fetch(myApiUrl)
        // Step 1: the API sends back text. .json() turns that text into a JavaScript array
        .then((response) => response.json())
        // Step 2: Now save the array of coffee drinks in state
        .then((data) => {
          setApiCoffees(data)
          setLoading(false)
        })
        // .catch() only runs if something went wrong, like no internet, or API is down
        .catch(() => {
          setError('Sorry! Could not load coffee drinks right now.')
          setLoading(false)
        })
    }, [])

    // Used toLowerCase() method to ignore capital letters, in case user types in "latte", we still find "Latte".
    const term = searchTerm.toLowerCase()

    // Next up, I need to build the list of drinks that match the search entry (in an empty array, hence "build") and filter through with the forEach() method in an arrow function.
    const results = []

    apiCoffees.forEach((drink) => {
      if (!drink.title) return // If NotDrinkName, skip it.
      
      // Here, indexOf 
      let isMatch = drink.title.toLowerCase().indexOf(term) !== -1

      // I also need to check each ingredient (milk, espresso...)
      if (drink.ingredients) {
        drink.ingredients.forEach((ingredient) => {
          if (ingredient.toLowerCase().indexOf(term) !== -1) {
            isMatch = true
          }
        })
      }
      
      if (isMatch) {
        results.push(drink)
      }
    })

    // Is this drink/title already in my journal? Lets filter the returns matching coffees.
    const isInJournal = (title) => {
      const matches = coffees.filter((coffee) => coffee.name === title)
      return matches.length > 0
    }

    // We're turning an API drink into a journal entry and sending it to our App.jsx
    const addDrink = (drink) => {
      onAddCoffee({
        id: Date.now(), // current time in milliseconds is a different id every time
        name: drink.title,
        method: 'Café drink',
        rating: 0,
        notes: drink.description,
      })
    }

    // Matching my Figma design for the first results photo on the right side.
    let featuredDrink = null
    if (results.length > 0) {
      featuredDrink = results[0]
    }

    return (
    <Flex gap = {8} direction = {{ base: 'column', lg: 'row' }} align = "flex-start">
      {/* Left side: search bar and results */}
      <Box flex = "1" maxW = "560px" w = "100%">
        <Input
          placeholder = "Search by drink name or ingredient (try 'milk')..."
          value = {searchTerm}
          onChange = {(e) => setSearchTerm(e.target.value)}
          bg = "white"
          mb = {5}
        />

        {/* Loading, error, no results messages */}
        {loading && (
          <Flex align = "center" gap = {2} color = "gray.600"><Spinner size = "sm" /> Loading coffee drinks...</Flex>
        )}
        {error && <Text color = "red.600">{error}</Text>}
        {!loading && !error && results.length === 0 && (
          <Text color = "gray.600">No drinks match "{searchTerm}".</Text>
        )}

        <Stack gap = {4}>
          {/* Will be one result card per matching drink */}
          {results.map((drink) => (
            <Box key = {drink.id} bg = "white" borderRadius = "lg" boxShadow = "sm" p = {4}>
              <Text fontWeight = "bold" color = "brand.black">{drink.title}</Text>
              <Text fontSize = "sm" color = "gray.700" lineClamp = {3}>
                <strong>Description:</strong> {drink.description}
              </Text>

              {/* Showing each ingredient as a small tag */}
              <Flex gap = {2} wrap = "wrap" mt = {2}>
                {drink.ingredients && drink.ingredients.map((ingredient) => (
                  <Text key = {ingredient} fontSize = "xs" bg = "brand.smoke" px = {2} py = {1} borderRadius = "md" color = "gray.700">
                    {ingredient}
                  </Text>
                ))}
              </Flex>

              {/* Button needs to change once the drink is in my journal */}
              {isInJournal(drink.title) ? (
                <Button size = "xs" mt = {3} bg = "gray.400" color = "white" disabled>
                  In my journal ✔
                </Button>
              ) : (
                <Button size = "xs" mt = {3} bg = "brand.brown" color = "white" onClick = {() => addDrink(drink)}>
                  + Add to Journal
                </Button>
              )}
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Right side (big photo) of the first result. Tan box will show if there's no photo. */}
      <Box flex = "1" display = {{ base: 'none', lg: 'block' }} bg = "brand.taupe" h = "380px" borderRadius = "lg" overflow = "hidden">
        {featuredDrink && featuredDrink.image && (
          <Image
            src = {featuredDrink.image}
            alt = {featuredDrink.title}
            w = "100%"
            h = "100%"
            objectFit = "cover"
            onError = {(e) => (e.target.style.display = 'none')}
          />
        )}
      </Box>
    </Flex>
  )
}

export default Search
