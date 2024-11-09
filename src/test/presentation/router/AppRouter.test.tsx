import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../../presentation/router/AppRouter";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useAuthStore } from "../../../presentation/store/useAuthStore";

jest.mock("../../../presentation/store/useAuthStore");
const mockUseAuthStore = useAuthStore as unknown as jest.Mock;

describe("AppRouter", () => {
  it("should render the AuthNavigation if are not authenticated", () => {
    mockUseAuthStore.mockReturnValue({ status: "unauthenticated" });
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AppRouter />
      </MemoryRouter>
    );
    const authElement = screen.getByText("Ingresar"); //
    expect(authElement).toBeInTheDocument();
  });

  it("should render the AppNavigation if are authenticated", () => {
    mockUseAuthStore.mockReturnValue({ status: "authenticated" });
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <AppRouter />
      </MemoryRouter>
    );
    const authElement = screen.getByText("Nav-Bar"); //
    expect(authElement).toBeInTheDocument();
  });
});
