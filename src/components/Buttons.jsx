import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Count from "./Count";

export default function Buttons() {
  const [plus, setPlus] = React.useState(0);
  const [minus, setMinus] = React.useState(0);
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ display: "flex", gap: "20px", alignItems: "center" }}
    >
      <Button variant="contained" onClick={() => setPlus(plus + 1)}>
        +
      </Button>
      <Count plus={plus} minus={minus} />
      <Button variant="outlined" onClick={() => setMinus(minus - 1)}>
        -
      </Button>
    </Stack>
  );
}
