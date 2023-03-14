import React from "react";
import { Box, Stack } from "@mui/material";
import ArticleCard from "./ArticleCard";
import retroPcImg from "../assets/images/image-retro-pcs.jpg";
import topLaptopImg from "../assets/images/image-top-laptops.jpg";
import gamingGrowthImg from "../assets/images/image-gaming-growth.jpg";

const ArticlesInfo = [
    { num: "01", title: "Reviving Retro PCs", subTitle: "What happens when old PCs are given modern upgrades", img: `${retroPcImg}` },
    { num: "02", title: "The 10 Laptops of 2023", subTitle: "The best picks for various needs and budgets", img: `${topLaptopImg}` },
    { num: "03", title: "The Growth of Gaming", subTitle: "How the pandemic has sparked fresh opportunities", img: `${gamingGrowthImg}` },
];
function ArticleSlider() {
    return (
        <Box>
            <Stack spacing={5} sx={{ flexDirection: { xs: "column", md: "row" }, alignItems: "baseline", justifyContent: "space-between" }}>
                {ArticlesInfo.map((info) => (
                    <ArticleCard info={info} key={info.num} />
                ))}
            </Stack>
        </Box>
    );
}

export default ArticleSlider;
