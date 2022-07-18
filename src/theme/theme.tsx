import { extendTheme } from '@chakra-ui/react';
import '@fontsource/montserrat';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'montserrat, sans-serif',
        color: '#000000',
      },

      h1: { fontSize: '3rem', fontWeight: '900', maxWidth: '70ch', lineHeight: '1.6' },
      h2: { fontSize: '2rem', fontWeight: '800', maxWidth: '70ch', lineHeight: '1.6' },
      h3: { fontSize: '1rem', fontWeight: '600', maxWidth: '70ch', lineHeight: '1.6' },
      p: { fontSize: '1rem', maxWidth: '70ch', lineHeight: '1.6' },
      ul: { listStyleType: 'none', gap: '24px' },
      a: { textDecoration: 'none !important' },
    },
    '.chakra-box': {
      // borderColor: 'red !important',
      opacity: 1,
      paddingRight: '5em',
    },
  },

  components: {},
  colors: {
    brand: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },

  layerStyles: {
    header: {},
    footer: {},
    hero100vh: {
      height: '100vh',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      bagroundSize: 'cover',
    },
  },
  textStyles: {
    header: {},
    footer: {},
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1536px',
  },
});

export default theme;
