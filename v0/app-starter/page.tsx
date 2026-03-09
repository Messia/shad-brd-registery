"use client"

/**
 * v0 starter contract:
 * - Keep button icons and labels on one horizontal row inside `<Button>`.
 * - Use `WidgetBoard` for dashboard layouts and keep widget sizes semantic (`S`, `M`, `L`).
 * - Use `var(--font-family-brand)` and BRD typography tokens for all custom text styles.
 * - Prefer composed BRD font tokens for full text styles and avoid generic `text-*` / `leading-*` Tailwind typography utilities.
 * - Use BRD `var(--spacing-sp-X)` tokens for layout spacing.
 * - Do not add shadows unless a BRD component already includes them or the user explicitly asks for them.
 * - Use Highcharts for data visualization via `@/lib/brd-highcharts-theme`.
 * - Use AG Grid for application tables via `@/lib/brd-ag-grid-theme`.
 * - Keep chart series colors in BRD chart swatch order 1 through 24.
 */

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
import {
  WidgetBoard,
  type WidgetBoardItem,
} from "@/components/ui/widget-board"

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

const starterWidgets: WidgetBoardItem[] = [
  {
    id: "primary-kpi",
    size: "S",
    title: "Primary KPI",
    timestamp: "Use this widget for a compact summary",
    sourceLink: { label: "Starter guidance", href: "#" },
    content: (
      <div className="flex h-full flex-col justify-between">
        <div>
          <p
            className="text-[var(--color-text-secondary)]"
            style={{ font: "var(--font-body-small)" }}
          >
            Replace with your top metric
          </p>
          <p
            className="mt-[var(--spacing-sp-8)] text-[var(--color-text-primary)]"
            style={{ font: "var(--font-headline-h3)" }}
          >
            $2.4M
          </p>
        </div>
        <p
          className="text-[var(--color-state-success)]"
          style={{ font: "var(--font-body-small-semibold)" }}
        >
          +8.2% vs prior period
        </p>
      </div>
    ),
  },
  {
    id: "primary-workspace",
    size: "L",
    title: "Primary workspace area",
    timestamp: "Place your main Highcharts chart, AG Grid table, form, or process here",
    sourceLink: { label: "Use existing BRD components", href: "#" },
    viewMoreLink: { label: "Expand the view", href: "#" },
    content: (
      <div className="flex h-full flex-col gap-[var(--spacing-sp-16)]">
        <div className="rounded-[var(--radius-xs)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-foreground)] p-[var(--spacing-sp-16)]">
          <h3
            className="text-[var(--color-text-primary)]"
            style={{ font: "var(--font-body-medium-semibold)" }}
          >
            Start inside the shell content area
          </h3>
          <p
            className="mt-[var(--spacing-sp-8)] text-[var(--color-text-secondary)]"
            style={{ font: "var(--font-body-small)" }}
          >
            When you prompt v0 to create a new view, extend this area with BRD cards, widgets, Highcharts visualizations, AG Grid tables, and forms instead of rebuilding the registry interface.
          </p>
        </div>
        <div className="grid gap-[var(--spacing-sp-16)] md:grid-cols-4">
          <div className="rounded-[var(--radius-xs)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-[var(--spacing-sp-16)] text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>
            Typography: use <span className="text-[var(--color-text-primary)]" style={{ font: "var(--font-body-small-semibold)" }}>var(--font-family-brand)</span> and BRD typography tokens.
          </div>
          <div className="rounded-[var(--radius-xs)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-[var(--spacing-sp-16)] text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>
            Spacing: use <span className="text-[var(--color-text-primary)]" style={{ font: "var(--font-body-small-semibold)" }}>var(--spacing-sp-X)</span> tokens for gap, padding, and margin.
          </div>
          <div className="rounded-[var(--radius-xs)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-[var(--spacing-sp-16)] text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>
            Charts: use <span className="text-[var(--color-text-primary)]" style={{ font: "var(--font-body-small-semibold)" }}>Highcharts</span> with the BRD theme helper and swatches 1-24 in sequence.
          </div>
          <div className="rounded-[var(--radius-xs)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-[var(--spacing-sp-16)] text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>
            Tables: use <span className="text-[var(--color-text-primary)]" style={{ font: "var(--font-body-small-semibold)" }}>AG Grid</span> inside a borderless surface with <span className="text-[var(--color-text-primary)]" style={{ font: "var(--font-body-small-semibold)" }}>sp-8</span> padding.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "secondary-insights",
    size: "M",
    title: "Secondary insights",
    timestamp: "Use this widget for secondary charts, summaries, or workflow context",
    sourceLink: { label: "Highcharts + tokens", href: "#" },
    content: (
      <div className="flex h-full flex-col gap-[var(--spacing-sp-16)]">
        <div className="rounded-[var(--radius-xs)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-[var(--spacing-sp-16)] text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>
          Use WidgetBoard for dashboard composition so the same view transforms cleanly across BRD breakpoints without hand-authored CSS grids.
        </div>
        <div className="flex flex-1 items-center justify-center rounded-[var(--radius-xs)] border border-dashed border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>
          Secondary widget region
        </div>
      </div>
    ),
  },
  {
    id: "detail-panel",
    size: "S",
    title: "Detail panel",
    timestamp: "Use this widget for detail, drilldown, or action context",
    sourceLink: { label: "AG Grid wrapper", href: "#" },
    content: (
      <div className="flex h-full flex-col gap-[var(--spacing-sp-12)]">
        <div className="rounded-[var(--radius-xs)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-[var(--spacing-sp-8)] text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>
          Borderless table/chart wrapper with BRD spacing tokens.
        </div>
        <div className="flex-1 rounded-[var(--radius-xs)] border border-dashed border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-[var(--spacing-sp-12)] text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>
          Detail panel
        </div>
      </div>
    ),
  },
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

        <WidgetBoard items={starterWidgets} />
      </div>
    </Shell>
  )
}

export default AppStarterPage
