"use client";

import { ReactNode } from "react";
import { ProgressProvider } from "@/lib/progress";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ProgressProvider>
      <div>{children}</div>
    </ProgressProvider>
  );
}
