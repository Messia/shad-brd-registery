import type { WidgetSize } from "@/components/ui/widget"

export type WidgetBoardBreakpoint = "2xs" | "xs" | "s" | "m" | "l" | "xl" | "2xl"
export type WidgetBoardSize = WidgetSize

export interface WidgetBoardSpan {
  w: number
  h: number
}

export interface WidgetBoardLayoutItem {
  i: string
  x: number
  y: number
  w: number
  h: number
  isDraggable?: boolean
  isResizable?: boolean
  static?: boolean
}

export type WidgetBoardLayouts = Record<WidgetBoardBreakpoint, WidgetBoardLayoutItem[]>

export interface WidgetBoardSeedItem {
  id: string
  size: WidgetBoardSize
  minSize?: WidgetBoardSize
  maxSize?: WidgetBoardSize
  locked?: boolean
}

export const WIDGET_BOARD_BREAKPOINT_ORDER: WidgetBoardBreakpoint[] = [
  "2xs",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "2xl",
]

export const WIDGET_BOARD_BREAKPOINTS: Record<WidgetBoardBreakpoint, number> = {
  "2xs": 320,
  "xs": 500,
  "s": 768,
  "m": 968,
  "l": 1280,
  "xl": 1600,
  "2xl": 1920,
}

export const WIDGET_BOARD_COLUMNS: Record<WidgetBoardBreakpoint, number> = {
  "2xs": 3,
  "xs": 3,
  "s": 6,
  "m": 6,
  "l": 6,
  "xl": 12,
  "2xl": 12,
}

export const WIDGET_BOARD_GUTTER_PX = 24
export const WIDGET_BOARD_MARGIN_PX = 24
export const WIDGET_BOARD_ROW_HEIGHT_PX = 280

export const WIDGET_BOARD_SIZE_SPANS: Record<
  WidgetBoardSize,
  Record<WidgetBoardBreakpoint, WidgetBoardSpan>
> = {
  S: {
    "2xs": { w: 3, h: 1 },
    "xs": { w: 3, h: 2 },
    "s": { w: 3, h: 1 },
    "m": { w: 2, h: 1 },
    "l": { w: 2, h: 1 },
    "xl": { w: 3, h: 1 },
    "2xl": { w: 3, h: 1 },
  },
  M: {
    "2xs": { w: 3, h: 1 },
    "xs": { w: 3, h: 2 },
    "s": { w: 6, h: 2 },
    "m": { w: 4, h: 2 },
    "l": { w: 4, h: 2 },
    "xl": { w: 6, h: 2 },
    "2xl": { w: 6, h: 2 },
  },
  L: {
    "2xs": { w: 3, h: 1 },
    "xs": { w: 3, h: 2 },
    "s": { w: 6, h: 2 },
    "m": { w: 6, h: 2 },
    "l": { w: 6, h: 2 },
    "xl": { w: 9, h: 2 },
    "2xl": { w: 9, h: 2 },
  },
}

const WIDGET_BOARD_SIZE_ORDER: WidgetBoardSize[] = ["S", "M", "L"]

function getWidgetSizeIndex(size: WidgetBoardSize) {
  return WIDGET_BOARD_SIZE_ORDER.indexOf(size)
}

function clampWidgetSize(
  size: WidgetBoardSize,
  minSize?: WidgetBoardSize,
  maxSize?: WidgetBoardSize
) {
  const minIndex = minSize ? getWidgetSizeIndex(minSize) : 0
  const maxIndex = maxSize ? getWidgetSizeIndex(maxSize) : WIDGET_BOARD_SIZE_ORDER.length - 1
  const sizeIndex = getWidgetSizeIndex(size)
  const clampedIndex = Math.min(Math.max(sizeIndex, minIndex), maxIndex)
  return WIDGET_BOARD_SIZE_ORDER[clampedIndex]
}

function rectanglesOverlap(a: WidgetBoardLayoutItem, b: WidgetBoardLayoutItem) {
  return !(
    a.x + a.w <= b.x ||
    b.x + b.w <= a.x ||
    a.y + a.h <= b.y ||
    b.y + b.h <= a.y
  )
}

function sortLayouts(layouts: WidgetBoardLayoutItem[]) {
  return [...layouts].sort((a, b) => {
    if (a.y !== b.y) {
      return a.y - b.y
    }

    return a.x - b.x
  })
}

