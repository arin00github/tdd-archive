import {
  Box,
  Input,
  Select,
  FormControl,
  FormLabel,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface CreatUserProps {
  options: { label: string; value: string }[];
}

export const initialOptions: { label: string; value: string }[] = [
  { label: "TMS개발", value: "TMS-group" },
  { label: "VMS개발", value: "VMS-group" },
  { label: "혁신개발", value: "innovation-development" },
];

type ForeSet = {
  name: string;
  group: string | undefined;
};

const initialForm = { name: "", group: undefined };

export const CreateUser = ({ options = initialOptions }: CreatUserProps) => {
  const [form, setForm] = useState<ForeSet>(initialForm);

  const [errorMsg, setErrorMsg] = useState<string>();

  const [resultMsg, setResultMsg] = useState<string>();

  const onFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (resultMsg) setResultMsg(undefined);
    if (errorMsg) setErrorMsg(undefined);
  };

  const onSubmitBtnClick = () => {
    if (form.group && form.name) {
      setResultMsg("등록 성공!");
    } else {
      setErrorMsg("모두 다 작성해 주세요");
    }
  };

  const onResetBtnClick = () => {
    setForm(initialForm);
    if (resultMsg) setResultMsg(undefined);
    if (errorMsg) setErrorMsg(undefined);
  };
  return (
    <Box>
      <FormControl id="job-name">
        <FormLabel>name</FormLabel>
        <Input
          name="name"
          value={form.name}
          onChange={onFormChange}
          data-testid="creatuser-input-name-2"
        />
      </FormControl>
      <FormControl id="job-group">
        <FormLabel>group</FormLabel>
        <Select
          name="group"
          onChange={onFormChange}
          value={form.group}
          data-testid="create-select-group-2"
        >
          <option value={undefined}>선택 안함</option>
          {options.map((opt) => (
            <option value={opt.value} key={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      </FormControl>
      {errorMsg && (
        <Text mt={4} color="red.600">
          {errorMsg}
        </Text>
      )}
      <ButtonGroup pt={6}>
        <Button
          onClick={onSubmitBtnClick}
          colorScheme="blue"
          data-testid="submit-btn"
        >
          Submit
        </Button>
        <Button onClick={onResetBtnClick} colorScheme="blue" variant="outline">
          reset
        </Button>
      </ButtonGroup>
      <Box>{resultMsg && <Box>{resultMsg}</Box>}</Box>
    </Box>
  );
};
