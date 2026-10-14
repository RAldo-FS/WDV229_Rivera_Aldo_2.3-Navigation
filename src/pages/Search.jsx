import { Box, Flex, Input, Stack, Text } from '@chakra-ui/react'

// For now just sample results. These will come from the SampleAPIs Coffee API in our Milestone 3 Instructor Dan. 
const results = [
  { title: 'Black Coffee', description: 'Simple, strong, and classic.', ingredients: 'Coffee' },
  { title: 'Latte', description: 'A shot of espresso with steamed milk.', ingredients: 'Espresso, Steamed Milk' },
  { title: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam.', ingredients: 'Espresso, Steamed Milk, Foam' },
]

function Search() {
  return (
    <Flex gap = {8} direction = {{ base: 'column', lg: 'row' }}>
      {/* Left side: search bar + results */}
      <Box flex = "1" maxW = "500px">
        <Input placeholder = "Search for a coffee drink..." bg = "white" mb = {5} />

        <Stack gap = {4}>
          {results.map((item) => (
            <Box key = {item.title} bg = "white" borderRadius = "lg" boxShadow = "sm" p = {4}>
              <Text fontWeight = "bold" color = "brand.black">{item.title}</Text>
              <Text fontSize = "sm" color = "gray.700"><strong>Description:</strong> {item.description}</Text>
              <Text fontSize = "sm" color = "gray.700"><strong>Ingredients:</strong> {item.ingredients}</Text>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* This is my right side image placeholder for the big photo from my Figma design. */}
      <Flex flex="1" display={{ base: 'none', lg: 'flex' }} bg="brand.taupe" h="360px" borderRadius="lg" align="center" justify="center" fontSize="6xl">
        ☕
      </Flex>
    </Flex>
  )
}

export default Search
