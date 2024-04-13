import { Metadata } from "next";
import { Jaldi } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const jaldi = Jaldi({ subsets: ["latin-ext"], weight: "400" });

export const metadata: Metadata = {
    title: "NutriNest | Dashboard",
    icons: {
        icon: "assets/favicon.svg"
    }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={jaldi.className}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}