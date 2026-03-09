"use client"

import * as React from "react"
import type { Layout, Layouts } from "react-grid-layout"

import { cn } from "@/lib/utils"
import {
  WIDGET_BOARD_BREAKPOINTS,
  WIDGET_BOARD_COLUMNS,
  WIDGET_BOARD_GUTTER_PX,
} from "@/lib/widget-board-config"
import {
  WIDGET_BOARD_ROW_HEIGHT_PX,
  createDefaultWidgetLayouts,
  getNearestWidgetSizeForSpan,
  isCompactWidgetBoardBreakpoint,
  normalizeWidgetBoardLayouts,
  type WidgetBoardBreakpoint,
  type WidgetBoardLayouts,
  type WidgetBoardSeedItem,
  type WidgetBoardSize,
} from "@/lib/widget-board-config"
import {
  Widget,
  type WidgetLink,
  type WidgetMenuItem,
} from "@/components/ui/widget"

export interface WidgetBoardItem extends WidgetBoardSeedItem {
  title?: string
  timestamp?: string
  sourceLink?: WidgetLink
  viewMoreLink?: WidgetLink
  menuItems?: WidgetMenuItem[]
  onRefresh?: () => void
  onInfoClick?: () => void
  content: React.ReactNode
}

export interface WidgetBoardProps {
  items: WidgetBoardItem[]
  initialLayouts?: WidgetBoardLayouts
  editable?: boolean
  onLayoutsChange?: (layouts: WidgetBoardLayouts) => void
  onItemsChange?: (items: WidgetBoardItem[]) => void
  className?: string
}

function toResponsiveLayouts(layouts: WidgetBoardLayouts): Layouts {
  return Object.fromEntries(
    Object.entries(layouts).map(([breakpoint, items]) => [breakpoint, items as Layout[]])
  )
}

function fromResponsiveLayouts(
  layouts: Layouts,
  items: WidgetBoardItem[],
  currentLayouts?: WidgetBoardLayouts
) {
  const fallback = currentLayouts ?? createDefaultWidgetLayouts(items)
  const nextLayouts = { ...fallback } as WidgetBoardLayouts

  for (const [breakpoint, breakpointLayouts] of Object.entries(layouts)) {
    nextLayouts[breakpoint as WidgetBoardBreakpoint] = breakpointLayouts.map((layout) => ({
      i: layout.i,
      x: layout.x,
      y: layout.y,
      w: layout.w,
      h: layout.h,
      isDraggable: layout.isDraggable,
      isResizable: layout.isResizable,
      static: layout.static,
    }))
  }

  return nextLayouts
}

function normalizeBoardState(
  items: WidgetBoardItem[],
  layouts: WidgetBoardLayouts,
  activeBreakpoint: WidgetBoardBreakpoint
) {
  const seeds: WidgetBoardSeedItem[] = items.map((item) => ({
    id: item.id,
    size: item.size,
    minSize: item.minSize,
    maxSize: item.maxSize,
    locked: item.locked,
  }))

  return normalizeWidgetBoardLayouts(seeds, layouts, activeBreakpoint)
}

