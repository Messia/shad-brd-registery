"use client"

import * as React from "react"
import { BarChart3, Grip, TableProperties } from "lucide-react"

import { WidgetBoard, type WidgetBoardItem } from "@/components/ui/widget-board"

function buildShowcaseItems(): WidgetBoardItem[] {
  return [
    {
      id: "primary-kpi",
      size: "S",
      title: "Primary KPI",
      timestamp: "Semantic size S",
      sourceLink: { label: "KPI pattern", href: "#" },
      content: (
        <div className="flex h-full flex-col justify-between">
          <div>
            <p
              className="text-[var(--color-text-secondary)]"
              style={{ font: "var(--font-body-small)" }}
            >
              Net inflows
            </p>
            <p
              className="mt-2 text-[var(--color-text-primary)]"
              style={{ font: "var(--font-headline-h3)" }}
            >
              $2.4M
            </p>
          </div>
          <p
            className="text-[var(--color-state-success)]"
            style={{ font: "var(--font-body-small-semibold)" }}
          >
            +8.2% versus prior period
          </p>
        </div>
      ),
    },
    {
      id: "workspace",
      size: "L",
      title: "Primary workspace area",
      timestamp: "Semantic size L",
      sourceLink: { label: "Use Highcharts here", href: "#" },
      viewMoreLink: { label: "Expand", href: "#" },
      content: (
        <div className="flex h-full flex-col gap-[var(--spacing-sp-16)]">
          <div className="rounded-[var(--radius-xs)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-foreground)] p-[var(--spacing-sp-16)]">
            <div className="flex items-center gap-2 text-[var(--color-text-primary)]">
              <BarChart3 className="size-4" />
              <span style={{ font: "var(--font-body-medium-semibold)" }}>
                Main dashboard canvas
              </span>
            </div>
            <p
              className="mt-2 text-[var(--color-text-secondary)]"
              style={{ font: "var(--font-body-small)" }}
            >
              This widget is the sanctioned large region for BRD Highcharts, multi-step workflows, or a composite dashboard experience.
            </p>
          </div>
          <div className="grid flex-1 gap-[var(--spacing-sp-16)] md:grid-cols-2">
            <div className="rounded-[var(--radius-xs)] border border-dashed border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-[var(--spacing-sp-16)] text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>
              Widget content should adapt cleanly as L compresses to M/S layouts across breakpoints.
            </div>
            <div className="rounded-[var(--radius-xs)] border border-dashed border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-[var(--spacing-sp-16)] text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>
              Keep dashboard sections on BRD spacing tokens and avoid ad hoc CSS grids in generated views.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "insights",
      size: "M",
      title: "Secondary insights",
      timestamp: "Semantic size M",
      sourceLink: { label: "Highcharts theme", href: "#" },
      content: (
        <div className="flex h-full flex-col gap-[var(--spacing-sp-16)]">
          <div className="rounded-[var(--radius-xs)] bg-[var(--color-surface-foreground)] p-[var(--spacing-sp-16)]">
            <p
              className="text-[var(--color-text-primary)]"
              style={{ font: "var(--font-body-medium-semibold)" }}
            >
              Chart-ready widget
            </p>
            <p
              className="mt-2 text-[var(--color-text-secondary)]"
              style={{ font: "var(--font-body-small)" }}
            >
              Use `@/lib/brd-highcharts-theme` and keep series colors in chart swatch order 1 through 24.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-[var(--radius-xs)] border border-dashed border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] text-[var(--color-text-secondary)]">
            <div className="flex items-center gap-2" style={{ font: "var(--font-body-small)" }}>
              <Grip className="size-4" />
              Drag and resize snap to the BRD matrix.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "detail-panel",
      size: "S",
      title: "Detail panel",
      timestamp: "Semantic size S",
      sourceLink: { label: "AG Grid wrapper", href: "#" },
      content: (
        <div className="flex h-full flex-col gap-[var(--spacing-sp-12)]">
          <div className="rounded-[var(--radius-xs)] bg-[var(--color-surface-foreground)] p-[var(--spacing-sp-8)]">
            <div className="flex items-center gap-2 text-[var(--color-text-primary)]">
              <TableProperties className="size-4" />
              <span style={{ font: "var(--font-body-medium-semibold)" }}>
                Table surface
              </span>
            </div>
            <p
              className="mt-2 text-[var(--color-text-secondary)]"
              style={{ font: "var(--font-body-small)" }}
            >
              AG Grid lives inside a borderless wrapper with `sp-8` padding.
            </p>
          </div>
          <div className="flex-1 rounded-[var(--radius-xs)] border border-dashed border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-[var(--spacing-sp-12)] text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>
            No extra outer border around the grid container unless explicitly requested.
          </div>
        </div>
      ),
    },
  ]
}

export function WidgetBoardShowcase({ editable = false }: { editable?: boolean }) {
  const [items, setItems] = React.useState<WidgetBoardItem[]>(() => buildShowcaseItems())

  return (
    <WidgetBoard
      items={items}
      editable={editable}
      onItemsChange={setItems}
    />
  )
}
