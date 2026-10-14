import { Box, Heading } from '@chakra-ui/react'
import { useLocation } from 'react-router'

// Page titles from my Figma prototype, matched and linked to each URL
const pageTitles = {
  '/': 'Hello Barista!',
  '/overview': 'Overview',
  '/search': 'The Bean Finder',
  '/tasting-notes': 'Tasting Notes',
  '/profile': 'User Profile & Quick Stats',
}

function Header() {
  // useLocation tells us which URL we're on, e.g. "/search"
  const location = useLocation()

  // Show the title for this page (or a default for unknown URLs)
  const title = pageTitles[location.pathname] || 'Coffee Bean Journal'

  return (
    <Box as="header" bg="brand.taupe" py={5} textAlign="center">
      <Heading size="lg" color="brand.black">{title}</Heading>
    </Box>
  )
}

export default Header
