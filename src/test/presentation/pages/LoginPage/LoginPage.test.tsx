import { render, screen } from "@testing-library/react";
import { LoginPage } from "../../../../presentation/pages/LoginPage/LoginPage";

describe("Login Page", () => {
  it("should display Poke-Api", () => {
    render(<LoginPage />);
    expect(screen.getByText("Poke-Api"));
  });
});
