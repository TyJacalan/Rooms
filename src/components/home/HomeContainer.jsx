import React from "react";

export default function HomeContainer({ children }) {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center px-8 py-4 gap-8 text-center">
      {children}
    </section>
  );
}
