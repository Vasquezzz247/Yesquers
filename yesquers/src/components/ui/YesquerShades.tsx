import * as React from "react";

/**
 * Simple className merge helper (keeps last-wins semantics)
 */
function cn(...classes: Array<string | undefined | false | null>) {
    return classes.filter(Boolean).join(" ");
}

/**
 * Reusable Card primitives
 * - Card: outer container (shadow, border, radius)
 * - CardHeader: optional top area (title, eyebrow, actions)
 * - CardContent: main content area (padding only)
 * - CardFooter: optional bottom actions area
 *
 * You can override the default Tailwind classes via the `className` prop.
 */
export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                // sensible defaults; tweak to your design system
                "rounded-2xl border border-white/10 bg-black/40 backdrop-blur-lg shadow-xl",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("px-6 pt-6", className)} {...props} />
    )
);
CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("p-6", className)} {...props} />
    )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("px-6 pb-6", className)} {...props} />
    )
);
CardFooter.displayName = "CardFooter";

/**
 * Reusable Badge
 */
export const Badge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
    ({ className, ...props }, ref) => (
        <span
            ref={ref}
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border",
                className
            )}
            {...props}
        />
    )
);
Badge.displayName = "Badge";

/**
 * -----------------------------
 * Usage examples
 * -----------------------------
 *
 * import { Card, CardContent, Badge } from "@/components/ui/Card";
 *
 * export default function Hero() {
 *   return (
 *     <Card className="w-full border-2 border-purple-600/40 shadow-2xl shadow-purple-900/30 animate-float-slow flex items-center">
 *       <CardContent className="p-12 w-full text-center text-slate-200">
 *         <h2 className="text-4xl font-bold psych-text mb-6">Welcome yesquers</h2>
 *         <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
 *           Step into a world where creativity meets consciousness...
 *         </p>
 *
 *         <div className="flex items-center my-10">
 *           <div className="flex-grow border-t border-purple-600/30" />
 *           <span className="mx-4 text-slate-300 uppercase tracking-wide text-sm font-semibold">
 *             Meet The Creators
 *           </span>
 *           <div className="flex-grow border-t border-purple-600/30" />
 *         </div>
 *
 *         <div className="flex justify-center gap-2">
 *           <Badge className="border-purple-500/40 text-purple-300">Psychedelic</Badge>
 *           <Badge className="border-indigo-500/40 text-indigo-300">NFT</Badge>
 *         </div>
 *       </CardContent>
 *     </Card>
 *   );
 * }
 *
 * // In other components (FAQQuestion.tsx, DropInfo.tsx, etc),
 * // remove local Card/CardContent/Badge definitions and just import from the shared file.
 */
