import { put } from "@vercel/blob"
import { readFileSync } from "fs"
import { join } from "path"

// Manually import all app modules to extract their metadata
import * as accordionModule from "./app/accordion/page.tsx"
import * as alertModule from "./app/alert/page.tsx"
import * as alertDialogModule from "./app/alert-dialog/page.tsx"
import * as aspectRatioModule from "./app/aspect-ratio/page.tsx"
import * as avatarModule from "./app/avatar/page.tsx"
import * as badgeModule from "./app/badge/page.tsx"
import * as breadcrumbModule from "./app/breadcrumb/page.tsx"
import * as buttonModule from "./app/button/page.tsx"
import * as calendarModule from "./app/calendar/page.tsx"
import * as cardModule from "./app/card/page.tsx"
import * as carouselModule from "./app/carousel/page.tsx"
import * as chartModule from "./app/chart/page.tsx"
import * as checkboxModule from "./app/checkbox/page.tsx"
import * as collapsibleModule from "./app/collapsible/page.tsx"
import * as commandModule from "./app/command/page.tsx"
import * as contextMenuModule from "./app/context-menu/page.tsx"
import * as dialogModule from "./app/dialog/page.tsx"
import * as drawerModule from "./app/drawer/page.tsx"
import * as dropdownMenuModule from "./app/dropdown-menu/page.tsx"
import * as hoverCardModule from "./app/hover-card/page.tsx"
import * as inputModule from "./app/input/page.tsx"
import * as inputOtpModule from "./app/input-otp/page.tsx"
import * as labelModule from "./app/label/page.tsx"
import * as menubarModule from "./app/menubar/page.tsx"
import * as navigationMenuModule from "./app/navigation-menu/page.tsx"
import * as paginationModule from "./app/pagination/page.tsx"
import * as popoverModule from "./app/popover/page.tsx"
import * as progressModule from "./app/progress/page.tsx"
import * as radioGroupModule from "./app/radio-group/page.tsx"
import * as resizableModule from "./app/resizable/page.tsx"
import * as scrollAreaModule from "./app/scroll-area/page.tsx"
import * as selectModule from "./app/select/page.tsx"
import * as separatorModule from "./app/separator/page.tsx"
import * as sheetModule from "./app/sheet/page.tsx"
import * as skeletonModule from "./app/skeleton/page.tsx"
import * as sliderModule from "./app/slider/page.tsx"
import * as sonnerModule from "./app/sonner/page.tsx"
import * as switchModule from "./app/switch/page.tsx"
import * as tableModule from "./app/table/page.tsx"
import * as tabsModule from "./app/tabs/page.tsx"
import * as textareaModule from "./app/textarea/page.tsx"
import * as toastModule from "./app/toast/page.tsx"
import * as toggleModule from "./app/toggle/page.tsx"
import * as toggleGroupModule from "./app/toggle-group/page.tsx"
import * as tooltipModule from "./app/tooltip/page.tsx"

// Use VERCEL_DEPLOYMENT_ID as fingerprint instead of commit SHA
const commitSha = process.env.VERCEL_DEPLOYMENT_ID || "local"

