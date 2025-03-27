import React from "react";

export function Footer() {
  return (
    <footer className="border-t py-3 md:py-4 bg-[var(--headfoot-background)]">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-between gap-2 md:gap-4 md:h-10 md:flex-row">
        <p className="text-center text-xs sm:text-sm leading-loose text-muted-foreground md:text-left">
          Sponsored by the Department of Energy, Office of Science, Office of High Energy Physics, award no. DE-SC0025419. Any opinions, findings, conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the views of the Department of Energy. 
        </p>
      </div>
    </footer>
  );
}
