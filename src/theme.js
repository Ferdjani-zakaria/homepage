import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        custome: {
            softOrange: "#e9ab53",
            softRed: "#f15e50",
            offWhite: "#fffdfa",
            grayishBlue: "#c5c6ce",
            darkGrayishBlue: "#5d5f79",
            veryDarkBlue: "#00001a",
        },
    },

    typography: {
        fontSize: 13,
        fontFamily: "Inter, Roboto, Helvetica,Ariel, 'sans-serif'",
        body2: {
            color: "#c5c6ce",
        },
    },
    Link: {
        color: "#000",
        "&:hover": {
            color: "#e9ab53",
            textDecoration: "none",
        },
    },
});
