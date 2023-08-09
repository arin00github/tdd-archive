import { Box, Heading } from "@chakra-ui/react";
import { addUtils } from "../../utils/addUtils";

export const MockText = () => {
  return (
    <Box>
      <Heading data-testid="mock-text">{addUtils(3, 6)}</Heading>
    </Box>
  );
};
