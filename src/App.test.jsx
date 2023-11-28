import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

import AuthProvider from "@/store/contexts/authContext";
import ComponentProvider from "@/store/contexts/componentContext.jsx";
import MessagesProvider from "@/store/contexts/messagesContext";

describe("App Component Test", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <MemoryRouter>
        <AuthProvider>
          <MessagesProvider>
            <ComponentProvider>
              <App />
            </ComponentProvider>
          </MessagesProvider>
        </AuthProvider>
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
