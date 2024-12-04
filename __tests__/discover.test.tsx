// Example test
import { render } from "@testing-library/react-native";
import DiscoverTab from "@/app/(tabs)/(discover)/index";

describe("Discover Tab", () => {
  test("Text renders correctly", () => {
    const { getByText } = render(<DiscoverTab />);

    getByText("Edit app/index.tsx to edit this screen.");
  });
});
