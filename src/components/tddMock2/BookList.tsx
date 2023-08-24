import { Box, Flex, Text } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { bookItem } from "../interfaces/tddApi.interface";
import { GET_BOOKLIST_URL, makeTestUrl } from "../../services/api/constant";
import { useQuery } from "@tanstack/react-query";

/**
 *
 * @description MSW로 설정한 가짜 API가 실행되는지 테스트
 */

export const BookList = () => {
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

  const { data, isLoading } = useQuery({
    queryKey: ["book-list"],
    queryFn: getBookList,
  });

  return (
    <Box>
      <Box borderBottom="1px solid" borderColor="#dadada">
        <Text>설명 : react-query는 모킹처리 하지 않아도 코드가 작동한다</Text>
      </Box>
      <Box pt={6}>
        {!isLoading ? (
          <Box>
            {data?.map((book, idx) => (
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
    </Box>
  );
};
