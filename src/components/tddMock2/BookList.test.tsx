import { render, screen, waitFor } from "@testing-library/react";

import { BookList } from "./BookList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
describe("BookList Component Test Code", () => {
  // Tests that fetched data is displayed when loading is complete
  it("should display fetched data when loading is complete", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BookList />
      </QueryClientProvider>
    );

    waitFor(() => {
      expect(screen.getByText("How to study react")).toBeInTheDocument();
    });
  });
});
