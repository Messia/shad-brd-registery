"use client"

import {
  BarChart3,
  BriefcaseBusiness,
  FileText,
  Home,
  Layers3,
  Sparkles,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import type { LeftNavigationItem } from "@/components/ui/left-navigation"
import { PageHeader } from "@/components/ui/page-container"
import { Shell } from "@/components/ui/shell"
import type { SideToolbarItem } from "@/components/ui/side-toolbar"
import type { TopNavigationItem } from "@/components/ui/top-navigation"
import { Widget } from "@/components/ui/widget"

const topNavigationItems: TopNavigationItem[] = [
  { id: "overview", label: "Overview" },
  { id: "workflows", label: "Workflows" },
  { id: "analytics", label: "Analytics" },
  { id: "documents", label: "Documents" },
]

const leftNavigationItems: LeftNavigationItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "clients", label: "Clients", icon: Users },
  { id: "operations", label: "Operations", icon: BriefcaseBusiness },
  { id: "components", label: "Components", icon: Layers3 },
]

const sideToolbarItems: SideToolbarItem[] = [
  { id: "insights", label: "Insights", icon: Sparkles },
  { id: "reports", label: "Reports", icon: BarChart3 },
  { id: "docs", label: "Docs", icon: FileText },
]

export function AppStarterPage() {
  return (
    <Shell
      headerProps={{
        userName: "John Smith",
        userInitials: "JS",
        notificationCount: 2,
      }}
      topNavigationProps={{
        items: topNavigationItems,
        activeId: "overview",
      }}
      leftNavigationProps={{
        items: leftNavigationItems,
        activeId: "home",
      }}
      sideToolbarProps={{
        items: sideToolbarItems,
        activeId: "insights",
      }}
      footerProps={{
        copyrightText: "© 2026 BRD",
      }}
    >
      <div className="flex flex-col gap-6">
        <PageHeader
          title="Workspace"
          timestamp="Starter scaffold ready for a new view"
          actions={(
            <>
              <Button variant="outline">Filters</Button>
              <Button>New workflow</Button>
            </>
          )}
        />

        <div className="grid gap-4 xl:grid-cols-[456px_minmax(0,1fr)]">
          <Widget
            size="S"
            title="Primary KPI"
            timestamp="Use this widget for a compact summary"
            sourceLink={{ label: "Starter guidance", href: "#" }}
          >
            <div className="flex h-full flex-col justify-center gap-2">
              <span className="text-4xl font-semibold text-[var(--color-text-primary)]">$2.4M</span>
              <span className="text-sm text-[var(--color-state-success)]">+8.2% vs prior period</span>
              <span className="text-sm text-[var(--color-text-secondary)]">
                Replace this with the core metric for the view you are generating.
              </span>
            </div>
          </Widget>

          <Widget
            size="M"
            title="Primary workspace area"
            timestamp="Place your main chart, table, form, or process here"
            sourceLink={{ label: "Use existing BRD components", href: "#" }}
            viewMoreLink={{ label: "Expand the view", href: "#" }}
          >
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-[var(--radius-xs)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-foreground)] p-4">
                <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Start inside the shell content area</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  When you prompt v0 to create a new view, extend this area with BRD tables, cards, charts, forms, widgets, and navigation patterns instead of rebuilding the registry interface.
                </p>
              </div>
              <div className="grid flex-1 gap-4 md:grid-cols-2">
                <div className="rounded-[var(--radius-xs)] border border-dashed border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-4 text-sm text-[var(--color-text-secondary)]">
                  Secondary panel
                </div>
                <div className="rounded-[var(--radius-xs)] border border-dashed border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-4 text-sm text-[var(--color-text-secondary)]">
                  Detail panel
                </div>
              </div>
            </div>
          </Widget>
        </div>
      </div>
    </Shell>
  )
}

export default AppStarterPage
