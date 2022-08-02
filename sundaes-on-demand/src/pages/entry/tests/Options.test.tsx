import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = (await screen.findAllByRole("img", {
    name: /scoop$/i,
  })) as HTMLImageElement[];
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  const toppingImages = (await screen.findAllByRole("img", {
    name: /topping$/i,
  })) as HTMLImageElement[];
  expect(toppingImages).toHaveLength(3);

  const altText = toppingImages.map((el) => el.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});

test("Scoop input의 값이 유효하지 않을 경우 Scoops total에 업데이트 되지 않습니다.", async () => {
  render(<Options optionType="scoops" />);

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: /vanilla/i,
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "-1");

  const total = screen.getByText("Scoops total: $", { exact: false });
  expect(total).toHaveTextContent("0.00");
});
