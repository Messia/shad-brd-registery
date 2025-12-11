# BRD Widget Generation Rules for v0

This document provides specific rules for generating Widget components in v0. For general BRD component rules, refer to `v0-rules.md`.

---

## CRITICAL: Use BRD Components and Design Tokens

When generating widget content, you MUST:

### 1. Import BRD Components (NOT standard shadcn)
```tsx
// ✅ CORRECT - Use BRD components
import { Widget } from "@/components/ui/widget"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconButton } from "@/components/ui/icon-button"
import { Link } from "@/components/ui/link"
import { Card } from "@/components/ui/card"
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table"

// ❌ WRONG - Never use standard shadcn or HTML equivalents
// import { Button } from "shadcn/ui/button"
// <button className="...">
// <a href="...">
```

### 2. Use BRD Design Tokens (CSS Variables)
```tsx
// ✅ CORRECT - Use BRD CSS variables
<span className="text-[var(--color-text-primary)]">Primary text</span>
<span className="text-[var(--color-text-secondary)]">Secondary text</span>
<span className="text-[var(--color-state-success)]">Positive value</span>
<span className="text-[var(--color-state-error)]">Negative value</span>
<div className="bg-[var(--color-surface-foreground)]">Surface</div>
<div className="rounded-[var(--radius-xs)]">Rounded element</div>

// ❌ WRONG - Never use raw colors or Tailwind defaults
// <span className="text-gray-900">
// <span className="text-green-500">
// <div className="bg-white">
```

### 3. Key BRD Color Tokens
| Token | Usage |
|-------|-------|
| `--color-text-primary` | Main text, headings, KPI values |
| `--color-text-secondary` | Labels, descriptions, metadata |
| `--color-state-success` | Positive trends, success states |
| `--color-state-error` | Negative trends, error states |
| `--color-state-warning` | Warning states, pending |
| `--color-surface-widget` | Widget background |
| `--color-surface-foreground` | Card/section backgrounds |
| `--color-stroke-default` | Borders, dividers |

### 4. Key BRD Spacing/Radius Tokens
| Token | Usage |
|-------|-------|
| `--radius-xs` | Small elements, chips |
| `--radius-s` | Cards, containers |
| `--radius-m` | Large containers |

---

## Widget Overview

The Widget is a dashboard container component with header, content area, and footer. It supports three sizes (S, M, L) that show the same data at different detail levels.

**Import:** `import { Widget } from "@/components/ui/widget"`

---

## Widget Sizes and Dimensions

| Size | Max Width | Height | Use Case |
|------|-----------|--------|----------|
| **S** | 456px | 290px | Compact KPI view, sparklines, bullet points |
| **M** | 912px | 580px | Default view with charts, tables, detailed content |
| **L** | 1368px | 872px | Extended view (more rows, larger charts) |

---

## Widget Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `size` | `"S"` \| `"M"` \| `"L"` | Yes | Widget size variant |
| `title` | `string` | Yes | Widget title in header |
| `timestamp` | `string` | Yes | Last update text (e.g., "Updated 2h ago") |
| `onRefresh` | `() => void` | No | Refresh callback. Shows icon on S, link on M/L |
| `onInfoClick` | `() => void` | No | Info button callback (shows IconButton if provided) |
| `menuItems` | `WidgetMenuItem[]` | No | Dropdown menu items (array of {label, onClick, disabled?}) |
| `sourceLink` | `{label, href}` | No | Footer left link |
| `viewMoreLink` | `{label, href}` | No | Footer right link |
| `children` | `ReactNode` | Yes | Widget content |

---

## Size-Specific Element Visibility

| Element | S | M | L |
|---------|---|---|---|
| Title | ✅ Always | ✅ Always | ✅ Always |
| Timestamp | ✅ Always | ✅ Always | ✅ Always |
| Refresh | Icon only | Link + text | Link + text |
| Info IconButton | Optional | Optional | Optional |
| ZoomIn button | ✅ Auto | ✅ Auto | ❌ Hidden |
| MenuButton | Optional | Optional | Optional |
| Footer links | Optional | Optional | Optional |

**Note:** The ZoomIn button is automatically shown on S and M sizes. It opens a Dialog containing the L size view.

---

## Content Rules by Size

### Size S - Compact View
**ALLOWED:**
- KPI numbers with trend indicators
- Sparklines (mini charts)
- Bullet point summaries
- Simple progress indicators
- Icon + value pairs

**NOT ALLOWED:**
- Tables
- Complex charts
- Long text content
- Multiple data sections

### Size M - Default View
**ALLOWED:**
- All S content types
- Full charts (bar, line, pie, etc.)
- Data tables
- Detailed lists
- Multiple sections

### Size L - Extended View
**ALLOWED:**
- Same as M
- More table rows visible
- Larger charts
- Additional detail panels
- Side-by-side comparisons

---

## Generation Pattern

When generating a widget (e.g., "Create a Sales Performance widget"), generate **THREE separate Widget components stacked vertically**, each showing the same data at different detail levels:

```tsx
import { Widget } from "@/components/ui/widget"
import { TrendingUp, TrendingDown } from "lucide-react"

// Data (same for all sizes)
const salesData = {
  total: "$1,234,567",
  change: "+12.5%",
  trend: "up",
}

// Size S - Compact KPI
function SalesWidgetS() {
  return (
    <Widget
      size="S"
      title="Sales Performance"
      timestamp="Updated 2h ago"
      onRefresh={() => {}}
      sourceLink={{ label: "View source", href: "#" }}
    >
      <div className="flex flex-col items-center justify-center h-full gap-2">
        <span className="text-3xl font-bold">{salesData.total}</span>
        <div className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4 text-green-500" />
          <span className="text-sm text-green-500">{salesData.change}</span>
        </div>
      </div>
    </Widget>
  )
}

// Size M - Default with chart
function SalesWidgetM() {
  return (
    <Widget
      size="M"
      title="Sales Performance"
      timestamp="Updated 2h ago"
      onRefresh={() => {}}
      menuItems={[{ label: "Export", onClick: () => {} }]}
      sourceLink={{ label: "View source", href: "#" }}
      viewMoreLink={{ label: "View details", href: "#" }}
    >
      <div className="flex flex-col h-full gap-4">
        {/* KPI row */}
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold">{salesData.total}</span>
          <span className="text-green-500">{salesData.change}</span>
        </div>
        {/* Chart area */}
        <div className="flex-1 bg-gray-50 rounded flex items-center justify-center">
          [Chart goes here]
        </div>
      </div>
    </Widget>
  )
}

// Size L - Extended view
function SalesWidgetL() {
  return (
    <Widget
      size="L"
      title="Sales Performance"
      timestamp="Updated 2h ago"
      onRefresh={() => {}}
      menuItems={[{ label: "Export", onClick: () => {} }]}
      sourceLink={{ label: "View source", href: "#" }}
      viewMoreLink={{ label: "Full report", href: "#" }}
    >
      <div className="flex flex-col h-full gap-4">
        {/* KPI row */}
        <div className="flex items-center gap-4">
          <span className="text-5xl font-bold">{salesData.total}</span>
          <span className="text-lg text-green-500">{salesData.change}</span>
        </div>
        {/* Large chart area */}
        <div className="flex-1 bg-gray-50 rounded flex items-center justify-center">
          [Extended chart with more data points]
        </div>
      </div>
    </Widget>
  )
}

// Render all three stacked
export default function SalesWidgetDemo() {
  return (
    <div className="flex flex-col gap-8">
      <SalesWidgetS />
      <SalesWidgetM />
      <SalesWidgetL />
    </div>
  )
}
```

---

## ZoomIn Behavior

When a user clicks the ZoomIn button on S or M size:
1. A Dialog/Modal opens
2. The Dialog shows the L size content
3. Dialog title repeats the widget title
4. Dialog has close button (IconButton)
5. Dialog footer repeats the widget footer links

This is handled automatically by the Widget component.

---

## DO NOT Use

❌ **Invalid size values:**
```tsx
<Widget size="small" />     // ❌ Use "S"
<Widget size="medium" />    // ❌ Use "M"
<Widget size="large" />     // ❌ Use "L"
```

❌ **Tables in S size:**
```tsx
<Widget size="S">
  <table>...</table>        // ❌ Tables not allowed in S size
</Widget>
```

❌ **Missing required props:**
```tsx
<Widget title="Revenue">    // ❌ Missing size and timestamp
  {children}
</Widget>
```

---

## ALWAYS Use

✅ **All required props:**
```tsx
<Widget
  size="M"
  title="Widget Title"
  timestamp="Updated just now"
>
  {content}
</Widget>
```

✅ **Semantic colors from BRD design tokens:**
```tsx
// Use CSS variables for colors
<span className="text-[var(--color-text-primary)]">Main text</span>
<span className="text-[var(--color-text-secondary)]">Secondary</span>
<span className="text-[var(--color-state-success)]">Positive</span>
<span className="text-[var(--color-state-error)]">Negative</span>
```

✅ **Lucide React icons:**
```tsx
import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react"

// Size icons appropriately
<TrendingUp className="w-4 h-4" />  // S size content
<TrendingUp className="w-5 h-5" />  // M size content
<TrendingUp className="w-6 h-6" />  // L size content
```

---

## General BRD Component Rules

When generating widget content, use BRD components with their correct APIs:

### IconButton (for actions in widget)
```tsx
import { IconButton } from "@/components/ui/icon-button"

<IconButton ariaLabel="Refresh" size="S" color="Blue">
  <RefreshCw size={16} />
</IconButton>
```
- Sizes: `"M"` (32px), `"S"` (24px), `"XS"` (16px)
- Colors: `"Blue"`, `"Black"`

### Link (for footer links)
```tsx
import { Link } from "@/components/ui/link"

<Link href="#" size="M">View source</Link>
<Link href="#" size="S" icon={<RefreshCw size={14} />}>Refresh</Link>
```
- Sizes: `"L"`, `"M"`, `"S"`

### Badge (for status indicators)
```tsx
import { Badge } from "@/components/ui/badge"

<Badge color="grass">Active</Badge>
<Badge color="negative">Critical</Badge>
<Badge color="bored">Pending</Badge>
```
- Colors: `"default"`, `"sky"`, `"grass"`, `"bored"`, `"negative"`, `"neutral"`, `"dark"`

---

## Example Widget Types

### KPI Widget
- S: Single large number with trend arrow
- M: Number + sparkline chart
- L: Number + full chart + breakdown table

### Chart Widget
- S: Mini sparkline or single bar
- M: Full chart with legend
- L: Larger chart + data table below

### List Widget
- S: Top 3 items only
- M: Top 10 items with basic details
- L: Full list with all columns

### Table Widget
- S: ❌ NOT ALLOWED (use summary instead)
- M: Basic table with key columns
- L: Full table with all columns and more rows

