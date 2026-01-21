'use client'

import { Widget } from "@/components/ui/widget"
import { ComponentPageLayout } from "@/components/component-page-layout"
import { TrendingUp, TrendingDown } from "lucide-react"
import { registryMetadata } from "@/lib/registry-metadata"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "widget",
  type: "registry:ui",
  title: "Widget",
  description: "A dashboard widget container with header, content area, and footer. Supports S/M/L sizes with zoom functionality.",
  ...registryMetadata["widget"],
  files: [
    {
      path: "ui/widget.tsx",
      type: "registry:ui",
    },
  ],
  dependencies: [],
}

// Sample KPI data for demonstrations
const kpiData = {
  value: "$1,234,567",
  change: "+12.5%",
  trend: "up" as const,
  label: "Total Revenue",
}

// S Size - Simple KPI representation
function WidgetSizeS() {
  return (
    <Widget
      size="S"
      title="Revenue Overview"
      timestamp="Updated 2h ago"
      onRefresh={() => console.log("Refresh clicked")}
      onInfoClick={() => console.log("Info clicked")}
      sourceLink={{ label: "View source", href: "#" }}
    >
      <div className="flex flex-col items-center justify-center h-full gap-2">
        <span className="text-3xl font-bold text-[var(--color-text-primary)]">
          {kpiData.value}
        </span>
        <div className="flex items-center gap-1">
          {kpiData.trend === "up" ? (
            <TrendingUp className="w-4 h-4 text-[var(--color-state-success)]" />
          ) : (
            <TrendingDown className="w-4 h-4 text-[var(--color-state-error)]" />
          )}
          <span className={`text-sm font-medium ${kpiData.trend === "up" ? "text-[var(--color-state-success)]" : "text-[var(--color-state-error)]"}`}>
            {kpiData.change}
          </span>
          <span className="text-sm text-[var(--color-text-secondary)]">vs last month</span>
        </div>
      </div>
    </Widget>
  )
}

// M Size - Default view with chart placeholder
function WidgetSizeM() {
  return (
    <Widget
      size="M"
      title="Revenue Overview"
      timestamp="Updated 2h ago"
      onRefresh={() => console.log("Refresh clicked")}
      onInfoClick={() => console.log("Info clicked")}
      menuItems={[
        { label: "Export data", onClick: () => console.log("Export") },
        { label: "Settings", onClick: () => console.log("Settings") },
      ]}
      sourceLink={{ label: "View source", href: "#" }}
      viewMoreLink={{ label: "View details", href: "#" }}
    >
      <div className="flex flex-col h-full gap-4">
        {/* KPI Summary */}
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold text-[var(--color-text-primary)]">
            {kpiData.value}
          </span>
          <div className="flex items-center gap-1">
            {kpiData.trend === "up" ? (
              <TrendingUp className="w-5 h-5 text-[var(--color-state-success)]" />
            ) : (
              <TrendingDown className="w-5 h-5 text-[var(--color-state-error)]" />
            )}
            <span className={`text-base font-medium ${kpiData.trend === "up" ? "text-[var(--color-state-success)]" : "text-[var(--color-state-error)]"}`}>
              {kpiData.change}
            </span>
          </div>
        </div>
        {/* Chart placeholder */}
        <div className="flex-1 bg-[var(--color-surface-foreground)] rounded-[var(--radius-xs)] flex items-center justify-center border border-dashed border-[var(--color-stroke-default)]">
          <span className="text-[var(--color-text-secondary)]">Chart Area (M Size)</span>
        </div>
      </div>
    </Widget>
  )
}

// L Size - Extended view with more detail
function WidgetSizeL() {
  return (
    <Widget
      size="L"
      title="Revenue Overview"
      timestamp="Updated 2h ago"
      onRefresh={() => console.log("Refresh clicked")}
      onInfoClick={() => console.log("Info clicked")}
      menuItems={[
        { label: "Export data", onClick: () => console.log("Export") },
        { label: "Settings", onClick: () => console.log("Settings") },
      ]}
      sourceLink={{ label: "View source", href: "#" }}
      viewMoreLink={{ label: "View full report", href: "#" }}
    >
      <div className="flex flex-col h-full gap-4">
        {/* KPI Summary Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold text-[var(--color-text-primary)]">
              {kpiData.value}
            </span>
            <div className="flex items-center gap-1">
              {kpiData.trend === "up" ? (
                <TrendingUp className="w-6 h-6 text-[var(--color-state-success)]" />
              ) : (
                <TrendingDown className="w-6 h-6 text-[var(--color-state-error)]" />
              )}
              <span className={`text-lg font-medium ${kpiData.trend === "up" ? "text-[var(--color-state-success)]" : "text-[var(--color-state-error)]"}`}>
                {kpiData.change} vs last month
              </span>
            </div>
          </div>
        </div>
        {/* Extended Chart Area */}
        <div className="flex-1 bg-[var(--color-surface-foreground)] rounded-[var(--radius-xs)] flex items-center justify-center border border-dashed border-[var(--color-stroke-default)]">
          <span className="text-[var(--color-text-secondary)]">Extended Chart Area (L Size)</span>
        </div>
      </div>
    </Widget>
  )
}

export default function WidgetPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Size S - Compact KPI View</h3>
          <WidgetSizeS />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Size M - Default View</h3>
          <WidgetSizeM />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Size L - Extended View</h3>
          <WidgetSizeL />
        </div>
      </div>
    </ComponentPageLayout>
  )
}

