import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Buttons from "./Buttons";
import { Divider } from "@mui/material";
import { useNavigation } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CounterInfoCard({ title, desc, navigate }) {
  // const navigate = useNavigation();
  React.useEffect(() => {
    navigate;
  }, []);
  return (
    // <disv
    //   onClick={() => {
    //     // navigate("/counter");
    //   }}
    //   className="count-info-card"
    // >
    <Card sx={{ minHeight: "300px", minWidth: "480px", borderRadius: 5 }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          // background: "#4D47C3",
          // color: "white",
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: 24, fontWeight: "bolder" }}
        >
          {title}
        </Typography>
        <Divider />
        <Typography sx={{ textAlign: "center", fontSize: 16 }}>
          {/* Counter is used to increment and decrement of the count, there would
            be 2 buttons one is '+' and '-' if you click on '+' the number will
            get increased and if you click on '-' then the number get decreased */}
          {desc}
        </Typography>
      </CardContent>
    </Card>
    // </disv>
  );
}
