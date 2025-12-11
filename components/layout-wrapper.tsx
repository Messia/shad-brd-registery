"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { ComponentSidebar } from "./component-sidebar"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()
  // Extract component name from pathname (e.g., "/button" -> "button")
  const currentComponent = pathname.slice(1) || "button"

  // Updated to use the new shadcn sidebar - ComponentSidebar now handles all layout
  return (
    <ComponentSidebar currentComponent={currentComponent}>
      <div className="container mx-auto p-6">{children}</div>
    </ComponentSidebar>
  )
}
