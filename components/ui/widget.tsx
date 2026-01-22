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

const widgetVariants = cva(
  [
    'flex flex-col',
    'bg-[var(--color-surface-widget)]',
    'rounded-[var(--radius-s)]',
    'overflow-hidden',
    'box-border',
    'shadow-md',
  ],
  {
    variants: {
      size: {
        S: 'max-w-[456px] h-[290px] p-4 gap-1.5',
        M: 'max-w-[912px] h-[580px] p-6 gap-2',
        L: 'max-w-[1368px] h-[872px] p-6 gap-2',
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

    const hasFooter = sourceLink || viewMoreLink

    // Render footer content (reused in widget and dialog)
    const renderFooter = () => {
      if (!hasFooter) return null
      return (
        <div className="flex justify-between items-center w-full shrink-0">
          {sourceLink ? (
            <Link href={sourceLink.href}>
              {sourceLink.label}
            </Link>
          ) : (
            <div />
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
          style={safeStyle}
          {...rest}
        >
          {/* Widget Header */}
          <div className="flex justify-between items-start w-full shrink-0">
            {/* Left side: title and timestamp */}
            <div className="flex flex-col gap-1">
              {/* Title row */}
              <div className="flex items-center gap-1">
                <h4 className="m-0 text-[var(--color-text-primary)] font-semibold text-lg leading-6">
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
              {/* Timestamp row */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--color-text-secondary)]">
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

            {/* Right side: Header actions */}
            <div className="flex items-center gap-1 shrink-0">
              {/* ZoomIn button - only for S and M sizes */}
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

              {/* Menu button - optional */}
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

          {/* Content Area */}
          <div className="flex-1 w-full overflow-auto min-h-0">
            {children}
          </div>

          {/* Footer */}
          {renderFooter()}
        </div>

        {/* Zoom Dialog - Opens L size widget */}
        <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
          <DialogContent
            size="lg"
            titleText={title}
            hideFooter={!hasFooter}
            footerContent={hasFooter ? renderFooter() : undefined}
          >
            {/* L size content */}
            <div className="flex-1 overflow-auto min-h-[500px]">
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
