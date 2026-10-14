import { Box, Button, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react'

// User profile and quick stats. This is sample content for now.
function Profile() {
  return (
    <Flex gap = {6} direction = {{ base: 'column', md: 'row' }} align = "flex-start">
      {/* Profile + quick stats card */}
      <Box bg = "white" borderRadius = "lg" boxShadow = "sm" p = {5} w = {{ base: '100%', md: '260px' }} textAlign = "center">
        <Flex bg = "brand.taupe" borderRadius = "full" w = "96px" h = "96px" mx = "auto" align = "center" justify = "center" fontSize = "4xl">
          🤷🏻‍♂️
        </Flex>
        <Heading size = "md" mt = {3} color = "brand.black">Aldo R.</Heading>
        <Text fontSize = "sm" color = "gray.600" mb = {4}>Coffee enthusiast since 2024</Text>

        <Stack gap = {1} fontSize = "sm" color = "gray.700" textAlign = "left">
          <Text>📒 Times logged: 15</Text>
          <Text>⭐ Average rating: 4.0</Text>
          <Text>🫖 Favorite method: Hario V60</Text>
        </Stack>
      </Box>

      {/* Edit profile form (saving comes in Milestone 3) */}
      <Box bg = "white" borderRadius = "lg" boxShadow = "sm" p = {5} flex = "1" maxW = "460px">
        <Heading size = "md" mb = {4} color = "brand.black">Edit Profile</Heading>
        <Stack gap = {3}>
          <Input placeholder = "Display Name" />
          <Input placeholder = "Phone" />
          <Input placeholder = "Email" type = "email" />
        </Stack>
        <Flex gap = {3} mt = {4}>
          <Button size = "sm" variant = "outline">Dark Mode</Button>
          <Button size = "sm" variant = "outline">Light Mode</Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Profile
