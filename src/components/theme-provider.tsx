"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <NextThemesProvider 
      {...props}
      enableSystem={true}
      enableColorScheme={true}
      disableTransitionOnChange={false} // Enable transitions on theme change
    >
      {children}
    </NextThemesProvider>
  );
}
