import React from "react";

export function Footer() {
  return (
    <footer className="border-t py-3 md:py-4 bg-[var(--headfoot-background)]">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-between gap-2 md:gap-4 md:h-10 md:flex-row">
        <p className="text-center text-xs sm:text-sm leading-loose text-muted-foreground md:text-left">
          Sponsored by ...
        </p>
      </div>
    </footer>
  );
}
