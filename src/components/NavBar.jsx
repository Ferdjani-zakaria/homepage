import { AppBar, Toolbar, Button, IconButton, Stack } from "@mui/material";
import MainIcon from "./MainIcon";
import HideOnScroll from "../utilities_Components/HideOnScroll";
import SideBar from "./SideBar";

function Navbar() {
    return (
        <HideOnScroll>
            <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "custome.offWhite" }}>
                <Toolbar
                    component="nav"
                    sx={{
                        justifyContent: "space-between",
                        maxWidth: 1150,
                        width: { xs: "100%", sm: "95%" },
                        pt: 4,
                        pb: 2,
                        marginInline: "auto",
                    }}
                >
                    <MainIcon color="black" />
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="flex-end"
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
                        color="custome.darkGrayishBlue"
                    >
                        {["Home", "New", "Popular", "Trending", "Categories"].map((item) => (
                            <Button color="inherit" sx={{ "&:hover": { color: "custome.softRed" } }}>
                                {item}
                            </Button>
                        ))}
                    </Stack>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        aria-haspopup="true"
                        sx={{ display: { xs: "block", sm: "none" } }}
                    >
                        <SideBar />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}

export default Navbar;
