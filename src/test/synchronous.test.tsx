import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Demo1 from "../components/Demo1";
import Demo2 from "../components/Demo2";
import Demo3 from "../components/Demo3";
import Demo4 from "../components/Demo4";
import Demo5 from "../components/Demo5";
import Demo6 from "../components/Demo6";
import Demo7 from "../components/Demo7";

it("my test-case 1", () => {
  render(<Demo1 />);

  expect(screen.getByText("My name is Lek")).toBeInTheDocument();
});

it("my test-case 2", () => {
  render(<Demo2 />);

  expect(screen.getByTestId("button")).toBeDisabled();
  expect(screen.getByTestId("input")).toBeDisabled();
  expect(screen.getByTestId("button2")).not.toBeDisabled();
});

it("my test-case 3", () => {
  render(<Demo3 />);
  //   screen.debug();

  expect(screen.getByTestId("empty")).toBeEmptyDOMElement();
  expect(screen.getByTestId("not-empty")).not.toBeEmptyDOMElement();
  expect(screen.getByTestId("with-whitespace")).not.toBeEmptyDOMElement();
});

it("my test-case 4", () => {
  render(<Demo4 />);

  const ancestor = screen.getByTestId("ancestor");
  const descendant = screen.getByTestId("descendant");
  const nonExistantElement = screen.getByTestId("does-not-exist");

  expect(ancestor).toContainElement(descendant);
  expect(descendant).not.toContainElement(ancestor);
  expect(ancestor).not.toContainElement(nonExistantElement);
});

it("my test-case 5", () => {
  render(<Demo5 />);

  //   screen.debug();
  const textInput = screen.getByTestId("input-text");
  const numberInput = screen.getByTestId("input-number");
  const emptyInput = screen.getByTestId("input-empty");
  const selectInput = screen.getByTestId("select-number");

  expect(textInput).toHaveValue("text");
  expect(numberInput).toHaveValue(5);
  expect(emptyInput).not.toHaveValue();
  expect(selectInput).toHaveValue(["second", "third"]);
});

it("my test-case 6", () => {
  render(<Demo6 />);

  expect(screen.getAllByTestId("li").length).toBe(4);
});

it("my test-case 7", () => {
  render(<Demo7 />);
  expect(screen.getByRole("button", { name: "Fetch" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Fetch" }));
  expect(screen.getAllByRole("item").length).toBe(4);

  fireEvent.click(screen.getByRole("button", { name: "Fetch" }));
  expect(screen.getAllByRole("item").length).toBe(8);

  fireEvent.click(screen.getByRole("button", { name: "Fetch" }));
  expect(screen.getAllByRole("item").length).toBe(12);

  fireEvent.click(screen.getByRole("button", { name: "Clear" }));
  expect(screen.queryByRole("item")).not.toBeInTheDocument();
});
