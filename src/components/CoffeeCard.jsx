import { Box, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router'
import { Rating } from 'react-simple-star-rating'
import { CiCoffeeBean } from "react-icons/ci";

// One coffee card on the Dashboard.
// The coffee's info comes in through the "coffee" prop.
function CoffeeCard({ coffee }) {
  return (
    // The whole card is a link that takes our user to the Tasting Notes page
    <Link to = {`/tasting-notes/${coffee.id}`} style = {{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <Box h = "100%" bg = "white" borderRadius = "lg" boxShadow = "sm" p = {3} _hover = {{ boxShadow: 'md' }}>
        {/* A placeholder image box */}
        <Flex bg = "brand.taupe" h = "120px" borderRadius = "md" align = "center" justify = "center" fontSize = "4xl">
          <CiCoffeeBean size = {80} color = "#5E503F" />
        </Flex>

        <Text fontWeight = "bold" mt = {3} color = "brand.black">{coffee.name}</Text>

        {/* This is a readonly rating, which shows the saved rating, but the stars can't be clicked here */}
        <Rating
          initialValue = {coffee.rating}
          readonly
          size = {18}
          fillColor = "#E0A800"
          SVGstyle = {{ display: 'inline-block' }}
        />

        <Text fontSize = "sm" color = "gray.600">Method: {coffee.method}</Text>
      </Box>
    </Link>
  )
}

export default CoffeeCard
