import React from "react";

import { Loader2 } from "lucide-react";

export default function SimpleLoader() {
  return (
    <section className="h-full w-full flex items-center justify-center">
      <Loader2 className="animate-spin" />
    </section>
  );
}
