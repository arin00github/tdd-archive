import { useState, useEffect } from "react";
import { Box, Heading, Spinner, Flex, Text } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { GET_POSTS_URL, makeTestUrl } from "../../services/api/constant";
import { postItem } from "../interfaces/tddApi.interface";

export const PostList = (): React.ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<postItem[]>();

  const getPostsAPI = async () => {
    try {
      const results: AxiosResponse<postItem[]> = await axios.get(
        makeTestUrl(GET_POSTS_URL)
      );
      setIsLoading(false);
      setPosts(results.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getPostsAPI();
  }, []);

  return (
    <Box h="450px">
      <Heading>TDD에서 api 실행하는 법</Heading>
      {!isLoading && posts ? (
        <Flex direction={"column"}>
          {posts.map((post, idx) => (
            <Box
              key={`${post.title}-${idx}`}
              borderBottom="1px solid"
              borderColor="gray.200"
            >
              <Flex h="34px" lineHeight="34px">
                <Text flexBasis="50%">{post.title}</Text>
                <Text flexBasis="20%">{post.writer}</Text>
                <Text flexBasis="30%">{post.reg_date}</Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      ) : (
        <Flex
          h="100%"
          justifyContent={"center"}
          alignItems={"center"}
          data-testid="loading-container"
        >
          <Flex flexDir="column" justify={"center"}>
            <Spinner />
            <Text textAlign={"center"}>Loading</Text>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};
