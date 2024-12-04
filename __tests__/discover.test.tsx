// Example test
import { render } from "@testing-library/react-native";
import DiscoverTab from "@/app/(tabs)/(discover)/index";

describe("Discover Tab", () => {
  test("Renders correctly", () => {
    const { getByText } = render(<DiscoverTab />);

    getByText("Text renders correctly on Discover tab");
  });
});
