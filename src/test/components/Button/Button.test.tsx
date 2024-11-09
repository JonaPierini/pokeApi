import { render } from "@testing-library/react";
import { Button } from "../../../presentation/components/ui/Button/Button";

describe("Button", () => {
  it("should render the Button", () => {
    const buttonProps = {
      title: "Test",
      onClick: jest.fn(),
    };
    render(
      <Button onClick={buttonProps.onClick} title={buttonProps.title}></Button>
    );
    expect(buttonProps).toEqual({
      title: "Test",
      onClick: buttonProps.onClick,
    });
  });
});
