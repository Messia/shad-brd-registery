import type React from "react"

interface ComponentFile {
  path: string
  type: string
}

interface ComponentMeta {
  $schema: string
  name: string
  type: string
  title: string
  description: string
  files: ComponentFile[]
  dependencies?: string[]
  cssVars?: {
    theme?: Record<string, string>
    light?: Record<string, string>
    dark?: Record<string, string>
  }
}

interface ComponentPageLayoutProps {
  meta: ComponentMeta
  children: React.ReactNode
}

export function ComponentPageLayout({ meta, children }: ComponentPageLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{meta.name}</h1>
      </div>

      <div className="border rounded-md p-8 bg-background">{children}</div>

      {/* Dependencies Section */}
      {meta.dependencies && meta.dependencies.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">DEPENDENCIES</h2>
          <div className="bg-muted/50 p-4 rounded-md space-y-2">
            <div className="text-sm font-medium text-muted-foreground">NPM</div>
            {meta.dependencies.map((dep, index) => (
              <div key={index} className="font-mono text-sm text-foreground">
                {dep}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Files Section */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">FILES</h2>
        <div className="bg-muted/50 p-4 rounded-md">
          {meta.files.map((file, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="font-mono text-sm text-foreground">{file.path}</span>
              <span className="text-sm text-foreground">{file.type.replace("registry:", "")}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
