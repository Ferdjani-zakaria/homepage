import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import imageWebMobile from "../assets/images/image-web-3-mobile.jpg";
import imageWebDesk from "../assets/images/image-web-3-desktop.jpg";

function Hero() {
    return (
        <Box>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12}>
                    <Box
                        component="img"
                        sx={{
                            width: "100%",
                            maxHeight: 250,
                            display: { xs: "inline-block", sm: "none" },
                        }}
                        alt="web 3"
                        src={imageWebMobile}
                    ></Box>
                    <Box
                        component="img"
                        sx={{
                            width: "100%",
                            maxHeight: 230,
                            display: { xs: "none", sm: "inline-block" },
                        }}
                        alt="web 3"
                        src={imageWebDesk}
                    ></Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h3" fontWeight={800}>
                        The Bright Future of Web 3.0?
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography component="p" variant="body1" sx={{ pb: 5 }}>
                        We dave into the next evolution of the web that claims to put the power of the platforms back into the hands of the
                        people. But is it really fulfilling it's promise?
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            px: 6,
                            py: 2,
                            backgroundColor: "custome.softRed",
                            "&:hover": { backgroundColor: "custome.veryDarkBlue" },
                            letterSpacing: "0.4rem",
                        }}
                    >
                        READ MORE
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Hero;
