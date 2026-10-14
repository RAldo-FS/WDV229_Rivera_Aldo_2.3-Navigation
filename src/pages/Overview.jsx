import { Box, Heading, List, Text } from '@chakra-ui/react'

// Overview page from my Figma prototype: This page will go over what the app is and how it's organized.
function Overview() {
  return (
    <Box bg = "white" borderRadius = "lg" boxShadow = "sm" p = {6} maxW ="800px" color = "gray.800">
      <Heading size = "md" mb = {3} color = "brand.black">☕ Bean Journal</Heading>
      <Text mb = {4}>
        <strong>Purpose:</strong> A super minimal, personal coffee logging app built for coffee
        enthusiasts to track, rate, and refine their daily brewing and tasting notes.
      </Text>

      <Heading size = "sm" mb = {2} color = "brand.black">Application Structure</Heading>
      <List.Root ps = {5} gap = {2} mb = {4}>
        <List.Item><strong>Dashboard:</strong> A grid of logged coffees with quick glance ratings.</List.Item>
        <List.Item><strong>Search:</strong> Look up coffee drinks by name or ingredient.</List.Item>
        <List.Item><strong>Tasting Notes:</strong> A detail view for each coffee with ratings and notes.</List.Item>
        <List.Item><strong>Profile:</strong> User info plus quick stats about coffee habits.</List.Item>
      </List.Root>

      <Heading size = "sm" mb = {2} color = "brand.black">Built With</Heading>
      <Text>React, Vite, React Router, and Chakra UI (Simple Design System layout from Figma #7).</Text>
    </Box>
  )
}

export default Overview
