import React from "react";
import { Box, Card, Typography, CardContent, CardMedia, Link } from "@mui/material";
function ArticleCard(props) {
    const info = props.info;
    const cardLink = {
        color: "#000",
        textDecoration: "none",
    };
    return (
        <Card
            sx={{
                display: "flex",
                width: { xs: "95%", md: "28%" },
                mt: 0,
                maxHeight: 180,
                cursor: "pointer",
                "&:hover": {
                    "& .cardLink": {
                        color: "#e9ab53",
                    },
                },
            }}
        >
            <CardMedia component="img" sx={{ width: "30%" }} image={info.img} alt="Article Image" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h4" color={"custome.grayishBlue"} fontWeight={700}>
                        {info.num}
                    </Typography>
                    <Link variant="subtitle1" component="div" fontWeight={800} sx={cardLink} className="cardLink">
                        {info.title}
                    </Link>
                    <Typography variant="body2" color="text.secondary" component="div">
                        {info.subTitle}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

export default ArticleCard;
