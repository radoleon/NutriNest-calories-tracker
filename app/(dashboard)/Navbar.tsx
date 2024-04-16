import Logo from "../components/Logo";
import { Settings } from "@mui/icons-material";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

export default function Navbar({ email }: { email: string }) {
    
    return (
        <nav className="flex items-center justify-between">
            <Logo size={32} />
            <div className="flex items-center gap-5">
                <Link
                    href="/setup"
                    className="cursor-pointer hover:opacity-65"
                >
                    <Settings className="text-amber-500" />
                    <span className="ml-1 hidden sm:inline">{email}</span>
                </Link>
                <LogoutButton />
            </div>
        </nav>
    )
}
