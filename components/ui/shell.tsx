"use client"

import * as React from "react"

import { Header, type HeaderProps } from "@/components/ui/header"
import { TopNavigation, type TopNavigationProps } from "@/components/ui/top-navigation"
import { SideToolbar, type SideToolbarProps } from "@/components/ui/side-toolbar"
import { LeftNavigation, type LeftNavigationProps } from "@/components/ui/left-navigation"
import { PageContainer, type PageContainerProps } from "@/components/ui/page-container"
import { Footer, type FooterProps } from "@/components/ui/footer"
import { cn } from "@/lib/utils"

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  headerProps?: HeaderProps
  topNavigationProps?: TopNavigationProps
  leftNavigationProps?: LeftNavigationProps
  sideToolbarProps?: SideToolbarProps
  pageContainerProps?: PageContainerProps
  footerProps?: FooterProps
  contentClassName?: string
  children?: React.ReactNode
}

function Shell({
  headerProps,
  topNavigationProps,
  leftNavigationProps,
  sideToolbarProps,
  pageContainerProps,
  footerProps,
  className,
  contentClassName,
  children,
  ...props
}: ShellProps) {
  const hasLeftNav = Boolean(leftNavigationProps?.items?.length)
  const hasSideToolbar = Boolean(sideToolbarProps?.items?.length)
  const hasTopNav = Boolean(topNavigationProps?.items?.length)
  const headerHeight = "56px"
  const topNavHeight = hasTopNav ? "40px" : "0px"
  const leftRailWidth = hasLeftNav ? "104px" : "0px"

  return (
    <div
      className={cn("min-h-screen bg-[var(--color-surface-background)]", className)}
      style={{
        ["--shell-header-height" as string]: headerHeight,
        ["--shell-topnav-height" as string]: topNavHeight,
        ["--shell-left-rail-width" as string]: leftRailWidth,
        ...(props.style ?? {}),
      }}
      {...props}
    >
      <Header {...headerProps} />
      {hasTopNav && <TopNavigation {...topNavigationProps} />}

      <div
        className={cn(
          "relative",
          hasLeftNav && "pl-[var(--shell-left-rail-width)]",
          contentClassName
        )}
      >
        {hasLeftNav && (
          <LeftNavigation
            {...leftNavigationProps}
            position="fixed"
            className={cn(
              leftNavigationProps?.className,
              "top-[var(--shell-header-height)]",
              "h-[calc(100vh-var(--shell-header-height))]"
            )}
          />
        )}
        {hasSideToolbar && (
          <SideToolbar
            {...sideToolbarProps}
            position="fixed"
            className={sideToolbarProps?.className}
          />
        )}

        <main className="bg-[var(--color-surface-dashboard)]">
          <PageContainer
            {...pageContainerProps}
            layout="shell"
            className={cn(
              "py-6",
              "min-h-[calc(100vh-var(--shell-header-height)-var(--shell-topnav-height))]",
              "flex flex-col",
              pageContainerProps?.className
            )}
          >
            <div className="flex min-h-0 flex-1 flex-col">
              {children}
            </div>
            <Footer {...footerProps} className={cn("mt-12", footerProps?.className)} />
          </PageContainer>
        </main>
      </div>
    </div>
  )
}

export { Shell }
