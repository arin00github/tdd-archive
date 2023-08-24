import { useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export const Sample1 = () => {
  const [disabled, setDisabled] = useState(false);
  const [on, setOn] = useState(false);
  const handleClick = () => {
    console.log("handleClick");
    setDisabled(true);
    setTimeout(() => {
      setOn(!on);
      setDisabled(false);
    }, 500);
  };
  return (
    <Box>
      <Box borderBottom="1px solid" borderColor="#dadada">
        <Text>
          설명 : 버튼을 클릭하면 바로 disabled 였다가 setTimeout 시간이 지난 후
          disabled가 false가 됨
        </Text>
      </Box>
      <Box pt={6}>
        <Flex>
          <Button
            disabled={disabled}
            onClick={handleClick}
            colorScheme="blue"
            _disabled={{ bg: "red.800" }}
          >
            {on ? "Click" : "Click Again"}
          </Button>
          <Text fontSize={18} ml={4}>
            {disabled ? "disabled" : "available"}
          </Text>
        </Flex>
      </Box>
      <Box pt={6}>
        <Text>fineByTestId 와 같은 'find'로 시작하는 함수들 비동기로 사용</Text>
        <Text>waitfor 함수를 사용</Text>
      </Box>
    </Box>
  );
};
