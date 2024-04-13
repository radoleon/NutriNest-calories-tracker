"use client"

import { Button as ButtonComponent } from "@mui/material";
import { useFormStatus } from "react-dom";

interface ButtonProps {
    text: string
    submit?: boolean
    disabled?: boolean
}

export default function Button({ text, submit, disabled } : ButtonProps) {

    const { pending } = useFormStatus()

    return (
        <ButtonComponent 
            size="small"
            type={submit ? "submit" : "button"}
            variant="contained"
            disabled={pending || disabled}
            sx={{ textTransform: "none", fontWeight: "bold", fontSize: "1rem" }}
        >
            {text}
        </ButtonComponent>
    )
}
