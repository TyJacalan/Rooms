import React from "react";

export default function ProfileInfoContainer({ children }) {
  return (
    <section className="flex flex-col items-center sm:items-start">
      {children}
    </section>
  );
}
