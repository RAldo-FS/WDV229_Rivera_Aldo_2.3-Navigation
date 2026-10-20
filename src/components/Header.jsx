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
  // useLocation tells us which URL we're on (e.g. "/search")
  const location = useLocation()

  // Show the title for this page (or a default for unknown URLs)
  let title = pageTitles[location.pathname] || 'Coffee Bean Journal'

  // "/tasting-notes/3" isn't in the list above, so check if the URL STARTS with "/tasting-notes".
  // indexOf gives 0 when the text is found at the very beginning.
  if (location.pathname.indexOf('/tasting-notes') === 0) {
    title = 'Tasting Notes'
  }

  return (
    <Box as = "header" bg = "brand.taupe" py = {5} textAlign = "center">
      <Heading size = "lg" color = "brand.black">{title}</Heading>
    </Box>
  )
}

export default Header
