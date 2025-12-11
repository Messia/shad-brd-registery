import { ComponentPageLayout } from "@/components/component-page-layout"
import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

// Added meta export for toggle component
export const meta = {
  name: "toggle",
  type: "registry:ui",
  dependencies: ["@radix-ui/react-toggle"],
  files: [
    {
      path: "ui/toggle.tsx",
      type: "registry:ui",
    },
  ],
}

export default function TogglePage() {
  return (
    <ComponentPageLayout meta={meta} title="Toggle" description="A two-state button that can be either on or off.">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
        <div className="flex items-center space-x-2">
          <Toggle variant="outline" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </ComponentPageLayout>
  )
}
