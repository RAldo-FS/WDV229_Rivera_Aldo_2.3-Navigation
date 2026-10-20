import { useRef, useState, useEffect } from 'react'
import { Box, Button, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { CgUserlane } from "react-icons/cg";

// Default profile info, before anything is saved:
const starterProfile = {
  name: 'Aldo R.',
  email: '',
  phone: '',
  favoriteMethod: 'V60',
}

// User profile and quick stats. My sample content is gone, and now coffees come from the App to be able to show stats.
function Profile({ coffees }) {
  // Here we load the saved profile from localStorage. If nothing is saved yet, use starterProfile.
  // The same pattern as the coffee list in App.jsx
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('profile')

    if (saved) {
      return JSON.parse(saved) // Turn the saved text back into an object
    }
    return starterProfile
  })

  // Every time the profile changes, save it to localStorage as text
  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile))
  }, [profile])

  // Shows a "Profile saved!" message after clicking save
  const [saved, setSaved] = useState(false)

  // Refs read the form inputs when Save is clicked. Using the same pattern as AddCoffeeForm.
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const methodRef = useRef()

  const handleSave = (e) => {
    e.preventDefault() // Stop the page from reloading

    setProfile({
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      favoriteMethod: methodRef.current.value,
    })

    setSaved(true)
  }

  // Quick stats from my coffee journal using the forEach() method.
  let ratingTotal = 0
  let ratedCount = 0
  let topCoffee = null // This is the coffee with the highest rating

  coffees.forEach((coffee) => {
    if (coffee.rating > 0) {
      ratingTotal = ratingTotal + coffee.rating
      ratedCount = ratedCount + 1
    }

    // I need to keep track of the highest rated coffee so far.
    if (topCoffee === null || coffee.rating > topCoffee.rating) {
      topCoffee = coffee
    }
  })

  // Average = total / how many coffees were rated. Math.round() rounds it to the nearest whole star.
  let averageRating = 'N/A'
  if (ratedCount > 0) {
  averageRating = Math.round(ratingTotal / ratedCount)
  }

  return (
    <Flex gap = {6} direction = {{ base: 'column', md: 'row' }} align = "flex-start">
      {/* Left card: profile and quick stats */}
      <Box bg = "white" borderRadius = "lg" boxShadow = "sm" p = {5} w = {{ base: '100%', md: '280px' }} textAlign = "center">
        <Flex bg = "brand.taupe" borderRadius = "full" w = "96px" h = "96px" mx = "auto" align = "center" justify = "center" fontSize = "4xl">
          <CgUserlane />
        </Flex>
        <Heading size = "md" mt = {3} color = "brand.black">{profile.name || 'Your Name'}</Heading>
        <Text fontSize = "sm" color = "gray.600">Coffee enthusiast</Text>
        {profile.email && <Text fontSize = "sm" color = "gray.600">{profile.email}</Text>}
        {profile.phone && <Text fontSize = "sm" color = "gray.600">{profile.phone}</Text>}

        <Heading size = "sm" mt = {5} mb = {2} color = "brand.black" textAlign = "left">Quick Stats</Heading>
        <Stack gap = {1} fontSize = "sm" color = "gray.700" textAlign = "left">
          <Text>☕️ Coffees in journal: {coffees.length}</Text>
          <Text>⭐ Average rating: {averageRating}</Text>
          <Text>🏆 Top coffee: {topCoffee ? topCoffee.name : 'N/A'}</Text>
          <Text>🫖 Favorite method: {profile.favoriteMethod || 'N/A'}</Text>
        </Stack>
      </Box>

       {/* Right card: edit profile form. defaultValue  will fill in the saved info. */}
      <Box as = "form" onSubmit = {handleSave} bg = "white" borderRadius = "lg" boxShadow = "sm" p = {5} flex = "1" maxW = "460px" w = "100%">
        <Heading size = "md" mb = {4} color = "brand.black">Edit Profile</Heading>

        <Stack gap = {3}>
          <Box>
            <Text fontSize = "sm" color = "gray.700" mb = {1}>Display Name</Text>
            <Input ref = {nameRef} defaultValue={profile.name} onChange={() => setSaved(false)} />
          </Box>
          <Box>
            <Text fontSize = "sm" color = "gray.700" mb = {1}>Email</Text>
            <Input ref = {emailRef} type = "email" defaultValue = {profile.email} placeholder = "you@example.com" onChange={() => setSaved(false)} />
          </Box>
          <Box>
            <Text fontSize = "sm" color = "gray.700" mb = {1}>Phone</Text>
            <Input ref = {phoneRef} type = "tel" defaultValue = {profile.phone} placeholder = "(555) 555-5555" onChange = {() => setSaved(false)} />
          </Box>
          <Box>
            <Text fontSize = "sm" color = "gray.700" mb = {1}>Favorite Brew Method</Text>
            <Input ref = {methodRef} defaultValue = {profile.favoriteMethod} onChange = {() => setSaved(false)} />
          </Box>
        </Stack>

        <Flex align = "cennter" gap = {3} mt = {5}>
          <Button type = "submit" bg = "brand.brown" color = "white">Save Profile</Button>
          {/* This section should only shows after clicking Save. Typing again hides it. */}
          {saved && <Text fontSize = "sm" color = "green.600">Profile saved! ✓</Text>}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Profile
