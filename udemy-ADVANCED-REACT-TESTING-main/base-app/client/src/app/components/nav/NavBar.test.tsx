import { App } from "../../../App";
import { fireEvent, render, screen } from "../../../test-utils";
import { NavBar } from "./NavBar";

const testUser = {
  email: "test@test.com",
};

test("로그인 했을 경우 Sign out 버튼이 렌더링된다.", () => {
  render(<NavBar />, { preloadedState: { user: { userDetails: testUser } } });
  const signInButton = screen.getByRole("button", { name: /sign out/i });
  expect(signInButton).toBeInTheDocument();
  const email = screen.getByText(testUser.email);
  expect(email).toBeInTheDocument();
});

test("로그인 하지 않았을 경우 signIn 버튼이 렌더링된다.", () => {
  render(<NavBar />);
  const signInButton = screen.getByRole("button", { name: "Sign in" });
  expect(signInButton).toBeInTheDocument();
});

test("Sign in 버튼을 클릭하면 signin 페이지로 이동한다.", () => {
  const { history } = render(<NavBar />);
  const button = screen.getByRole("button", { name: /sign in/i });
  fireEvent.click(button);

  expect(history.location.pathname).toBe("/signin");
});
