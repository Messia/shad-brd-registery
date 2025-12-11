'use client'

import * as React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// Size variants matching old ButtonGroup: S, M, L
export type ToggleGroupSize = 'sm' | 'default' | 'lg'

const toggleGroupVariants = cva(
  [
    'inline-flex items-center box-border',
    'rounded-[var(--radius-s)] p-1',
    'bg-[var(--color-surface-button-group-background)]',
  ],
  {
    variants: {
      size: {
        sm: 'gap-1',      // 4px gap for S
        default: 'gap-2', // 8px gap for M
        lg: 'gap-2',      // 8px gap for L
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
)

const toggleGroupItemVariants = cva(
  [
    'inline-flex items-center justify-center cursor-pointer whitespace-nowrap',
    'rounded-[var(--radius-xs)] border border-transparent',
    'text-[var(--color-text-primary)] bg-transparent',
    'font-[var(--font-family-brand)]',
    'transition-[background-color,color,border-color] duration-150 ease-in-out',
    // Hover state (when not active)
    'hover:not-[data-state=on]:not-disabled:bg-[var(--color-surface-button-group-hover)]',
    // Active/selected state
    'data-[state=on]:bg-[var(--color-surface-button-group-active)]',
    'data-[state=on]:text-[var(--color-text-link-default)]',
    // Focus state
    'focus-visible:outline-none focus-visible:border-[var(--color-stroke-brand)]',
    'focus-visible:ring-2 focus-visible:ring-[var(--color-surface-focused)]',
    // Disabled state
    'disabled:text-[var(--color-text-disabled)] disabled:bg-transparent',
    'disabled:border-transparent disabled:cursor-not-allowed',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      size: {
        sm: [
          'h-7 px-1.5',
          'text-xs font-semibold leading-4',
          '[&_svg]:size-3.5',
        ],
        default: [
          'h-8 px-1',
          'text-sm font-semibold leading-5',
          '[&_svg]:size-4',
        ],
        lg: [
          'h-12 px-2',
          'text-base font-semibold leading-6',
          '[&_svg]:size-5',
        ],
      },
      iconOnly: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      { size: 'sm', iconOnly: true, class: 'w-7 px-0' },
      { size: 'default', iconOnly: true, class: 'w-8 px-0' },
      { size: 'lg', iconOnly: true, class: 'w-12 px-0' },
    ],
    defaultVariants: {
      size: 'lg',
      iconOnly: false,
    },
  }
)

interface ToggleGroupContextValue {
  size: ToggleGroupSize
}

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  size: 'lg',
})

export interface ToggleGroupProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>,
    VariantProps<typeof toggleGroupVariants> {}

function ToggleGroup({
  className,
  size = 'lg',
  children,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-size={size}
      className={cn(toggleGroupVariants({ size }), className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ size: size || 'lg' }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> {
  /** Icon to display */
  icon?: React.ReactNode
  /** Whether the item only contains an icon (no text) */
  iconOnly?: boolean
}

function ToggleGroupItem({
  className,
  children,
  icon,
  iconOnly = false,
  ...props
}: ToggleGroupItemProps) {
  const { size } = React.useContext(ToggleGroupContext)
  const effectiveIconOnly = iconOnly || (!!icon && !children)

  let content: React.ReactNode = children
  if (effectiveIconOnly && icon) {
    content = <span className="inline-flex items-center justify-center">{icon}</span>
  } else if (icon && children) {
    content = (
      <>
        <span className="inline-flex items-center justify-center">{icon}</span>
        <span className={cn(size === 'sm' ? 'ml-0.5' : 'ml-1')}>{children}</span>
      </>
    )
  } else if (icon) {
    content = <span className="inline-flex items-center justify-center">{icon}</span>
  }

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cn(
        toggleGroupItemVariants({ size, iconOnly: effectiveIconOnly }),
        className,
      )}
      {...props}
    >
      {content}
    </ToggleGroupPrimitive.Item>
  )
}

export {
  ToggleGroup,
  ToggleGroupItem,
  toggleGroupVariants,
  toggleGroupItemVariants,
}
