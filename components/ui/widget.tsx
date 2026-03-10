'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Info, ZoomIn, RefreshCw, MoreVertical } from 'lucide-react'

import { cn } from '@/lib/utils'
import { IconButton } from '@/components/ui/icon-button'
import { Link } from '@/components/ui/link'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Widget size types
export type WidgetSize = 'S' | 'M' | 'L'

// Widget menu item interface
export interface WidgetMenuItem {
  label: string
  onClick?: () => void
  disabled?: boolean
}

// Widget link interface
export interface WidgetLink {
  label: string
  href: string
}

const WIDGET_SIZE_CONSTRAINTS = {
  S: { minWidth: 290, maxWidth: 456, height: 315 },
  M: { minWidth: 580, maxWidth: 912, height: 654 },
  L: { minWidth: 872, maxWidth: 1368, height: 654 },
} as const

const widgetVariants = cva(
  [
    'flex flex-col',
    'bg-[var(--color-surface-widget)]',
    'rounded-[var(--radius-s)]',
    'overflow-hidden',
    'box-border',
    'gap-[var(--spacing-sp-24)]',
    'p-[var(--spacing-sp-24)]',
  ],
  {
    variants: {
      size: {
        S: '',
        M: '',
        L: '',
      },
    },
    defaultVariants: {
      size: 'M',
    },
  }
)

export interface WidgetProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof widgetVariants> {
  /** Widget size variant */
  size?: WidgetSize
  /** Widget title displayed in the header */
  title: string
  /** Last update timestamp text (required) */
  timestamp: string
  /** Callback when refresh is clicked */
  onRefresh?: () => void
  /** Callback when info icon is clicked (optional - shows info button if provided) */
  onInfoClick?: () => void
  /** Menu items for the dropdown menu (optional) */
  menuItems?: WidgetMenuItem[]
  /** Source link displayed in the footer left (optional) */
  sourceLink?: WidgetLink
  /** View more link displayed in the footer right (optional) */
  viewMoreLink?: WidgetLink
  /** Widget content */
  children?: React.ReactNode
}

const Widget = React.forwardRef<HTMLDivElement, WidgetProps>(
  (
    {
      size = 'M',
      title,
      timestamp,
      onRefresh,
      onInfoClick,
      menuItems,
      sourceLink,
      viewMoreLink,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [zoomOpen, setZoomOpen] = React.useState(false)
    const { style, ...rest } = props
    const safeStyle = style ? { ...style } : undefined
    if (safeStyle) {
      delete safeStyle.width
      delete safeStyle.height
      delete safeStyle.minWidth
      delete safeStyle.maxWidth
      delete safeStyle.minHeight
      delete safeStyle.maxHeight
    }
    const constraints = WIDGET_SIZE_CONSTRAINTS[size]
    const widgetStyle: React.CSSProperties = {
      inlineSize: `min(100%, ${constraints.maxWidth}px)`,
      minInlineSize: `min(100%, ${constraints.minWidth}px)`,
      maxInlineSize: `${constraints.maxWidth}px`,
      blockSize: `${constraints.height}px`,
      minBlockSize: `${constraints.height}px`,
      maxBlockSize: `${constraints.height}px`,
      ...safeStyle,
    }

    const hasFooter = sourceLink || viewMoreLink

    // Render footer content (reused in widget and dialog)
    const renderFooter = () => {
      if (!hasFooter) return null
      return (
        <div
          data-slot="widget-footer"
          className="flex w-full items-center justify-between gap-[var(--spacing-sp-24)] shrink-0"
        >
          {sourceLink ? (
            <Link href={sourceLink.href}>
              {sourceLink.label}
            </Link>
          ) : (
            <div aria-hidden="true" />
          )}
          {viewMoreLink && (
            <Link href={viewMoreLink.href}>
              {viewMoreLink.label}
            </Link>
          )}
        </div>
      )
    }

    return (
      <>
        <div
          ref={ref}
          className={cn(className, widgetVariants({ size }))}
          data-size={size}
          data-slot="widget"
          style={widgetStyle}
          {...rest}
        >
          <div
            data-slot="widget-header"
            className="flex w-full items-start justify-between gap-[var(--spacing-sp-24)] shrink-0"
          >
            <div
              data-slot="widget-header-meta"
              className="flex min-w-0 flex-1 flex-col gap-[var(--spacing-sp-8)]"
            >
              <div
                data-slot="widget-title-row"
                className="flex min-w-0 items-center gap-[var(--spacing-sp-4)]"
              >
                <h4
                  data-slot="widget-title"
                  className="m-0 min-w-0 truncate text-[var(--color-text-primary)] [font:var(--font-headline-h4)]"
                >
                  {title}
                </h4>
                {onInfoClick && (
                  <IconButton
                    ariaLabel="Widget info"
                    size="S"
                    color="Black"
                    onClick={onInfoClick}
                  >
                    <Info size={16} />
                  </IconButton>
                )}
              </div>
              <div
                data-slot="widget-timestamp-row"
                className="flex min-w-0 flex-wrap items-center gap-[var(--spacing-sp-8)]"
              >
                <span
                  data-slot="widget-timestamp"
                  className="text-[var(--color-text-secondary)] [font:var(--font-body-medium)]"
                >
                  {timestamp}
                </span>
                {onRefresh && (
                  size === 'S' ? (
                    <IconButton
                      ariaLabel="Refresh"
                      size="XS"
                      color="Blue"
                      onClick={onRefresh}
                    >
                      <RefreshCw size={14} />
                    </IconButton>
                  ) : (
                    <Link
                      href="#"
                      icon={<RefreshCw size={14} />}
                      onClick={(e) => {
                        e.preventDefault()
                        onRefresh()
                      }}
                    >
                      Refresh
                    </Link>
                  )
                )}
              </div>
            </div>

            <div
              data-slot="widget-actions"
              className="flex shrink-0 items-center gap-[var(--spacing-sp-4)]"
            >
              {size !== 'L' && (
                <IconButton
                  ariaLabel="Expand widget"
                  size="S"
                  color="Blue"
                  onClick={() => setZoomOpen(true)}
                >
                  <ZoomIn size={16} />
                </IconButton>
              )}

              {menuItems && menuItems.length > 0 && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <IconButton ariaLabel="Widget menu" size="S" color="Black">
                      <MoreVertical size={16} />
                    </IconButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {menuItems.map((item, index) => (
                      <DropdownMenuItem
                        key={index}
                        onClick={item.onClick}
                        disabled={item.disabled}
                      >
                        {item.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>

          <div
            data-slot="widget-content"
            className="min-h-0 w-full flex-1 overflow-auto"
          >
            {children}
          </div>

          {renderFooter()}
        </div>

        <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
          <DialogContent
            size="fluid"
            titleText={title}
            hideFooter={!hasFooter}
            footerContent={hasFooter ? renderFooter() : undefined}
            className="w-[calc(100vw-48px)] max-w-[1368px] max-h-[calc(100dvh-48px)] md:w-[calc(100vw-96px)] md:max-h-[calc(100dvh-96px)]"
          >
            <div
              data-slot="widget-zoom-body"
              className="min-h-0 flex-1 overflow-auto"
            >
              {children}
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
  }
)

Widget.displayName = 'Widget'

export { Widget, widgetVariants }
