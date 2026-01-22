"use client"

import * as React from "react"
import { RefreshCw } from "lucide-react"

import { IconButton } from "@/components/ui/icon-button"
import { cn } from "@/lib/utils"

export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  layout?: "default" | "shell"
}

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  timestamp?: string
  onRefresh?: () => void
  actions?: React.ReactNode
}

function PageHeader({
  title,
  timestamp,
  onRefresh,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={cn("flex flex-col gap-2 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-between", className)}
      {...props}
    >
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
          {title}
        </h3>
        {(timestamp || onRefresh) && (
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
            {timestamp && <span>{timestamp}</span>}
            {onRefresh && (
              <IconButton
                ariaLabel="Refresh"
                size="S"
                color="Black"
                onClick={onRefresh}
              >
                <RefreshCw className="h-4 w-4" />
              </IconButton>
            )}
          </div>
        )}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-3">{actions}</div>}
    </div>
  )
}

function PageContainer({
  className,
  layout = "default",
  children,
  ...props
}: PageContainerProps) {
  const isShellLayout = layout === "shell"

  return (
    <div
      className={cn(
        "w-full bg-[var(--color-surface-dashboard)]",
        isShellLayout ? "pl-6 pr-[72px]" : "px-6",
        !isShellLayout && "min-[768px]:px-6",
        !isShellLayout && "min-[968px]:px-12",
        !isShellLayout && "min-[1280px]:px-12",
        !isShellLayout && "min-[1600px]:px-12",
        !isShellLayout && "min-[1920px]:px-0",
        !isShellLayout && "min-[1920px]:max-w-[calc(100%-96px)]",
        !isShellLayout && "min-[1920px]:mx-auto",
        isShellLayout && "max-w-none",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-6">
        {children}
      </div>
    </div>
  )
}

export { PageContainer, PageHeader }
