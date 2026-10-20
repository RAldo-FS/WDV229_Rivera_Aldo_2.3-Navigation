import { useRef, useState } from 'react'
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { Rating } from 'react-simple-star-rating'

// This is my form for logging/recording a new coffee entry.
// When the form is submitted, it sends the new entry to the App.jsx through the "onAddCoffee" prop =)
function AddCoffeeForm({ onAddCoffee }) {
  // Last month we used "Refs". Using them again to read text inputs when the form is submitted. 
  const nameRef = useRef()
  const methodRef = useRef()
  const notesRef = useRef()

  // I couldn't use Refs for the react simple star rating library because Refs only read text inputs, and star rating isn't an input. So I need to use useState.
  const [rating, setRating] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault() // stop our page from reloading

    // Read/Record what was typed into each input
    const name = nameRef.current.value
    const method = methodRef.current.value
    const notes = notesRef.current.value
    
    // If the user didn't add a name, don't add coffee entry.
    if (name === '') return 

    onAddCoffee({
      name: name,
      method: method || 'Pour-over', // If method is empty, use 'Pour-over' instead.
      rating: rating,
      notes: notes,
    })

    // Lets clear the form for the next coffee entry
    // e.target is the form, reset() empties its inputs
    e.target.reset()
    setRating(0)
  }

  return (
    <Box as = "form" onSubmit = {handleSubmit} bg = "white" borderRadius = "lg" boxShadow = "sm" p = {5} maxW = "600px">
      <Heading size = "md" mb = {3} color = "brand.black">Log a New Coffee</Heading>

      <Flex gap = {3} direction = {{ base: 'column', sm: 'row' }} mb = {3}>
        <Input ref = {nameRef} placeholder = "Coffee name" />
        <Input ref = {methodRef} placeholder = "Brew method (V60, French Press...)" />
      </Flex>

      <Input ref = {notesRef} placeholder = "Tasting notes (optional)" mb = {3} />

      <Flex align = "center" gap = {2} mb = {4}>
        <Text fontSize = "sm" color = "gray.700">My rating:</Text>
        <Rating
          onClick = {setRating}
          initialValue = {rating}
          size = {26}
          fillColor = "#E0A800"
          SVGstyle = {{ display: 'inline-block' }}
        />
      </Flex>

      <Button type = "submit" bg = "brand.brown" color = "white">Add Coffee</Button>
    </Box>
  )
}

export default AddCoffeeForm
