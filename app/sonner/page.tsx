"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

// Added meta export for proper page metadata
export const meta = {
  name: "sonner",
  type: "registry:ui",
  dependencies: ["sonner", "next-themes"],
  files: [
    {
      path: "ui/sonner.tsx",
      type: "registry:ui",
    },
  ],
}

export default function SonnerPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Show Toast
          </Button>
          <Button variant="outline" onClick={() => toast.success("Event has been created")}>
            Success
          </Button>
          <Button variant="outline" onClick={() => toast.error("Event has not been created")}>
            Error
          </Button>
          <Button variant="outline" onClick={() => toast.warning("Event has a warning")}>
            Warning
          </Button>
          <Button variant="outline" onClick={() => toast.info("Event has info")}>
            Info
          </Button>
        </div>
      </div>
    </ComponentPageLayout>
  )
}
