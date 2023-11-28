import React from "react";
import error from "/error.png";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <section className="relative h-screen w-screen flex flex-col items-center justify-center bg-zinc-200 text-zinc-900">
      <div className="absolute h-[36rem] w-[36rem] rounded-full bg-gradient-to-r from-zinc-400 to-transparent blur-3xl"></div>
      <div className="flex flex-col items-center justify-center gap-4 z-10">
        <img src={error} alt="Error icon" />
        <h1 className="text-9xl font-medium">404</h1>
        <p>Sorry, this page was not found.</p>
        <Link to="/">
          <Button variant="secondary" className="mt-4">
            Back to Home
          </Button>
        </Link>
      </div>
    </section>
  );
}
