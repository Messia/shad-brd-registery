import { ComponentPageLayout } from "@/components/component-page-layout"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Grid,
  LayoutGrid,
  Rows,
  Settings,
  User,
  Bell
} from "lucide-react"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

// Added meta export for toggle-group component
export const meta = {
  name: "toggle-group",
  type: "registry:ui",
  dependencies: ["@radix-ui/react-toggle-group"],
  files: [
    {
      path: "ui/toggle-group.tsx",
      type: "registry:ui",
    },
  ],
}

export default function ToggleGroupPage() {
  return (
    <ComponentPageLayout
      meta={meta}
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off. Based on old ButtonGroup component."
    >
      <div className="space-y-12">
        {/* Size Variants */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Size Variants</h3>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Small (sm)</p>
              <ToggleGroup type="single" size="sm" defaultValue="center">
                <ToggleGroupItem value="left" icon={<AlignLeft />} />
                <ToggleGroupItem value="center" icon={<AlignCenter />} />
                <ToggleGroupItem value="right" icon={<AlignRight />} />
                <ToggleGroupItem value="justify" icon={<AlignJustify />} />
              </ToggleGroup>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Default (M)</p>
              <ToggleGroup type="single" size="default" defaultValue="center">
                <ToggleGroupItem value="left" icon={<AlignLeft />} />
                <ToggleGroupItem value="center" icon={<AlignCenter />} />
                <ToggleGroupItem value="right" icon={<AlignRight />} />
                <ToggleGroupItem value="justify" icon={<AlignJustify />} />
              </ToggleGroup>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Large (lg) - Default</p>
              <ToggleGroup type="single" size="lg" defaultValue="center">
                <ToggleGroupItem value="left" icon={<AlignLeft />} />
                <ToggleGroupItem value="center" icon={<AlignCenter />} />
                <ToggleGroupItem value="right" icon={<AlignRight />} />
                <ToggleGroupItem value="justify" icon={<AlignJustify />} />
              </ToggleGroup>
            </div>
          </div>
        </section>

        {/* Single Selection */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Single Selection</h3>
          <div className="flex flex-col gap-4">
            <ToggleGroup type="single" defaultValue="grid">
              <ToggleGroupItem value="list" icon={<List />}>List</ToggleGroupItem>
              <ToggleGroupItem value="grid" icon={<Grid />}>Grid</ToggleGroupItem>
              <ToggleGroupItem value="rows" icon={<Rows />}>Rows</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </section>

        {/* Multiple Selection */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Multiple Selection</h3>
          <div className="flex flex-col gap-4">
            <ToggleGroup type="multiple" defaultValue={["bold"]}>
              <ToggleGroupItem value="bold" icon={<Bold />} aria-label="Toggle bold" />
              <ToggleGroupItem value="italic" icon={<Italic />} aria-label="Toggle italic" />
              <ToggleGroupItem value="underline" icon={<Underline />} aria-label="Toggle underline" />
            </ToggleGroup>
          </div>
        </section>

        {/* Icon + Text */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Icon + Text</h3>
          <div className="flex flex-col gap-4">
            <ToggleGroup type="single" defaultValue="settings">
              <ToggleGroupItem value="settings" icon={<Settings />}>Settings</ToggleGroupItem>
              <ToggleGroupItem value="profile" icon={<User />}>Profile</ToggleGroupItem>
              <ToggleGroupItem value="notifications" icon={<Bell />}>Notifications</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </section>

        {/* Text Only */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Text Only</h3>
          <div className="flex flex-col gap-4">
            <ToggleGroup type="single" defaultValue="day">
              <ToggleGroupItem value="day">Day</ToggleGroupItem>
              <ToggleGroupItem value="week">Week</ToggleGroupItem>
              <ToggleGroupItem value="month">Month</ToggleGroupItem>
              <ToggleGroupItem value="year">Year</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </section>

        {/* Icon Only (all sizes) */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Icon Only (All Sizes)</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Small:</span>
              <ToggleGroup type="multiple" size="sm" defaultValue={["bold", "italic"]}>
                <ToggleGroupItem value="bold" icon={<Bold />} iconOnly aria-label="Bold" />
                <ToggleGroupItem value="italic" icon={<Italic />} iconOnly aria-label="Italic" />
                <ToggleGroupItem value="underline" icon={<Underline />} iconOnly aria-label="Underline" />
              </ToggleGroup>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Default:</span>
              <ToggleGroup type="multiple" size="default" defaultValue={["bold", "italic"]}>
                <ToggleGroupItem value="bold" icon={<Bold />} iconOnly aria-label="Bold" />
                <ToggleGroupItem value="italic" icon={<Italic />} iconOnly aria-label="Italic" />
                <ToggleGroupItem value="underline" icon={<Underline />} iconOnly aria-label="Underline" />
              </ToggleGroup>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">Large:</span>
              <ToggleGroup type="multiple" size="lg" defaultValue={["bold", "italic"]}>
                <ToggleGroupItem value="bold" icon={<Bold />} iconOnly aria-label="Bold" />
                <ToggleGroupItem value="italic" icon={<Italic />} iconOnly aria-label="Italic" />
                <ToggleGroupItem value="underline" icon={<Underline />} iconOnly aria-label="Underline" />
              </ToggleGroup>
            </div>
          </div>
        </section>

        {/* Disabled */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Disabled</h3>
          <div className="flex flex-col gap-4">
            <ToggleGroup type="single" disabled defaultValue="center">
              <ToggleGroupItem value="left" icon={<AlignLeft />} />
              <ToggleGroupItem value="center" icon={<AlignCenter />} />
              <ToggleGroupItem value="right" icon={<AlignRight />} />
            </ToggleGroup>
          </div>
        </section>
      </div>
    </ComponentPageLayout>
  )
}
