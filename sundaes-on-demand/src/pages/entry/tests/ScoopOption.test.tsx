import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScoopOption from "../ScoopOption";

describe("ScoopOption Component", () => {
  it.only("Scoop input의 수량이 0 이하이거나 20 이상이면 붉은색 border로 변경됩니다.", () => {
    render(
      <ScoopOption
        name="Vanilla"
        imagePath="/image"
        updateItemCount={jest.fn()}
      />
    );

    const vanillaInput = screen.getByRole("spinbutton", { name: /vanilla/i });
    expect(vanillaInput).not.toHaveClass("is-invalid");

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "-1");
    expect(vanillaInput).toHaveClass("is-invalid");

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "10");
    expect(vanillaInput).not.toHaveClass("in-valid");
  });
});
