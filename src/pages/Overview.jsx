import { Box, Button, Flex, Heading, List, SimpleGrid, Text } from '@chakra-ui/react'
import { Link } from 'react-router'

// Overview page from my Figma prototype: This page will go over what the app is and how it's organized through this "Overview" function.
function Overview({ coffees }) {
  // Variables for quick stats from our existing coffee list passed down from the App.jsx. We're adding up the ratings with the .forEach() method to skip coffees that haven't been rated yet.
  const totalCoffees = coffees.length
  // Add up the ratings with forEach (skip coffees that haven't been rated yet)
  let ratingTotal = 0
  let ratedCount = 0

  coffees.forEach((coffee) => {
    if (coffee.rating > 0) {
      ratingTotal = ratingTotal + coffee.rating
      ratedCount = ratedCount + 1
    }
  })

  // Average = total ÷ how many coffees were rated. Math.round() rounds it to the nearest whole star.
  let averageRating = 'N/A'
  if (ratedCount > 0) {
  averageRating = Math.round(ratingTotal / ratedCount)
  }

  return (
    <Box maxW = "800px">
      {/* About the app */}
      <Box bg = "white" borderRadius = "lg" boxShadow = "sm" p = {6} maxW ="800px" color = "gray.800" mb = {6}>
        <Heading size = "md" mb = {3} color = "brand.black">☕ Bean Journal</Heading>
        <Text mb = {4}>
          <strong>Purpose:</strong> A super minimal, personal coffee logging application built for coffee enthusiasts to track, rate, and refine their daily brewing parameters and tasting notes.
        </Text>

        <Heading size = "sm" mb = {2} color = "brand.black">Application Structure</   Heading>
        <List.Root ps = {5} gap = {2} mb = {4}>
          <List.Item><strong>Dashboard:</strong> A grid of logged coffees with quick glance ratings.</List.Item>
          <List.Item><strong>Search:</strong> Look up coffee drinks by name or ingredient.</List.Item>
          <List.Item><strong>Tasting Notes:</strong> A detail view for each coffee with ratings and notes.</List.Item>
          <List.Item><strong>Profile:</strong> User info plus quick stats about coffee habits.</List.Item>
        </List.Root>

        <Heading size = "sm" mb = {2} color = "brand.black">Built With</Heading>
        <Text>React, Vite, React Router, and Chakra UI (Simple Design System layout from Figma #7).      
        </Text>
      </Box>

        {/* This section controls our journal at a glance (i.e. updates entries as I the user adds coffees) */}
        <SimpleGrid columns = {{ base: 1, sm: 2 }} gap = {4} mb = {6}>
          <Box bg = "white" borderRadius = "lg" boxShadow = "sm" p = {5} textAlign = "center">
            <Text fontSize = "3xl" fontWeight = "bold" color = "brand.brown">{totalCoffees}</Text>
            <Text color = "gray.600">Coffees in my journal</Text>
          </Box>
          <Box bg = "white" borderRadius = "lg" boxShadow = "sm" p = {5} textAlign = "center">
            <Text fontSize = "3xl" fontWeight = "bold" color = "brand.brown">{averageRating}</Text>
            <Text color = "gray.600">Average rating</Text>
          </Box>
        </SimpleGrid>

        {/* Buttons: I have one button pointing towards an outside website, and the other directed within the app. */}
        <Flex gap = {3} wrap = "wrap">
          {/* Used Link for a page inside my app with React Router */}
          <Link to = "/">
            <Button bg = "brand.brown" color = "white">Go to my Dashboard</Button>
          </Link>

          {/* Used an HTML href tag to connect the user to an outside website. I want the user to click the button to open a separate tab in their browser, and applied the " rel = "noopener noreferrer" " attribute as a safety setting for new tabs. I placed MDN link below for reference. */}
          {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noopener */}
          <a href = "https://sampleapis.com/api-list/coffee" target = "_blank" rel = "noopener noreferrer">
            <Button variant = "outline" borderColor = "brand.brown" color = "brand.brown">
              View the Coffee API
            </Button>
          </a>
        </Flex>
      </Box>
  )
}

export default Overview