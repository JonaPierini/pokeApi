import { render, screen } from "@testing-library/react";
import { AppRouter } from "../presentation/router/AppRouter";

jest.mock("../presentation/router/AppRouter", () => ({
  AppRouter: () => <div>Mocked AppRouter</div>,
}));

describe("App Component", () => {
  it("should render the AppRouter", () => {
    render(<AppRouter />);
    expect(screen.getByText("Mocked AppRouter"));
  });
});