// Extract metadata from all modules - updated to include all components
const modules = [
  { name: "accordion", module: accordionModule },
  { name: "alert", module: alertModule },
  { name: "alert-dialog", module: alertDialogModule },
  { name: "aspect-ratio", module: aspectRatioModule },
  { name: "avatar", module: avatarModule },
  { name: "badge", module: badgeModule },
  { name: "breadcrumb", module: breadcrumbModule },
  { name: "button", module: buttonModule },
  { name: "calendar", module: calendarModule },
  { name: "card", module: cardModule },
  { name: "carousel", module: carouselModule },
  { name: "chart", module: chartModule },
  { name: "checkbox", module: checkboxModule },
  { name: "collapsible", module: collapsibleModule },
  { name: "command", module: commandModule },
  { name: "context-menu", module: contextMenuModule },
  { name: "dialog", module: dialogModule },
  { name: "drawer", module: drawerModule },
  { name: "dropdown-menu", module: dropdownMenuModule },
  { name: "hover-card", module: hoverCardModule },
  { name: "input", module: inputModule },
  { name: "input-otp", module: inputOtpModule },
  { name: "label", module: labelModule },
  { name: "menubar", module: menubarModule },
  { name: "navigation-menu", module: navigationMenuModule },
  { name: "pagination", module: paginationModule },
  { name: "popover", module: popoverModule },
  { name: "progress", module: progressModule },
  { name: "radio-group", module: radioGroupModule },
  { name: "resizable", module: resizableModule },
  { name: "scroll-area", module: scrollAreaModule },
  { name: "select", module: selectModule },
  { name: "separator", module: separatorModule },
  { name: "sheet", module: sheetModule },
  { name: "skeleton", module: skeletonModule },
  { name: "slider", module: sliderModule },
  { name: "sonner", module: sonnerModule },
  { name: "switch", module: switchModule },
  { name: "table", module: tableModule },
  { name: "tabs", module: tabsModule },
  { name: "textarea", module: textareaModule },
  { name: "toast", module: toastModule },
  { name: "toggle", module: toggleModule },
  { name: "toggle-group", module: toggleGroupModule },
  { name: "tooltip", module: tooltipModule },
]

// Build main registry data matching shadcn schema
const registryData = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "shadcn-components",
   type: "registry:ui",
  homepage: "https://ui.shadcn.com",
  items: modules.map(({ name, module }) => {
    const meta = module.meta

    console.log(`Processing ${name}:`, {
      name: meta?.name,
      title: meta?.title,
      description: meta?.description,
      type: meta?.type,
      dependencies: meta?.dependencies,
      files: meta?.files,
    })

    // Read file content from filesystem if files are specified in meta
    const files = meta?.files?.map((file: any) => {
      let content = ""

      try {
        // Determine base path based on registry type
        let basePath = ""
        if (file.type === "registry:ui") {
          basePath = "components"
        } else if (file.type === "registry:hook") {
          basePath = "hooks"
        } else {
          throw new Error(`Unknown registry type: ${meta?.type}`)
        }

        // Read the actual file content from the filesystem
        const filePath = join(process.cwd(), basePath, file.path)
        content = readFileSync(filePath, "utf-8")
        console.log(`Successfully read content for ${file.path} (${content.length} characters)`)
      } catch (error) {
        // Throw error if file not found
        throw new Error(`File not found: ${file.path}. Error: ${error}`)
      }

      return {
        path: file.path,
        type: file.type || "registry:ui",
        content: content, // Add the actual file content here
      }
    }) || [
      {
        path: `registry/new-york/${name}/${name}.tsx`,
        type: "registry:ui",
        content: `// Default placeholder content for ${name}`,
      },
    ]

    return {
      name,
      type: "registry:block",
      title: meta?.title || name.charAt(0).toUpperCase() + name.slice(1),
      description: meta?.description || `A ${name} component.`,
      files: files,
    }
  }),
}

console.log("Registry Data Summary:", {
  totalComponents: registryData.items.length,
  commitSha,
  componentsWithMeta: registryData.items.filter((c) => c.title !== c.name.charAt(0).toUpperCase() + c.name.slice(1))
    .length,
})

// Upload main registry and individual items to blob storage
async function uploadRegistry() {
  try {
    // Upload main registry
    const mainBlob = await put(`registry-${commitSha}.json`, JSON.stringify(registryData, null, 2), {
      access: "public",
      contentType: "application/json",
    })

    console.log("Main registry uploaded successfully:", mainBlob.url)

    // Upload individual registry items
    for (const item of registryData.items) {
      const individualItem = {
        $schema: "https://ui.shadcn.com/schema/registry-item.json",
        ...item,
      }

      const itemBlob = await put(
        `registry-item-${item.name}-${commitSha}.json`,
        JSON.stringify(individualItem, null, 2),
        {
          access: "public",
          contentType: "application/json",
        },
      )

      console.log(`Individual item ${item.name} uploaded:`, itemBlob.url)
    }

    return mainBlob
  } catch (error) {
    console.error("Failed to upload registry:", error)
    throw error
  }
}

// Execute the build
uploadRegistry().catch(console.error)
