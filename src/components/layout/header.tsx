import React from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  toggleSidebar: () => void;
  isMobile: boolean;
}

export function Header({ toggleSidebar, isMobile }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex h-16 md:h-24 items-center gap-2 md:gap-6 border-b px-4 md:px-8",
        "w-full bg-[var(--headfoot-background)] shadow-sm"
      )}
    >
      {isMobile && (
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      )}
      <div className={cn("flex items-center gap-2 md:gap-5", isMobile ? "ml-0" : "ml-10")}>
        <img
          src="/dune-rice-logo.png"
          alt="DUNE Logo"
          width={isMobile ? 40 : 52}
          height={isMobile ? 40 : 52}
          className="rounded-md object-contain"
        />
        <div>
          <h1 className={cn("font-bold tracking-tight text-primary", 
            isMobile ? "text-xl" : "text-3xl"
          )}>
            {isMobile ? "DUNE TECH" : "DUNE Training ExperienCe Hub (DUNE-TECH)"}
          </h1>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle className="w-auto" />
      </div>
    </header>
  );
}
