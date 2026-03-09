import { ComponentPageLayout } from "@/components/component-page-layout"
import { registryMetadata } from "@/lib/registry-metadata"

export const dynamic = "force-dynamic"

const V0_INSTRUCTIONS = `Use BRD registry components whenever possible.
Treat Shell as the top-level application frame and use it exactly once.
When starting from BRD App Starter, place all generated UI only inside the shell content area.
Use var(--font-family-brand) as the only font family and prefer BRD headline/body/link typography tokens for custom text styles.
Use BRD spacing tokens for layout and internal spacing. Prefer var(--spacing-sp-4), var(--spacing-sp-8), var(--spacing-sp-12), var(--spacing-sp-16), var(--spacing-sp-24), var(--spacing-sp-32), var(--spacing-sp-40), and var(--spacing-sp-48) instead of arbitrary pixel values.
Do not add shadows unless the shadow already exists inside a BRD component or the user explicitly asks for it.
For charts, use Highcharts with the helper in "@/lib/brd-highcharts-theme". Apply the BRD theme once and assign series colors in chart swatch order 1 through 24.
For data tables and grids, use AG Grid with the helper in "@/lib/brd-ag-grid-theme". Do not build primary application tables with plain HTML tables or the lightweight BRD Table component.
Prefer existing BRD components, tokens, and patterns, including Widget, over generating raw replacements for buttons, cards, inputs, charts, grids, navigation, or widget-like panels.
Never recreate or render the registry website UI, registry sidebar, component catalog, or documentation chrome.`

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "app-starter",
  type: "registry:block",
  title: "App Starter",
  description:
    "Root BRD application scaffold for v0. Starts with Shell, sanctioned Widget usage, BRD typography token rules, and starter helpers for Highcharts and AG Grid.",
  ...registryMetadata["app-starter"],
  files: [
    {
      path: "app-starter/page.tsx",
      type: "registry:page",
      target: "app/page.tsx",
    },
    {
      path: "brd-highcharts-theme.ts",
      type: "registry:lib",
      target: "lib/brd-highcharts-theme.ts",
    },
    {
      path: "brd-ag-grid-theme.ts",
      type: "registry:lib",
      target: "lib/brd-ag-grid-theme.ts",
    },
  ],
  dependencies: [
    "highcharts",
    "@highcharts/react",
    "ag-grid-community",
    "ag-grid-react",
  ],
}

export default function AppStarterRegistryPage() {
  return (
    <ComponentPageLayout
      meta={meta}
      headerActions={(
        <a
          href="/app-starter/demo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--color-stroke-default)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)] transition-colors"
        >
          Open in new tab
        </a>
      )}
    >
      <div className="space-y-6">
        <div className="rounded-md border border-[var(--color-stroke-default)] bg-[var(--color-surface-foreground)] p-4 text-sm text-[var(--color-text-secondary)]">
          Use this starter when prompting v0 with requests like <span className="font-medium text-[var(--color-text-primary)]">"Create a view of..."</span>. It opens with the BRD shell scaffold, full access to reusable registry components, and starter helpers for BRD typography, Highcharts, and AG Grid.
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-md border border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-4 text-sm text-[var(--color-text-secondary)]">
            <p className="font-semibold text-[var(--color-text-primary)]">Typography</p>
            <p className="mt-2">Use <code>var(--font-family-brand)</code> as the only font family and keep custom text styles on BRD body, headline, and link tokens.</p>
          </div>
          <div className="rounded-md border border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-4 text-sm text-[var(--color-text-secondary)]">
            <p className="font-semibold text-[var(--color-text-primary)]">Spacing</p>
            <p className="mt-2">Use BRD <code>var(--spacing-sp-X)</code> tokens for gap, padding, and margin instead of arbitrary pixel spacing.</p>
          </div>
          <div className="rounded-md border border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-4 text-sm text-[var(--color-text-secondary)]">
            <p className="font-semibold text-[var(--color-text-primary)]">Charts</p>
            <p className="mt-2">Use <code>@/lib/brd-highcharts-theme</code> for every chart and keep series colors in chart swatch order 1 through 24.</p>
          </div>
          <div className="rounded-md border border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-4 text-sm text-[var(--color-text-secondary)]">
            <p className="font-semibold text-[var(--color-text-primary)]">Tables</p>
            <p className="mt-2">Use <code>@/lib/brd-ag-grid-theme</code> and AG Grid for all primary data tables in generated app views.</p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Recommended v0 instruction</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Add this to your v0 Instructions for more reliable generation behavior:
          </p>
          <pre className="overflow-x-auto rounded-md border border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-4 text-xs text-[var(--color-text-primary)]">
            <code>{V0_INSTRUCTIONS}</code>
          </pre>
        </div>
      </div>
    </ComponentPageLayout>
  )
}
