import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";

type FormType = {
  user_id: string;
  user_name: string;
  mobile_carrier: string | undefined;
};

const initialForm: FormType = {
  user_id: "",
  user_name: "",
  mobile_carrier: undefined,
};

//1~20자 한글,영문,숫자,공백, _ 입력
export const validateName =
  /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣_][a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s_]{0,19}$/;
//1~20자 영문소문자,숫자,_ 입력 (첫글자는 영문만 허용)
export const validateId = /^[a-z][a-z0-9_]{0,19}$/;

export const UserForm = () => {
  const [form, setForm] = useState<FormType>(initialForm);
  const [errors, setErrors] = useState<string | undefined>(undefined);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors) {
      setErrors(undefined);
    }
  };

  const handleSubmit = () => {
    if (form.mobile_carrier && form.user_name && form.user_id) {
      //Success
    } else {
      const checkId = new RegExp(validateId).test(form.user_id);
      const checkName = new RegExp(validateName).test(form.user_name);
      if (!checkId && form.user_id) {
        setErrors("아이디 입력 형식이 틀렸습니다.");
        return;
      }
      if (!checkName && form.user_name) {
        setErrors("이름 입력 형식이 틀렸습니다.");
        return;
      }

      setErrors("모두 입력 해 주세요");
    }
  };
  return (
    <Box>
      <Box borderBottom="1px solid" borderColor="#dadada">
        <Text>설명 : test.each 사용하여 코드 재사용 하기</Text>
      </Box>
      <Box pt={6}>
        <form>
          <FormControl isRequired mb={4}>
            <FormLabel>아이디</FormLabel>
            <Input
              id="user-id"
              name="user_id"
              data-testid="userform-user-id"
              onChange={handleChange}
              value={form.user_id}
            />
            <Text></Text>
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel>이름</FormLabel>
            <Input
              id="user-name"
              name="user_name"
              data-testid="test-user-name"
              onChange={handleChange}
              value={form.user_name}
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel>통신사</FormLabel>
            <Select
              id="mobile-carrier"
              name="mobile_carrier"
              data-testid="test-mobile-carrier"
              onChange={handleChange}
              value={form.mobile_carrier}
            >
              <option value={undefined}>선택 안함</option>
              <option value="skt">SKT</option>
              <option value="kt">KT</option>
              <option value="lg">LG</option>
            </Select>
          </FormControl>
          <Box>
            {errors && (
              <Text color="red.400" data-testid="test-errorm-message">
                {errors}
              </Text>
            )}
          </Box>
          <Box>
            <ButtonGroup>
              <Button
                colorScheme="blue"
                onClick={handleSubmit}
                data-testid="test-submit-button"
              >
                submit
              </Button>
            </ButtonGroup>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
