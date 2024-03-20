import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFF'
        },
        secondary: {
            main: '#000'
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontWeightBold: 'bold'
    }
});

export default theme;