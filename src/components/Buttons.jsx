import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Count from "./Count";

export default function Buttons() {
  const [plus, setPlus] = React.useState(5);
  const [value, setValue] = React.useState("");

  console.log("value>", value);
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ display: "flex", gap: "20px", alignItems: "center" }}
    >
      <Button
        variant="contained"
        onClick={() => {
          setPlus(plus + 1);
          setValue("green");
        }}
      >
        +
      </Button>
      <div style={{ color: value }}>
        <Count plus={plus} />
      </div>
      <Button
        variant="outlined"
        onClick={() => {
          if (plus !== 0) {
            setPlus(plus - 1);
          }
          setValue("red");
        }}
      >
        -
      </Button>
    </Stack>
  );
}
