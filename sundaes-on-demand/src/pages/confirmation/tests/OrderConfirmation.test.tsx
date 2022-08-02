import { render, screen } from "../../../test-utils/testing-library-utils";
import OrderConfirmation from "../OrderConfirmation";

test("서버에 요청 중일 때는 Loading 텍스트가 렌더링 되어야 한다.", async () => {
  render(<OrderConfirmation />);

  const loading = screen.getByText("Loading");
  expect(loading).toBeInTheDocument();

  const thankYouHeader = await screen.findByRole("heading", {
    name: /thank you/i,
  });
  expect(thankYouHeader).toBeInTheDocument();

  const notLoading = screen.queryByText("Loading");
  expect(notLoading).not.toBeInTheDocument();
});
