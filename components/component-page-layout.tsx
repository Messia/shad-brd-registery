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

const REGISTRY_URL = "https://shad-brd-registery.vercel.app"

export function ComponentPageLayout({ meta, children }: ComponentPageLayoutProps) {
  const v0Url = `https://v0.dev/chat/api/open?url=${encodeURIComponent(`${REGISTRY_URL}/r/${meta.name}.json`)}`

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">{meta.name}</h1>
        <a
          href={v0Url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Open in v0
        </a>
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
