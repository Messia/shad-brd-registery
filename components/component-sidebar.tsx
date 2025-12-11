"use client"

import { SidebarGroupLabel } from "@/components/ui/sidebar"

import type React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link"

interface ComponentSidebarProps {
  currentComponent: string
  children: React.ReactNode
}

// Alphabetized the components array
const components = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "collapsible",
  "command",
  "context-menu",
  "dialog",
  "drawer",
  "dropdown-menu",
  "form",
  "hover-card",
  "input",
  "input-otp",
  "label",
  "menubar",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "radio-group",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "skeleton",
  "slider",
  "sonner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toast",
  "toggle",
  "toggle-group",
  "tooltip",
]

export function ComponentSidebar({ currentComponent, children }: ComponentSidebarProps) {
  return (
    <SidebarProvider>
      <Sidebar className="border-none bg-transparent">
        <SidebarContent className="bg-transparent">
          <SidebarGroup>
            <SidebarGroupLabel>Components</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {components.map((component) => (
                  <SidebarMenuItem key={component}>
                    <SidebarMenuButton
                      asChild
                      isActive={currentComponent === component}
                      className="hover:bg-transparent data-[active=true]:bg-transparent data-[active=true]:font-medium"
                    >
                      <Link href={`/${component}`}>
                        {component
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <main className="flex-1">
        {/* Removed border and simplified top bar */}
        <div className="flex h-14 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="hover:bg-transparent" />
            <div>
              <h1 className="text-lg font-semibold">
                shadcn/v0 registry
              </h1>
            </div>
          </div>
          {/* Replaced "Component Showcase" with attribution */}
          <p className="text-sm text-muted-foreground">
            Built by{" "}
            <a href="https://x.com/jacobmparis" target="_blank" rel="noopener noreferrer" className="underline">
              @jacobmparis
            </a>
          </p>
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}
