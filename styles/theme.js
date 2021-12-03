import {
  extendTheme,
  theme as defaultTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: {
    body: {
      bgColor: '#08070B',
    },
  },
}

const brandColor = defaultTheme.colors.purple

const colors = {
  brand: {
    50: brandColor[50],
    100: brandColor[100],
    200: brandColor[200],
    300: brandColor[300],
    400: brandColor[400],
    500: brandColor[500],
    600: brandColor[600],
    700: brandColor[700],
    800: brandColor[800],
    900: brandColor[900],
  },
}

const fonts = {
  heading: `"Gilroy", ${defaultTheme.fonts.heading}`,
  body: `"Gilroy", ${defaultTheme.fonts.body}`,
}

const components = {
  Button: {
    baseStyle: {
      _focus: {
        boxShadow: 'none',
      },
    },
    variants: {
      solid: () => ({
        _hover: {
          transform: 'scale(1.05)',
        },
        _focusWithin: {
          transform: 'scale(0.95)',
        },
      }),
    },
  },
  IconButton: {
    baseStyle: {
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  Link: {
    baseStyle: {
      _focus: {
        boxShadow: 'none',
      },
    },
  },
}

const theme = extendTheme(
  { styles, config, colors, fonts, components },
  withDefaultColorScheme({ colorScheme: 'brand' }),
)

export default theme
