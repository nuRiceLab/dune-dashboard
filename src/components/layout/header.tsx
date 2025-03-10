import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex h-24 items-center gap-6 border-b px-8",
        "w-full bg-[var(--headfoot-background)] shadow-sm"
      )}
    >
      <div className="flex items-center gap-5 ml-10">
        <Image
          src="/dune-rice-logo.png" 
          alt="DUNE Logo"
          width={52}
          height={52}
          className="rounded-md"
          priority
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">DUNE Training Experience Hub</h1>
        </div>
      </div>
      <div className="ml-auto">
        <ThemeToggle className="w-auto" />
      </div>
    </header>
  );
}
