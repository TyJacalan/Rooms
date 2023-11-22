import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Hammer } from "lucide-react";

export default function BuildPage() {
  return (
    <section className="relative h-full w-full flex flex-col items-center justify-center text-zinc-900 dark:text-zinc-400">
      <div className="flex flex-col items-center justify-center gap-4 z-10">
        <Hammer size={48} strokeWidth={1} />
        <h1 className="text-4xl font-medium">Under Construction</h1>
        <p>Sorry, this page is being built.</p>
        <Link to="/">
          <Button className="mt-4">Back to Home</Button>
        </Link>
      </div>
    </section>
  );
}
