import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ComponentPageLayout } from "@/components/component-page-layout"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

export const meta = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "select",
  type: "registry:block",
  title: "Select",
  description: "Displays a list of options for the user to pick from—triggered by a button.",
  files: [
    {
      path: "ui/select.tsx",
      type: "registry:ui",
    },
  ],
}

function SelectExample() {
  return (
    <div className="space-y-4 max-w-sm">
      <div>
        <Label>Select a fruit</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default function SelectPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <SelectExample />
    </ComponentPageLayout>
  )
}
