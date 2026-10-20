import { useRef, useState } from 'react'
import { Box, Button, Flex, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import { Link, useParams, useNavigate } from 'react-router'
import { Rating } from 'react-simple-star-rating'
import { CiCoffeeBean } from "react-icons/ci";

// Detail page for one coffee. User should be able to rate, delete, or edit. 
// coffees, onUpdateCoffee, and onDeleteCoffee all come from App.jsx.
function TastingNotes({ coffees, onUpdateCoffee, onDeleteCoffee }) {
  // Imported "useParams" from React hooks provided by the React Router library. This hook allows us to access the dynamic parameters (variables) from the current URL. useParams() reads the id from the URL for Tasting Notes.
  const {id} = useParams() 

  // useNavigate lets us send the user to another page from code, after deleting. 
  const navigate = useNavigate()

  // This variable shows the edit form with true, and shows the coffee info with false.
  const [isEditing, setIsEditing] = useState(false)

  // Following the same pattern from "AddCoffeeForm", using Refs to read the edit form inputs when Save is clicked. This React Hook (useRef) is a feature that lets us store a value that won't trigger a rerender when it changes. 
  const nameRef = useRef()
  const methodRef = useRef()
  const notesRef = useRef()

  // Next up we need to find the coffee to show. The id from the URL ("3") is text, but our ids are numbers (3), so Number() converts it.
  // I'm filtering to give us a list of matching coffees, and [0] grabs the first (and only) match. 
  // No id in the URL (meaning user clicked the sidebar), I need to show the first coffee in my journal. 
  let coffee = coffees[0]
  if (id) {
    const matches = coffees.filter((c) => c.id === Number(id))
    coffee = matches[0]
  }

  // If the journal is empty with nothing to show or the id doesn't exist, notify the user.
  if (!coffee) {
    return (
      <Text color="gray.700">
        Coffee not found.{' '}
        <Link to="/" style={{ textDecoration: 'underline' }}>Go to the Dashboard</Link> to add one.
      </Text>
    )
  }

  // Clicking a star saves the new rating right away. 
  // We build the full coffee object with the new rating and send it up to App.jsx
  const handleRating = (newRating) => {
    onUpdateCoffee({
      id: coffee.id,
      name: coffee.name,
      method: coffee.method,
      rating: newRating,
      notes: coffee.notes,
    })
  }

  // Save button in the edit form
  const handleSave = (e) => {
    e.preventDefault() // Stops the page from reloading

    const name = nameRef.current.value
    if (name === '') return // Don't allow an empty name

    onUpdateCoffee({
      id: coffee.id,
      name: name,
      method: methodRef.current.value,
      rating: coffee.rating, // Keep the same rating
      notes: notesRef.current.value,
    })

    setIsEditing(false) // Go back to showing the coffee's info
  }

  // Delete button: remove the coffee, then go back to the Dashboard
  const handleDelete = () => {
    onDeleteCoffee(coffee.id)
    navigate('/')
  }

  return (
    <Flex gap = {8} direction = {{ base: 'column', lg: 'row' }} align = "flex-start">
      <Box flex = "1" maxW = "520px" w = "100%">
        {/* Quick Stats card */}
        <Box bg = "white" borderRadius = "lg" boxShadow = "sm" p = {5} mb = {5}>
          <Heading size = "sm" mb = {2} color = "brand.black">Quick Stats</Heading>
          <Text fontSize = "sm" color = "gray.700">Brew Method: {coffee.method}</Text>

          <Flex align = "center" gap = {2}>
            <Text fontSize = "sm" color = "gray.700">My Rating:</Text>
            {/* Clickable stars. The "key={coffee.id}"" resets the stars when switching to a different coffee. */}
            <Rating
              key = {coffee.id}
              initialValue = {coffee.rating}
              onClick = {handleRating}
              size = {24}
              fillColor = "#E0A800"
              SVGstyle = {{ display: 'inline-block' }}
            />
          </Flex>
        </Box>

        {/* My coffee entry card */}
        <Box bg = "white" borderRadius = "lg" boxShadow = "sm" p = {5}>
          {isEditing ? (
            // Edit is the form with the current values already filled in (defaultValue)
            <Box as = "form" onSubmit = {handleSave}>
              <Text fontSize = "sm" color = "gray.700" mb = {1}>Coffee name</Text>
              <Input ref = {nameRef} defaultValue = {coffee.name} mb = {3} />

              <Text fontSize = "sm" color = "gray.700" mb = {1}>Brew method</Text>
              <Input ref = {methodRef} defaultValue = {coffee.method} mb = {3} />

              <Text fontSize = "sm" color = "gray.700" mb = {1}>Tasting notes</Text>
              <Textarea ref = {notesRef} defaultValue = {coffee.notes} rows = {4} mb = {4} />

              <Flex gap = {3}>
                <Button type = "submit" size = "sm" bg = "brand.brown" color = "white">Save</Button>
                <Button size = "sm" variant = "outline" onClick = {() => setIsEditing(false)}>Cancel</Button>
              </Flex>
            </Box>
          // Shorthand ternary operator that reads as "else".  
          ) : ( 
            // VIEW MODE: show the coffee's info with the Edit and Delete buttons
            <Box>
              <Heading size = "md" mb = {2} color = "brand.black">{coffee.name}</Heading>
              <Text fontSize = "sm" color = "gray.700"><strong>Method:</strong> {coffee.method}</Text>
              <Text fontSize = "sm" color = "gray.700" mb = {4}>
                <strong>Tasting Notes:</strong> {coffee.notes || 'No notes yet.'}
              </Text>

              {/* Buttons from my Figma design */}
              <Flex gap = {3}>
                <Button size = "sm" colorPalette = "red" onClick = {() => setIsEditing(true)}>Edit</Button>
                <Button size = "sm" colorPalette = "red" variant = "outline" onClick = {handleDelete}>Delete</Button>
              </Flex>
            </Box>
          )}
        </Box>
      </Box>

      {/* Round image placeholder, like the one in my Figma design */}
      <Flex
        bg = "brand.taupe"
        w = {{ base: '200px', lg: '280px' }}
        h = {{ base: '200px', lg: '280px' }}
        borderRadius = "full"
        align = "center"
        justify = "center"
        fontSize = "6xl"
        flexShrink = {0}
      >
        {/* React Icon. Ran "npm install react-icons". Imported at the top of this file. */}
        <CiCoffeeBean size = {80} color = "#5E503F" />
      </Flex>
    </Flex>
  )
}

export default TastingNotes
