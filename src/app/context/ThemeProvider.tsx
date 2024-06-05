"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { light } from "../styles/theme.css";

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
