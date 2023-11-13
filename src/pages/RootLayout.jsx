import { Outlet, Navigate } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <section>
        <Outlet />
      </section>
    </>
  );
}
