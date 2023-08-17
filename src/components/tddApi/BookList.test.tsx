import { act, render, screen, waitFor } from "@testing-library/react";
//import mockPosts from "../../data/postsData.json";

import axios from "axios";
import { GET_BOOKLIST_URL, makeTestUrl } from "../../services/api/constant";
import { BookList } from "./BookList";

// 💡 axios 를 모킹한다!
// jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("BookList Component Test Code", () => {
  // Tests that fetched data is displayed when loading is complete
  it("should display fetched data when loading is complete", async () => {
    // mockedAxios.get.mockResolvedValue({ data: mockPosts, status: 200 });

    const results = await axios.get(makeTestUrl(GET_BOOKLIST_URL));
    await act(() => {
      render(<BookList />);
    });
    //expect(axios.get).toHaveBeenCalled();
    console.log("result", results);
    expect(results).toBeDefined();
    expect(screen.getByText("How to study react")).toBeInTheDocument();
  });
});
