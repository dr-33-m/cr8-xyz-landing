import * as React from "react"

import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "secondary" | "outline" | "soft" | "live"

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "border-border bg-transparent text-foreground",
  soft: "bg-[var(--yc-yellow-soft)] text-foreground",
  live: "border-border/50 bg-card/70 pl-2 text-foreground backdrop-blur-sm",
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-transparent px-2.5 py-1 text-xs font-medium leading-none whitespace-nowrap",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {variant === "live" ? (
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full yc-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
      ) : null}
      {children}
    </span>
  )
}
