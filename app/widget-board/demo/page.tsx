import { WidgetBoardShowcase } from "@/components/widget-board-showcase"

export default function WidgetBoardDemoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface-background)] px-[var(--spacing-sp-24)] py-[var(--spacing-sp-24)]">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-[var(--spacing-sp-24)]">
        <div>
          <h1
            className="text-[var(--color-text-primary)]"
            style={{ font: "var(--font-headline-h3)" }}
          >
            Widget Board Demo
          </h1>
          <p
            className="mt-2 text-[var(--color-text-secondary)]"
            style={{ font: "var(--font-body-medium)" }}
          >
            Drag and resize widgets to validate BRD dashboard snapping behavior.
          </p>
        </div>
        <WidgetBoardShowcase editable />
      </div>
    </div>
  )
}
