"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { WidgetBoardShowcase } from "@/components/widget-board-showcase"
import { registryMetadata } from "@/lib/registry-metadata"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "widget-board",
  type: "registry:ui",
  title: "Widget Board",
  description:
    "A responsive BRD dashboard grid that arranges Widget surfaces by semantic S/M/L sizes across breakpoints and supports drag-and-resize snapping.",
  ...registryMetadata["widget-board"],
  files: [
    {
      path: "ui/widget-board.tsx",
      type: "registry:ui",
    },
    {
      path: "widget-board-config.ts",
      type: "registry:lib",
      target: "lib/widget-board-config.ts",
    },
  ],
  dependencies: ["react-grid-layout", "react-resizable"],
}

const sizeMatrix = [
  { breakpoint: "2xs", viewport: "320-499px", columns: 3, s: "3 x 1", m: "3 x 1", l: "3 x 1" },
  { breakpoint: "xs", viewport: "500-767px", columns: 3, s: "3 x 2", m: "3 x 2", l: "3 x 2" },
  { breakpoint: "s", viewport: "768-967px", columns: 6, s: "3 x 1", m: "6 x 2", l: "6 x 2" },
  { breakpoint: "m", viewport: "968-1279px", columns: 6, s: "2 x 1", m: "4 x 2", l: "6 x 2" },
  { breakpoint: "l", viewport: "1280-1599px", columns: 6, s: "2 x 1", m: "4 x 2", l: "6 x 2" },
  { breakpoint: "xl", viewport: "1600-1919px", columns: 12, s: "3 x 1", m: "6 x 2", l: "9 x 2" },
  { breakpoint: "2xl", viewport: "1920px+", columns: 12, s: "3 x 1", m: "6 x 2", l: "9 x 2" },
]

export default function WidgetBoardPage() {
  return (
    <ComponentPageLayout
      meta={meta}
      headerActions={(
        <a
          href="/widget-board/demo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--color-stroke-default)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)] transition-colors"
        >
          Open in new tab
        </a>
      )}
    >
      <div className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Static dashboard scaffold
          </h2>
          <WidgetBoardShowcase />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Editable dashboard
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Drag and resize widgets to the board grid. On resize, the widget updates its canonical semantic size and reflows across all breakpoints.
          </p>
          <WidgetBoardShowcase editable />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Breakpoint size matrix
          </h2>
          <div className="overflow-x-auto rounded-md border border-[var(--color-stroke-default)]">
            <table className="min-w-full border-collapse">
              <thead className="bg-[var(--color-surface-foreground)]">
                <tr>
                  {["Breakpoint", "Viewport", "Columns", "S", "M", "L"].map((heading) => (
                    <th
                      key={heading}
                      className="border-b border-[var(--color-stroke-default)] px-4 py-3 text-left text-[var(--color-text-primary)]"
                      style={{ font: "var(--font-body-medium-semibold)" }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizeMatrix.map((row) => (
                  <tr key={row.breakpoint} className="border-b border-[var(--color-stroke-default)] last:border-b-0">
                    <td className="px-4 py-3 text-[var(--color-text-primary)]" style={{ font: "var(--font-body-medium-semibold)" }}>{row.breakpoint}</td>
                    <td className="px-4 py-3 text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>{row.viewport}</td>
                    <td className="px-4 py-3 text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>{row.columns}</td>
                    <td className="px-4 py-3 text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>{row.s}</td>
                    <td className="px-4 py-3 text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>{row.m}</td>
                    <td className="px-4 py-3 text-[var(--color-text-secondary)]" style={{ font: "var(--font-body-small)" }}>{row.l}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ComponentPageLayout>
  )
}
