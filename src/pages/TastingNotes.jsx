import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

// Detail page for one coffee. Sample content for now.
function TastingNotes() {
  return (
    <Flex gap = {8} direction = {{ base: 'column', lg: 'row' }} align = "flex-start">
      <Box flex = "1" maxW = "520px">
        {/* Quick Stats card */}
        <Box bg = "white" borderRadius = "lg" boxShadow = "sm" p = {5} mb = {5}>
          <Heading size = "sm" mb = {2} color = "brand.black">Quick Stats</Heading>
          <Text fontSize = "sm" color = "gray.700">Times Logged: 3</Text>
          <Text fontSize = "sm" color = "gray.700">My Rating: <Text as = "span" color = "#E0A800">★★★★☆</Text></Text>
        </Box>

        {/* Coffee entry card */}
        <Box bg = "white" borderRadius = "lg" boxShadow = "sm" p = {5}>
          <Heading size = "md" mb = {2} color = "brand.black">Latte</Heading>
          <Text fontSize = "sm" color = "gray.700"><strong>Description:</strong> A shot of espresso with steamed milk.</Text>
          <Text fontSize = "sm" color = "gray.700"><strong>Ingredients:</strong> Espresso, Steamed Milk</Text>
          <Text fontSize = "sm" color = "gray.700" mb = {4}><strong>Notes:</strong> Smooth and creamy. Try oat milk next time.</Text>

          {/* Buttons from my Figma design (I'll get them working in Milestone 3) */}
          <Flex gap = {3}>
            <Button size = "sm" colorPalette = "red">Edit</Button>
            <Button size = "sm" colorPalette = "red" variant = "outline">Delete</Button>
          </Flex>
        </Box>
      </Box>

      {/* Round image placeholder, like my Figma design */}
      <Flex bg = "brand.taupe" w = {{ base: '200px', lg: '280px' }} h = {{ base: '200px', lg: '280px' }} borderRadius = "full" align = "center" justify = "center" fontSize = "6xl">
        ☕
      </Flex>
    </Flex>
  )
}

export default TastingNotes
