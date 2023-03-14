import React from "react";
import { useState } from "react";
import { Box, Drawer, Button } from "@mui/material";
import { List, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function SideBar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setOpen(open);
    };

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ color: "custome.veryDarkBlue" }} />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250, mt: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                        <Button onClick={toggleDrawer(false)} sx={{ textAlign: "right" }}>
                            <CloseIcon sx={{ color: "custome.veryDarkBlue" }} />
                        </Button>
                    </Box>
                    <List component="nav" sx={{ mt: 6 }}>
                        {["Home", "New", "Popular", "Trending", "Categories"].map((item) => (
                            <ListItemButton>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}

export default SideBar;
