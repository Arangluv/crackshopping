"use client";

import { darkTheme, lightTheme } from "../styles/theme.css";
import { ThemeProvider as Provider, useTheme } from "next-themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider
      attribute="class"
      defaultTheme="light"
      value={{ light: lightTheme, dark: darkTheme }}
    >
      {children}
    </Provider>
  );
}
