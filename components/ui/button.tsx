"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-[var(--radius-xs)] font-semibold transition-all disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  {
    variants: {
      variant: {
        // Primary (default) - solid blue button with white text
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 disabled:opacity-50",
        // Destructive/Error - solid red button with white text
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 disabled:opacity-50",
        // Outline/Secondary - bordered button
        outline:
          "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/80 disabled:opacity-50",
        // Secondary/Tertiary - light background
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 disabled:opacity-50",
        // Ghost - transparent background
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        // Link - text only
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-w-[72px] h-9 px-2 py-1.5 text-sm [&_svg]:size-5",
        sm: "min-w-[56px] h-6 px-1 py-1 text-xs [&_svg]:size-3",
        lg: "min-w-[88px] h-10 px-3 py-2 text-base [&_svg]:size-6",
        icon: "size-9 p-2",
        "icon-sm": "size-6 p-1",
        "icon-lg": "size-10 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  icon?: React.ReactNode
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading = false,
  icon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  // Loading dots component
  const LoadingDots = () => (
    <span className="flex items-center justify-center gap-0.5">
      <span className="size-1 rounded-full bg-current animate-[flicker_1.4s_infinite_both]" />
      <span className="size-1 rounded-full bg-current animate-[flicker_1.4s_0.2s_infinite_both]" />
      <span className="size-1 rounded-full bg-current animate-[flicker_1.4s_0.4s_infinite_both]" />
    </span>
  )

  if (asChild) {
    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        data-loading={isLoading ? "" : undefined}
        {...props}
      >
        {children}
      </Comp>
    )
  }

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        isLoading && "cursor-wait",
        className
      )}
      disabled={disabled || isLoading}
      data-loading={isLoading ? "" : undefined}
      {...props}
    >
      {isLoading ? (
        <LoadingDots />
      ) : (
        <>
          {icon && <span className="flex items-center justify-center">{icon}</span>}
          {children && <span className="px-1">{children}</span>}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
