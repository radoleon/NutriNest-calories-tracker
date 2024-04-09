import { Button as ButtonComponent } from "@mui/material";

interface ButtonProps {
    text: string
    submit: boolean
}

export default function Button({ text, submit } : ButtonProps) {
    return (
        <ButtonComponent 
            size="small"
            type={submit ? "submit" : "button"}
            variant="contained"
            sx={{ textTransform: "none", fontWeight: "bold", fontSize: "1rem" }}
        >
            {text}
        </ButtonComponent>
    )
}
