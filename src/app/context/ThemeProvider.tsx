"use client";

// import { ThemeProvider } from "next-themes";
// import { darkTheme, lightTheme } from "../styles/theme.css";

// export default function Provider({ children }: { children: React.ReactNode }) {
//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="light"
//       value={{ light: lightTheme, dark: darkTheme }}
//     >
//       {children}
//     </ThemeProvider>
//   );
// }

import { ThemeProvider } from "next-themes";
import { light } from "../styles/theme.css";

export default function Provider({ children }: { children: React.ReactNode }) {
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
