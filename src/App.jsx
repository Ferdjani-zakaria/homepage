import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <HomePage />
        </ThemeProvider>
    );
}

export default App;
