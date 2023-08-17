import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

export const Sample1 = () => {
  const [disabled, setDisabled] = useState(false);
  const [on, setOn] = useState(false);
  const handleClick = () => {
    setDisabled(true);
    setTimeout(() => {
      setOn(!on);
      setDisabled(false);
    }, 500);
  };
  return (
    <Box>
      <Button
        disabled={disabled}
        onClick={handleClick}
        colorScheme="blue"
        _disabled={{ bg: "red.800" }}
      >
        {on ? "ON" : "OFF"}
      </Button>
    </Box>
  );
};
