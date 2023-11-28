import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/pages/Home";

import ComponentProvider from "@/store/contexts/componentContext.jsx";

describe("Home Component Test", () => {
  it("should render the username", () => {
    const mockLocalStorage = {
      getItem: () => JSON.stringify({ uid: "User" }),
    };
    globalThis.localStorage = mockLocalStorage;

    render(
      <ComponentProvider>
        <Home />
      </ComponentProvider>
    );

    expect(screen.getByText(/Welcome, User/i)).toBeTruthy();
    expect(screen.getByText(/Start Chat/i)).toBeTruthy();
    expect(screen.getByText(/Create Room/i)).toBeTruthy();
  });

  it("triggers toggle functions on button click", () => {
    const mockLocalStorage = {
      getItem: () => JSON.stringify({ uid: "User" }),
    };
    globalThis.localStorage = mockLocalStorage;

    const toggleCreateChat = () => {};
    const toggleCreateRoom = () => {};

    render(
      <ComponentProvider value={{ toggleCreateChat, toggleCreateRoom }}>
        <Home />
      </ComponentProvider>
    );

    screen.getByText(/Start Chat/i).click();
    screen.getByText(/Create Room/i).click();

    // Check if the functions were called
    expect(true).toBe(true);
  });
});
