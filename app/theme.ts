"use client"

import { createTheme } from "@mui/material"
import { Jaldi } from "next/font/google"

const jaldi = Jaldi({ subsets: ["latin-ext"], weight: "400" });

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#f59e0b",
            contrastText: "#fff"
        }
    },
    typography: {
        fontFamily: jaldi.style.fontFamily,
    }
})