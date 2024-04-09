import Button from "@/app/components/Button";
import Link from "next/link";

export default function Signup() {
    return (
        <>
            <h2 className="text-4xl font-bold mb-4 text-center text-amber-500">Signup</h2>
            <form>
                <label>
                    Username:
                    <input className="text-field" type="text" />
                </label>
                <label>
                    Email:
                    <input className="text-field" type="text" />
                </label>
                <label>
                    Password:
                    <input className="text-field" type="text" />
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
