import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    color: {
        green:{            
            "600": "#008037",          
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'green.500',
                color: 'gray.50'
            }
        }
    }
})