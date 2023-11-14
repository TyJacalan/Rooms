import { Outlet, Navigate } from "react-router-dom";

export default function RootLayout() {
  const accessToken = JSON.parse(localStorage.getItem("profile")) || null;

  return (
    <>
      {!accessToken ? (
        <Navigate to={"/signin"} />
      ) : (
        <section>
          <Outlet />
        </section>
      )}
    </>
  );
}
