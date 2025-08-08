import { cn } from "../lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    className?: string;
}

const Badge = ({ className, ...props }: BadgeProps) => (
    <span
        className={cn(
            "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none",
            className
        )}
        {...props}
    />
);

Badge.displayName = "Badge";

export default Badge;
