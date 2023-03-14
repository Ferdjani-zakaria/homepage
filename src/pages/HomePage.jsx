import { Grid, Box } from "@mui/material";
import React from "react";
import Hero from "../components/Hero";
import News from "../components/News";
import ArticleSlider from "../components/ArticleSlider";

const style = { px: { xs: 2, sm: 6 }, pb: 5, mt: 15, maxWidth: 1200, marginInline: "auto" };

function HomePage() {
    return (
        <Box sx={style}>
            <Grid container spacing={8} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} md={8}>
                    <Hero />
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <News />
                </Grid>
                <Grid item md={12}>
                    <ArticleSlider />
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;
