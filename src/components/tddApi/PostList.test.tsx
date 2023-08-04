import { act, render, screen, waitFor } from "@testing-library/react";
import mockPosts from "../../data/postsData.json";
import { PostList } from ".";
import axios from "axios";
import { GET_POSTS_URL, makeTestUrl } from "../../services/api/constant";

// 💡 axios 를 모킹한다!
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("PostList Component Test Code", () => {
  it("Initial rendering - Loading State", () => {
    const result = render(<PostList />);

    const loading = result.getByTestId("loading-container");
    const loadingTest = result.getByText("Loading");
    expect(loading).toBeInTheDocument();
    expect(loadingTest).toBeInTheDocument();
  });

  // Tests that fetched data is displayed when loading is complete
  it("should display fetched data when loading is complete", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockPosts, status: 200 });

    const results = await axios.get(makeTestUrl(GET_POSTS_URL));
    await act(() => {
      render(<PostList />);
    });

    await waitFor(() => {
      console.log("apireuslt", results);
      expect(axios.get).toHaveBeenCalled();
      expect(results).toBeDefined();
    });
    expect(screen.getByText("How to study react")).toBeInTheDocument();
  });
});
