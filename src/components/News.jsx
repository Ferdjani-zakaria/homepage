import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";

function News() {
    return (
        <Box sx={{ maxWidth: 400, p: 3, bgcolor: "#00001a" }}>
            <Typography variant="h4" color={"custome.softOrange"} fontWeight={600} sx={{ mb: 3 }}>
                New
            </Typography>
            <Stack
                spacing={4}
                divider={
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ borderBottomWidth: 1, bgcolor: "custome.darkGrayishBlue", width: "100%" }}
                    />
                }
                color={"common.white"}
            >
                <Box sx={{ ":hover .newsTitle": { color: "#e9ab53" } }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, cursor: "pointer" }} className="newsTitle">
                        Hydrogen vs Electric cars
                    </Typography>
                    <Typography variant="body2">Will hydrogen-fuiled cars ever catch up to EVs?</Typography>
                </Box>
                <Box sx={{ ":hover .newsTitle": { color: "#e9ab53" } }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, cursor: "pointer" }} className="newsTitle">
                        The downsides of AI artistry
                    </Typography>
                    <Typography variant="body2">What are the possible adverse effects of on-demand AI image generation?</Typography>
                </Box>
                <Box sx={{ ":hover .newsTitle": { color: "#e9ab53" } }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, cursor: "pointer" }} className="newsTitle">
                        Is VC Funding Drying up?
                    </Typography>
                    <Typography variant="body2">Private funding by VC firms is down 50% YOY. We take a look at what that means</Typography>
                </Box>
            </Stack>
        </Box>
    );
}

export default News;
