import { Metadata } from "next";
import Logo from "../components/Logo";

export const metadata: Metadata = {
    title: "NutriNest | Auth"
}

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <section className="py-40">
            <div className="w-fit mx-auto mb-10">
                <Logo size={64} />
            </div>
            <main className="max-w-sm mx-auto">
                {children}
            </main>
        </section>
    )
}
