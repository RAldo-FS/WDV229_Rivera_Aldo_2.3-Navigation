import { Box, Stack, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router'

// Sidebar links: label shown on the button and the page it goes to.
const links = [
  { label: 'Overview', to: '/overview' },
  { label: 'Dashboard', to: '/' },
  { label: 'Search', to: '/search' },
  { label: 'Tasting Notes', to: '/tasting-notes' },
  { label: 'Profile', to: '/profile' },
]

// NavLink gives us "isActive", so the current page's button stands out.
function getLinkStyle({ isActive }) {
  return {
    display: 'block',
    padding: '8px 12px',
    borderRadius: '6px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    color: '#0A0908',
    backgroundColor: isActive ? '#F2F4F3' : '#A9927D', // White Smoke when active, otherwise use color Dusty Taupe from coolors.co. 
  }
}

function Sidebar() {
  return (
    <Box as = "nav" bg = "brand.jet" w = {{ base: '100%', md: '200px' }} p = {5} flexShrink = {0}>
      <Text color = "white" fontWeight = "bold" mb = {4} textAlign = "center">
        ☕ Bean Journal
      </Text>
      <Stack gap = {3}>
        {links.map((link) => (
          // "end" makes Dashboard ("/") only active on the exact home page.
          <NavLink key = {link.to} to = {link.to} end = {link.to === '/'} style = {getLinkStyle}>
            {link.label}
          </NavLink>
        ))}
      </Stack>
    </Box>
  )
}

export default Sidebar
