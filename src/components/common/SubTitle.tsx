import { Heading } from "@chakra-ui/react";

export const FixedSubTitle = () => {
  return <Heading data-testid="fixed-title">Fixed Title</Heading>;
};

export const SubTitle = ({ title }: { title: string }) => {
  return <Heading>{title}</Heading>;
};
