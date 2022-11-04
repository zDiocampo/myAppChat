import { render, screen } from "@testing-library/react";
import Message from "../../pages/messages/Message";

describe("Message", () => {
  beforeEach(() => {
    render(<Message message="this is a message" name="Adeyemi Kolade" />);
  });

  it("renders and display correct name", () => {
    expect(screen.getByText(/this is a message/)).toBeInTheDocument();
  });

  it("renders and display correct name", () => {
    expect(screen.getByText(/Adeyemi Kolade/)).toBeInTheDocument();
  });
});
