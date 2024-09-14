import { render } from "@testing-library/react";
import { describe } from "vitest";
import AddressForm from "./AddressForm";

describe("random test", () => {
  test("should first", () => {
    render(<AddressForm />);
    expect(1 == 1);
  });
});
