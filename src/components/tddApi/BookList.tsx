import { Box, Flex, Text } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { bookItem } from "../interfaces/tddApi.interface";
import { GET_BOOKLIST_URL, makeTestUrl } from "../../services/api/constant";

export const BookList = () => {
  const [bookList, setBookList] = useState<bookItem[]>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBookList = async () => {
    try {
      const results: AxiosResponse<bookItem[]> = await axios.get(
        makeTestUrl(GET_BOOKLIST_URL)
      );
      return results.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  };

  useEffect(() => {
    getBookList()
      .then((res) => {
        setBookList(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Box>
      {!isLoading ? (
        <Box>
          {bookList?.map((book, idx) => (
            <Box
              key={`${book.title}-${idx}`}
              borderBottom="1px solid"
              borderColor="gray.200"
            >
              <Flex h="34px" lineHeight="34px">
                <Text flexBasis="50%">{book.title}</Text>
                <Text flexBasis="20%">{book.writer}</Text>
                <Text flexBasis="30%">{book.reg_date}</Text>
              </Flex>
            </Box>
          ))}
        </Box>
      ) : (
        <Text>loading....</Text>
      )}
    </Box>
  );
};