export function WidgetBoard({
  items,
  initialLayouts,
  editable = false,
  onLayoutsChange,
  onItemsChange,
  className,
}: WidgetBoardProps) {
  const [ResponsiveGridLayout, setResponsiveGridLayout] =
    React.useState<React.ComponentType<any> | null>(null)
  const [boardItems, setBoardItems] = React.useState(items)
  const [currentBreakpoint, setCurrentBreakpoint] =
    React.useState<WidgetBoardBreakpoint>("xl")
  const [layouts, setLayouts] = React.useState<WidgetBoardLayouts>(() => {
    if (initialLayouts) {
      return initialLayouts
    }

    return createDefaultWidgetLayouts(items)
  })
  const liveLayoutsRef = React.useRef<WidgetBoardLayouts>(layouts)

  React.useEffect(() => {
    setBoardItems(items)
  }, [items])

  React.useEffect(() => {
    if (initialLayouts) {
      setLayouts(initialLayouts)
      return
    }

    setLayouts(createDefaultWidgetLayouts(items))
  }, [initialLayouts, items])

  React.useEffect(() => {
    liveLayoutsRef.current = layouts
  }, [layouts])

  React.useEffect(() => {
    let isActive = true

    void import("react-grid-layout").then((module) => {
      const responsive = module.Responsive ?? module.default?.Responsive
      const widthProvider = module.WidthProvider ?? module.default?.WidthProvider

      if (!isActive || !responsive || !widthProvider) {
        return
      }

      setResponsiveGridLayout(() => widthProvider(responsive))
    })

    return () => {
      isActive = false
    }
  }, [])

  const emitLayouts = React.useCallback(
    (nextLayouts: WidgetBoardLayouts) => {
      liveLayoutsRef.current = nextLayouts
      setLayouts(nextLayouts)
      onLayoutsChange?.(nextLayouts)
    },
    [onLayoutsChange]
  )

  const emitItems = React.useCallback(
    (nextItems: WidgetBoardItem[]) => {
      setBoardItems(nextItems)
      onItemsChange?.(nextItems)
    },
    [onItemsChange]
  )

  const handleDragStop = React.useCallback(
    () => {
      const nextLayouts = liveLayoutsRef.current
      const normalizedLayouts = normalizeBoardState(boardItems, nextLayouts, currentBreakpoint)
      emitLayouts(normalizedLayouts)
    },
    [boardItems, currentBreakpoint, emitLayouts]
  )

  const handleResizeStop = React.useCallback(
    (_currentLayout: Layout[], _oldItem: Layout, newItem: Layout) => {
      const nextSize = getNearestWidgetSizeForSpan(
        currentBreakpoint,
        newItem.w,
        newItem.h
      )

      const nextItems = boardItems.map((item) => {
        if (item.id !== newItem.i) {
          return item
        }

        const minSize = item.minSize ?? "S"
        const maxSize = item.maxSize ?? "L"
        const order: WidgetBoardSize[] = ["S", "M", "L"]
        const clampedSize = order[
          Math.min(
            Math.max(order.indexOf(nextSize), order.indexOf(minSize)),
            order.indexOf(maxSize)
          )
        ]

        return {
          ...item,
          size: clampedSize,
        }
      })

      const nextLayouts = liveLayoutsRef.current
      const normalizedLayouts = normalizeBoardState(nextItems, nextLayouts, currentBreakpoint)

      emitItems(nextItems)
      emitLayouts(normalizedLayouts)
    },
    [boardItems, currentBreakpoint, emitItems, emitLayouts]
  )

  const responsiveLayouts = React.useMemo(
    () => toResponsiveLayouts(layouts),
    [layouts]
  )

  const resizeHandles = React.useMemo(
    () => (editable && !isCompactWidgetBoardBreakpoint(currentBreakpoint) ? ["se"] as const : []),
    [currentBreakpoint, editable]
  )

  if (!ResponsiveGridLayout) {
    return (
      <div className={cn("grid w-full gap-[var(--spacing-sp-24)] px-[var(--spacing-sp-24)] md:grid-cols-2 xl:grid-cols-12", className)}>
        {boardItems.map((item) => (
          <div
            key={item.id}
            className={cn(
              item.size === "L" ? "xl:col-span-9" : item.size === "M" ? "xl:col-span-6" : "xl:col-span-3",
              item.size === "L" ? "md:col-span-2" : "md:col-span-1"
            )}
          >
            <Widget
              size={item.size}
              layoutMode="board"
              title={item.title ?? "Widget"}
              timestamp={item.timestamp ?? "Updated now"}
              sourceLink={item.sourceLink}
              viewMoreLink={item.viewMoreLink}
              menuItems={item.menuItems}
              onRefresh={item.onRefresh}
              onInfoClick={item.onInfoClick}
              className="widget-board-surface min-h-[280px]"
            >
              <div className="h-full min-h-0">{item.content}</div>
            </Widget>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={cn("w-full px-[var(--spacing-sp-24)]", className)}>
      <ResponsiveGridLayout
        className="widget-board-layout"
        breakpoints={WIDGET_BOARD_BREAKPOINTS}
        cols={WIDGET_BOARD_COLUMNS}
        layouts={responsiveLayouts}
        rowHeight={WIDGET_BOARD_ROW_HEIGHT_PX}
        margin={[WIDGET_BOARD_GUTTER_PX, WIDGET_BOARD_GUTTER_PX]}
        containerPadding={[0, 0]}
        compactType="vertical"
        preventCollision={false}
        isDraggable={editable}
        isResizable={editable && !isCompactWidgetBoardBreakpoint(currentBreakpoint)}
        resizeHandles={resizeHandles}
        draggableCancel='button,a,[role="button"],input,textarea,select,.react-resizable-handle,[data-widget-no-drag="true"]'
        onBreakpointChange={(breakpoint) => {
          setCurrentBreakpoint(breakpoint as WidgetBoardBreakpoint)
        }}
        onLayoutChange={(_layout, allLayouts) => {
          liveLayoutsRef.current = fromResponsiveLayouts(allLayouts, boardItems, liveLayoutsRef.current)
        }}
        onDragStop={handleDragStop}
        onResizeStop={handleResizeStop}
      >
        {boardItems.map((item) => (
          <div key={item.id} className="widget-board-item min-h-0">
            <Widget
              size={item.size}
              layoutMode="board"
              title={item.title ?? "Widget"}
              timestamp={item.timestamp ?? "Updated now"}
              sourceLink={item.sourceLink}
              viewMoreLink={item.viewMoreLink}
              menuItems={item.menuItems}
              onRefresh={item.onRefresh}
              onInfoClick={item.onInfoClick}
              className={cn("widget-board-surface", item.locked && "cursor-default")}
            >
              <div className="h-full min-h-0">{item.content}</div>
            </Widget>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}
