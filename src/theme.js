// These are my custom colors from my "Mocha Latte" palette (coolors.co) used in the Figma design.
// These match the tokens in my Figma Simple Design System layout.
import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          taupe: { value: '#A9927D' }, // Dusty Taupe used in header + sidebar buttons.
          jet: { value: '#22333B' }, // Jet Black used in navigation.
          smoke: { value: '#F2F4F3' }, // White Smoke used in main background.
          brown: { value: '#5E503F' }, // Coffee brown used in buttons & accents. 
          black: { value: '#0A0908' }, // Text.
        },
      },
    },
  },
})
