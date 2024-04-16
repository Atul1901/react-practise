import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Buttons from "./Buttons";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function InformationCard() {
  const navigate = useNavigate();
  const [inputName, setInputName] = React.useState("");
  return (
    <Card>
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
          Details
        </Typography>
        <Divider />
        <Typography sx={{ fontSize: "22px", fontWeight: 400 }}>
          Enter Name:
        </Typography>
        <input
          className="input-field"
          placeholder="Naam Daaaal !!!"
          onChange={(e) => setInputName(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            navigate("/home", { state: { name: inputName } });
          }}
          sx={{ width: "100px" }}
        >
          Continue
        </Button>
      </CardContent>
    </Card>
  );
}
