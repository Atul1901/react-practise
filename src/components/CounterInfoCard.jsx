import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Buttons from "./Buttons";
import { Divider } from "@mui/material";
import { useNavigate, useNavigation } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CounterInfoCard({ title, desc, navig }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(navig);
      }}
      className="count-info-card"
    >
      <Card sx={{ minHeight: "300px", minWidth: "480px", borderRadius: 5 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: 24, fontWeight: "bolder" }}
          >
            {title}
          </Typography>
          <Divider />
          <Typography sx={{ textAlign: "center", fontSize: 16 }}>
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
