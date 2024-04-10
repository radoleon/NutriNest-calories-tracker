import Button from "@/app/components/Button";
import Link from "next/link";
import { login } from "../actions";

export default function Login() {
    return (
        <>
            <h2 className="text-4xl font-bold mb-4 text-center text-amber-500">Login</h2>
            <form action={login}>
                <label>
                    Email:
                    <input className="text-field" type="email" name="email" required />
                </label>
                <label>
                    Password:
                    <input className="text-field" type="password" name="password" required />
                </label>
                <div className="w-fit mx-auto mt-8">
                    <Button text="Login" submit />
                </div>
            </form>
            <span className="block mt-4">
                {"If you haven't created an account yet "}
                <Link className="text-amber-500 underline" href="/signup">click here to signup</Link>
            </span>
        </>
    )
}
