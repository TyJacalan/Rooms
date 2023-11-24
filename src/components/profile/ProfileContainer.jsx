import React from "react";

export default function ProfileContainer({ children }) {
  return (
    <section className="h-full w-full flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-start p-4 pt-8">
      {children}
    </section>
  );
}
