# https://github.com/testing-library/jest-dom/

# create project
npx create-react-app demo2 --template typescript


# basic test-cases
- define components that will be tested
- create ./test/basic.text.tsx
  
test("ToBeDisabled", () => {
  render(<ToBeDisabled />);

  expect(screen.getByTestId("button")).toBeDisabled();
  expect(screen.getByTestId("input")).toBeDisabled();
  expect(screen.getByText("link")).not.toBeDisabled();
});  

https://github.com/testing-library/jest-dom/
---------------
Custom matchers
toBeDisabled
toBeEnabled
toBeEmptyDOMElement
toBeInTheDocument
toBeInvalid
toBeRequired
toBeValid
toBeVisible
toContainElement
toContainHTML
toHaveAccessibleDescription
toHaveAccessibleName
toHaveAttribute
toHaveClass
toHaveFocus
toHaveFormValues
toHaveStyle
toHaveTextContent
toHaveValue
toHaveDisplayValue
toBeChecked
toBePartiallyChecked
toHaveErrorMessage