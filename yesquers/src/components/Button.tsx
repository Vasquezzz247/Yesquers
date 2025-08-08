
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "solid" | "outline";
}

const Button = ({ variant = "solid", className, ...props }: ButtonProps) => {
    const baseStyles =
        "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        solid: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        />
    );
};

export default Button;
