'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

import { ComponentPageLayout } from '@/components/component-page-layout'
import { Widget } from '@/components/ui/widget'
import { registryMetadata } from '@/lib/registry-metadata'

export const meta = {
  $schema: 'https://ui.shadcn.com/schema/registry-item.json',
  name: 'widget',
  type: 'registry:ui',
  title: 'Widget',
  description:
    'A dashboard widget shell for complex content with S/M/L width ranges and responsive zoom for S and M.',
  ...registryMetadata.widget,
  files: [
    {
      path: 'ui/widget.tsx',
      type: 'registry:ui',
    },
  ],
  dependencies: ['class-variance-authority', 'lucide-react'],
}

const kpiData = {
  value: '$1,234,567',
  change: '+12.5%',
  trend: 'up' as const,
}

function WidgetDemo({
  size,
  wrapperWidth,
  wrapperLabel,
}: {
  size: 'S' | 'M' | 'L'
  wrapperWidth: string
  wrapperLabel: string
}) {
  return (
    <div className="flex flex-col gap-[var(--spacing-sp-8)]">
      <div className="text-[var(--color-text-secondary)] [font:var(--font-body-small)]">
        Parent width: {wrapperLabel}
      </div>
      <div
        className="max-w-full rounded-[var(--radius-s)] border border-dashed border-[var(--color-stroke-default)] bg-[var(--color-surface-background)] p-[var(--spacing-sp-12)]"
        style={{ width: wrapperWidth }}
      >
        <Widget
          size={size}
          title={`Revenue Overview (${size})`}
          timestamp="Updated 2h ago"
          onRefresh={() => console.log('Refresh clicked')}
          onInfoClick={() => console.log('Info clicked')}
          menuItems={[
            { label: 'Export data', onClick: () => console.log('Export') },
            { label: 'Settings', onClick: () => console.log('Settings') },
          ]}
          sourceLink={{ label: 'View source', href: '#' }}
          viewMoreLink={{ label: 'View details', href: '#' }}
        >
          <div className="flex h-full flex-col gap-[var(--spacing-sp-24)]">
            <div className="flex flex-wrap items-center gap-[var(--spacing-sp-12)]">
              <span className="text-[var(--color-text-primary)] [font:var(--font-headline-h4)]">
                {kpiData.value}
              </span>
              <div className="flex items-center gap-[var(--spacing-sp-4)]">
                {kpiData.trend === 'up' ? (
                  <TrendingUp className="size-5 text-[var(--color-state-success)]" />
                ) : (
                  <TrendingDown className="size-5 text-[var(--color-state-error)]" />
                )}
                <span className="text-[var(--color-state-success)] [font:var(--font-body-medium-semibold)]">
                  {kpiData.change}
                </span>
              </div>
            </div>
            <div className="grid flex-1 gap-[var(--spacing-sp-12)] md:grid-cols-2">
              <div className="rounded-[var(--radius-xs)] border border-dashed border-[var(--color-stroke-default)] bg-[var(--color-surface-foreground)] p-[var(--spacing-sp-12)] text-[var(--color-text-secondary)] [font:var(--font-body-medium)]">
                Main content region for tables, charts, forms, or lists.
              </div>
              <div className="rounded-[var(--radius-xs)] border border-dashed border-[var(--color-stroke-default)] bg-[var(--color-surface-foreground)] p-[var(--spacing-sp-12)] text-[var(--color-text-secondary)] [font:var(--font-body-medium)]">
                Secondary panel or detail state.
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>
  )
}

export default function WidgetPage() {
  return (
    <ComponentPageLayout meta={meta}>
      <div className="flex flex-col gap-[var(--spacing-sp-32)]">
        <div className="flex flex-col gap-[var(--spacing-sp-8)]">
          <h3 className="text-[var(--color-text-primary)] [font:var(--font-headline-h5)]">
            Size ranges
          </h3>
          <p className="text-[var(--color-text-secondary)] [font:var(--font-body-medium)]">
            Widgets no longer use fixed widths. Each size has its own min and max
            width, fixed height, unified sp-24 padding, and responsive zoom for
            S and M.
          </p>
        </div>

        <div className="flex flex-col gap-[var(--spacing-sp-24)]">
          <WidgetDemo size="S" wrapperWidth="360px" wrapperLabel="360px" />
          <WidgetDemo size="M" wrapperWidth="760px" wrapperLabel="760px" />
          <WidgetDemo size="L" wrapperWidth="1200px" wrapperLabel="1200px" />
        </div>

        <div className="flex flex-col gap-[var(--spacing-sp-24)]">
          <div className="flex flex-col gap-[var(--spacing-sp-8)]">
            <h3 className="text-[var(--color-text-primary)] [font:var(--font-headline-h5)]">
              Range behavior
            </h3>
            <p className="text-[var(--color-text-secondary)] [font:var(--font-body-medium)]">
              These wrappers show that the widget grows within its allowed width
              range instead of pretending every size is fixed.
            </p>
          </div>

          <WidgetDemo size="M" wrapperWidth="640px" wrapperLabel="640px (below M max)" />
          <WidgetDemo size="L" wrapperWidth="1600px" wrapperLabel="1600px (above L max)" />
        </div>
      </div>
    </ComponentPageLayout>
  )
}
