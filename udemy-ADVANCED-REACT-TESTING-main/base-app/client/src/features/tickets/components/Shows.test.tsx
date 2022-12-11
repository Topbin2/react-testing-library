import { getByRole, getByText, render, screen } from "../../../test-utils";
import { Shows } from "./Shows";

test("displays relevant show details for non-sold-out show", async () => {
  render(<Shows />);
  const shows = await screen.findAllByRole("listitem");
  const nonSoldOutShow = shows[0];

  const ticketButton = getByRole(nonSoldOutShow, "button", { name: /ticket/i });
  expect(ticketButton).toBeInTheDocument();
  const bandName = getByRole(nonSoldOutShow, "heading", {
    name: "avalanche of cheese",
  });
  expect(bandName).toBeInTheDocument();
  const bandDescription = getByText(
    nonSoldOutShow,
    "rollicking country with ambitious kazoo solos"
  );
  expect(bandDescription).toBeInTheDocument();
});
