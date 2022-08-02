import { rest } from "msw";
import { server } from "../../../mocks/server";
import {
  findByRole,
  render,
  screen,
} from "../../../test-utils/testing-library-utils";
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

test("서버에 요청 중 에러가 발생하면 Alert 컴포넌트가 렌더링 되어야 한다.", async () => {
  server.resetHandlers(
    rest.post("http://localhost:3030/order", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderConfirmation />);

  const alert = await screen.findByRole("alert");
  expect(alert).toBeInTheDocument();
});
