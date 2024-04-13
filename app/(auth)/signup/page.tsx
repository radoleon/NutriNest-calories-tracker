import Button from "@/app/components/Button";
import Link from "next/link";
import { signup } from "../actions";

export default function Signup() {
    return (
        <>
            <h2 className="form-title">Signup</h2>
            <form action={signup}>
                <label>
                    Email:
                    <input className="text-field" type="email" name="email" required />
                </label>
                <label>
                    Password:
                    <input className="text-field" type="password" name="password" required />
                </label>
                <div className="w-fit mx-auto mt-8">
                    <Button text="Signup" submit />
                </div>
            </form>
            <span className="block mt-4">
                {"If you already have an account "}
                <Link className="text-amber-500 underline" href="/login">click here to login</Link>
            </span>
        </>
    )
}
