"use client";

import { ThemeProvider } from "next-themes";
import { light } from "../styles/theme.css";
import { useEffect, useState } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="lightTheme"
      enableSystem={false}
      value={{
        lightTheme: light,
      }}
    >
      {children}
    </ThemeProvider>
  );
}
