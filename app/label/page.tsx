import { ComponentPageLayout } from "@/components/component-page-layout"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

// Added meta export for registry
export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "label",
  type: "registry:block",
  title: "Label",
  description: "Renders an accessible label associated with controls.",
  files: [
    {
      path: "ui/label.tsx",
      type: "registry:ui",
    },
  ],
  dependencies: ["@radix-ui/react-label"],
}

function LabelExample() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}

export default function LabelPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <LabelExample />
    </ComponentPageLayout>
  )
}
