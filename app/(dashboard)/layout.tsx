import { Metadata } from "next"

export const metadata: Metadata = {
    title: "NutriNest | Dashboard",
    icons: {
        icon: "assets/favicon.svg"
    }
}

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        {children}
    )
}