function findAvailablePosition(
  placedItems: WidgetBoardLayoutItem[],
  columns: number,
  span: WidgetBoardSpan,
  preferredX = 0,
  preferredY = 0
) {
  const clampedX = Math.max(0, Math.min(preferredX, columns - span.w))
  const maxSearchRows = 200

  for (let y = Math.max(0, preferredY); y < maxSearchRows; y += 1) {
    const xCandidates =
      y === preferredY && clampedX > 0
        ? [
            ...Array.from({ length: columns - span.w - clampedX + 1 }, (_, index) => clampedX + index),
            ...Array.from({ length: clampedX }, (_, index) => index),
          ]
        : Array.from({ length: columns - span.w + 1 }, (_, index) => index)

    for (const x of xCandidates) {
      const candidate: WidgetBoardLayoutItem = {
        i: "",
        x,
        y,
        w: span.w,
        h: span.h,
      }

      if (!placedItems.some((item) => rectanglesOverlap(candidate, item))) {
        return { x, y }
      }
    }
  }

  return { x: 0, y: placedItems.length === 0 ? 0 : Math.max(...placedItems.map((item) => item.y + item.h)) }
}

export function getWidgetSpan(size: WidgetBoardSize, breakpoint: WidgetBoardBreakpoint) {
  return WIDGET_BOARD_SIZE_SPANS[size][breakpoint]
}

export function getNearestWidgetSizeForSpan(
  breakpoint: WidgetBoardBreakpoint,
  width: number,
  height: number
) {
  let bestSize: WidgetBoardSize = "S"
  let bestScore = Number.POSITIVE_INFINITY

  for (const size of WIDGET_BOARD_SIZE_ORDER) {
    const span = getWidgetSpan(size, breakpoint)
    const score = Math.abs(span.w - width) * 2 + Math.abs(span.h - height) * 3

    if (score < bestScore) {
      bestScore = score
      bestSize = size
    }
  }

  return bestSize
}

function buildOrderedIds(
  items: WidgetBoardSeedItem[],
  layouts?: WidgetBoardLayoutItem[]
) {
  if (!layouts || layouts.length === 0) {
    return items.map((item) => item.id)
  }

  const orderedFromLayout = sortLayouts(layouts).map((layout) => layout.i)
  const trailingIds = items
    .map((item) => item.id)
    .filter((id) => !orderedFromLayout.includes(id))

  return [...orderedFromLayout, ...trailingIds]
}

export function normalizeWidgetBoardLayouts(
  items: WidgetBoardSeedItem[],
  sourceLayouts?: Partial<WidgetBoardLayouts>,
  activeBreakpoint?: WidgetBoardBreakpoint
): WidgetBoardLayouts {
  const activeLayouts = activeBreakpoint ? sourceLayouts?.[activeBreakpoint] : undefined
  const orderedIds = buildOrderedIds(items, activeLayouts)
  const itemsById = new Map(items.map((item) => [item.id, item]))

  const normalized = {} as WidgetBoardLayouts

  for (const breakpoint of WIDGET_BOARD_BREAKPOINT_ORDER) {
    const columns = WIDGET_BOARD_COLUMNS[breakpoint]
    const preferredLayouts = sortLayouts(sourceLayouts?.[breakpoint] ?? [])
    const preferredById = new Map(preferredLayouts.map((layout) => [layout.i, layout]))
    const placedItems: WidgetBoardLayoutItem[] = []

    for (const id of orderedIds) {
      const item = itemsById.get(id)
      if (!item) {
        continue
      }

      const safeSize = clampWidgetSize(item.size, item.minSize, item.maxSize)
      const span = getWidgetSpan(safeSize, breakpoint)
      const preferred = preferredById.get(id)
      const preferredX = preferred ? Math.min(preferred.x, columns - span.w) : 0
      const preferredY = preferred?.y ?? 0
      const { x, y } = findAvailablePosition(placedItems, columns, span, preferredX, preferredY)

      placedItems.push({
        i: item.id,
        x,
        y,
        w: span.w,
        h: span.h,
        isDraggable: item.locked ? false : undefined,
        isResizable: item.locked ? false : undefined,
        static: item.locked ? true : undefined,
      })
    }

    normalized[breakpoint] = sortLayouts(placedItems)
  }

  return normalized
}

export function createDefaultWidgetLayouts(items: WidgetBoardSeedItem[]) {
  return normalizeWidgetBoardLayouts(items)
}

export function isCompactWidgetBoardBreakpoint(breakpoint: WidgetBoardBreakpoint) {
  return breakpoint === "2xs" || breakpoint === "xs"
}
