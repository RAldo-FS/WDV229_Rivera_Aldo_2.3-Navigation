import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { Link } from 'react-router'

// Sample coffees for now. I'll work on my localstorage in Milestone 3 with real entries.
const coffees = [
  { name: 'Ethiopian Yirgacheffe', rating: '★★★★★', method: 'V60' },
  { name: 'Colombian Geisha', rating: '★★★★☆', method: 'Chemex' },
  { name: 'Hawaiian Kona', rating: '★★★★☆', method: 'French Press' },
  { name: 'Kenya AA', rating: '★★★☆☆', method: 'Espresso' },
]

function Dashboard() {
  return (
    <Box>
      <Text color = "gray.700" mb = {6}>
        Here are the coffees in your journal. Click a card to see its tasting notes.
      </Text>

      <SimpleGrid columns = {{ base: 1, sm: 2, lg: 4 }} gap = {5}>
        {coffees.map((coffee) => (
          // Each card will link to the Tasting Notes (detail) page
          <Link key = {coffee.name} to = "/tasting-notes" style = {{ textDecoration: 'none', display: 'block', height: '100%' }}>
            <Box h = "100%" bg = "white" borderRadius = "lg" boxShadow = "sm" p = {3} _hover = {{ boxShadow: 'md' }}>
              {/* Placeholder image box */}
              <Flex bg = "brand.taupe" h = "120px" borderRadius = "md" align = "center" justify = "center" fontSize = "4xl">
                ☕
              </Flex>
              <Text fontWeight = "bold" mt = {3} color = "brand.black">{coffee.name}</Text>
              <Text color = "#E0A800">{coffee.rating}</Text>
              <Text fontSize = "sm" color = "gray.600">Method: {coffee.method}</Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard
