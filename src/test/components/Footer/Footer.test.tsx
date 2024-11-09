import { render, screen } from "@testing-library/react";
import { Footer } from "../../../presentation/components/ui/Footer/Footer";
import "@testing-library/jest-dom";

describe("Footer Component", () => {
  it("should render the Footer with correct text", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/footer/i);
    expect(footerElement).toBeInTheDocument();
  });
});
