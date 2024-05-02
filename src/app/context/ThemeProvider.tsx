"use client";

import { ThemeProvider as Provider } from "next-themes";
import { darkTheme, lightTheme } from "../styles/theme.css";

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
