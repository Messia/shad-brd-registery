import { ComponentPageLayout } from "@/components/component-page-layout"
import { registryMetadata } from "@/lib/registry-metadata"

export const dynamic = "force-dynamic"

const V0_INSTRUCTIONS = `Use BRD registry components whenever possible.
Treat Shell as the top-level application frame and use it exactly once.
When starting from BRD App Starter, place all generated UI only inside the shell content area.
Prefer existing BRD components, tokens, and patterns, including Widget, over generating raw replacements for buttons, cards, inputs, tables, charts, navigation, or widget-like panels.
Never recreate or render the registry website UI, registry sidebar, component catalog, or documentation chrome.`

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "app-starter",
  type: "registry:block",
  title: "App Starter",
  description:
    "Root BRD application scaffold for v0. Starts with Shell, sanctioned Widget usage, and access to the full BRD component surface.",
  ...registryMetadata["app-starter"],
  files: [
    {
      path: "app-starter/page.tsx",
      type: "registry:page",
      target: "app/page.tsx",
    },
  ],
  dependencies: [],
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
          Use this starter when prompting v0 with requests like <span className="font-medium text-[var(--color-text-primary)]">"Create a view of..."</span>. It opens with the BRD shell scaffold and full access to reusable registry components, including Widget.
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
