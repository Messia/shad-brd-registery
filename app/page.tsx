import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Package, Palette, Code2, Zap } from "lucide-react"

export const dynamic = "force-dynamic"

// Registry base URL
const REGISTRY_URL = "https://shad-brd-registery.vercel.app"

// All available components in the registry
const COMPONENTS = [
  "accordion", "alert", "alert-dialog", "aspect-ratio", "avatar",
  "badge", "breadcrumb", "button", "calendar", "card", "carousel",
  "chart", "checkbox", "collapsible", "command", "context-menu",
  "dialog", "drawer", "dropdown-menu", "hover-card", "icon-button",
  "input", "input-otp", "label", "link", "menubar", "navigation-menu",
  "pagination", "popover", "progress", "radio-group", "resizable",
  "scroll-area", "select", "separator", "sheet", "skeleton", "slider",
  "sonner", "switch", "table", "tabs", "textarea", "toast", "toggle",
  "toggle-group", "tooltip"
]

// Generate the v0 URL for a specific component
// v0's api/open expects a single registry item (component/block), not the full registry
function getV0Url(component: string = "button") {
  return `https://v0.dev/chat/api/open?url=${encodeURIComponent(`${REGISTRY_URL}/r/${component}.json`)}`
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface-background)]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-icon-brand)]/5 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 relative">
          <div className="text-center space-y-6">
            <Badge variant="blue" size="md" className="mb-4">
              <Palette className="w-3 h-3 mr-1" />
              Custom Design System
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] tracking-tight">
              BRD Component Registry
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              A custom shadcn/ui component registry styled to match our Figma design system.
              Use with v0.dev to generate UI that matches your brand.
            </p>

            {/* Open in v0 Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="gap-2">
                <a href={getV0Url("all-components")} target="_blank" rel="noopener noreferrer">
                  <Zap className="w-5 h-5" />
                  Open All in v0
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Button>

              <Button size="lg" variant="secondary" asChild className="gap-2">
                <a href={getV0Url("button")} target="_blank" rel="noopener noreferrer">
                  <Zap className="w-5 h-5" />
                  Open Button in v0
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="gap-2">
                <Link href="/button">
                  <Package className="w-5 h-5" />
                  Browse Components
                </Link>
              </Button>
            </div>

            <p className="text-sm text-[var(--color-text-secondary)]">
              {COMPONENTS.length} components available
            </p>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Available Components
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {COMPONENTS.map((component) => (
            <Link
              key={component}
              href={`/${component}`}
              className="group flex items-center gap-2 px-4 py-3 rounded-[var(--radius-s)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-foreground)] hover:border-[var(--color-stroke-brand)] hover:shadow-sm transition-all"
            >
              <Code2 className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-icon-brand)] transition-colors" />
              <span className="text-sm text-[var(--color-text-primary)] capitalize">
                {component.replace(/-/g, " ")}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 border-t border-[var(--color-stroke-default)]">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Quick Start
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Install via CLI */}
          <div className="p-6 rounded-[var(--radius-m)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-foreground)]">
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">
              Install via CLI
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Add any component directly to your project:
            </p>
            <div className="bg-[var(--color-surface-background)] rounded-[var(--radius-xs)] p-3 font-mono text-sm overflow-x-auto">
              <code className="text-[var(--color-text-primary)]">
                npx shadcn@latest add {REGISTRY_URL}/registry/items/button
              </code>
            </div>
          </div>

          {/* Use with v0 */}
          <div className="p-6 rounded-[var(--radius-m)] border border-[var(--color-stroke-default)] bg-[var(--color-surface-foreground)]">
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">
              Use with v0.dev
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Generate UI using our design system:
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full gap-2">
                <a href={getV0Url("all-components")} target="_blank" rel="noopener noreferrer">
                  <Zap className="w-4 h-4" />
                  Open All Components
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button variant="secondary" asChild className="w-full gap-2">
                <a href={getV0Url("button")} target="_blank" rel="noopener noreferrer">
                  <Zap className="w-4 h-4" />
                  Open Button Only
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* API Endpoints */}
      <div className="max-w-5xl mx-auto px-6 py-12 border-t border-[var(--color-stroke-default)]">
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
          Registry API
        </h2>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <code className="bg-[var(--color-surface-foreground)] border border-[var(--color-stroke-default)] px-3 py-1.5 rounded-[var(--radius-xs)] font-mono text-sm">
              GET /registry
            </code>
            <span className="text-sm text-[var(--color-text-secondary)]">
              List all available components
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <code className="bg-[var(--color-surface-foreground)] border border-[var(--color-stroke-default)] px-3 py-1.5 rounded-[var(--radius-xs)] font-mono text-sm">
              GET /registry/items/{"[name]"}
            </code>
            <span className="text-sm text-[var(--color-text-secondary)]">
              Get a specific component
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-[var(--color-stroke-default)]">
        <p className="text-sm text-[var(--color-text-secondary)] text-center">
          Built with{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-icon-brand)] hover:underline"
          >
            shadcn/ui
          </a>
          {" "}and styled with custom design tokens
        </p>
      </footer>
    </div>
  )
}
