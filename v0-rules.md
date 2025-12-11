# BRD Design System - v0 Rules

## Important: Component Naming

All BRD components use the `brdcomp-` prefix to distinguish from standard shadcn/ui components.
When generating code, import from the registry using these prefixed names.

## Component Reference

### Badge (`brdcomp-badge`)

**Props:**
- `variant`: `"filled"` | `"outline"` (default: `"filled"`)
- `color`: `"default"` | `"sky"` | `"grass"` | `"bored"` | `"negative"` | `"neutral"` | `"dark"` (default: `"default"`)
- `size`: `"sm"` | `"default"` | `"lg"` (default: `"default"`)

**Usage:**
```tsx
<Badge variant="filled" color="sky">Info</Badge>
<Badge variant="outline" color="grass">Success</Badge>
<Badge color="negative">Error</Badge>
<Badge color="bored">Warning</Badge>
```

**Semantic meanings:**
- `sky` - Informational, neutral highlight
- `grass` - Success, positive, approved
- `bored` - Warning, pending, attention needed
- `negative` - Error, critical, rejected
- `neutral` - Default, inactive
- `dark` - High emphasis, dark mode

---

### Button (`brdcomp-button`)

**Props:**
- `variant`: `"default"` | `"destructive"` | `"outline"` | `"secondary"` (default: `"default"`)
- `size`: `"sm"` | `"default"` | `"lg"` | `"icon"` | `"icon-sm"` | `"icon-lg"` (default: `"default"`)
- `isLoading`: `boolean` - Shows loading dots
- `icon`: `ReactNode` - Icon to display

**Usage:**
```tsx
<Button>Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outlined</Button>
<Button variant="destructive">Delete</Button>
<Button isLoading>Saving...</Button>
<Button icon={<PlusIcon />}>Add Item</Button>
```

---

### IconButton (`brdcomp-icon-button`)

**Props:**
- `ariaLabel`: `string` (required) - Accessible label, shown in tooltip
- `size`: `"M"` | `"S"` | `"XS"` (default: `"M"`)
- `color`: `"Blue"` | `"Black"` (default: `"Blue"`)
- `isActive`: `boolean` - Active/selected state

**Usage:**
```tsx
<IconButton ariaLabel="Edit">
  <PencilIcon />
</IconButton>
<IconButton ariaLabel="Delete" color="Black" size="S">
  <TrashIcon />
</IconButton>
```

---

### Link (`brdcomp-link`)

**Props:**
- `size`: `"sm"` | `"default"` | `"lg"` (default: `"default"`)
- `icon`: `ReactNode` - Optional icon
- `trailingIcon`: `boolean` - Put icon after text
- `disabled`: `boolean`

**Usage:**
```tsx
<Link href="/about">Learn more</Link>
<Link href="/docs" icon={<ExternalLinkIcon />} trailingIcon>Documentation</Link>
```

---

### Alert (`brdcomp-alert`)

**Props:**
- `variant`: `"info"` | `"success"` | `"warning"` | `"critical"` (default: `"info"`)
- `dismissible`: `boolean` - Shows close button
- `onDismiss`: `() => void`
- `showIcon`: `boolean` (default: `true`)

**Usage:**
```tsx
<Alert variant="info">
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>This is an info message.</AlertDescription>
</Alert>
<Alert variant="success" dismissible>
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>
<Alert variant="critical">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

---

### Dialog (`brdcomp-dialog`)

**Props (DialogContent):**
- `size`: `"xs"` | `"sm"` | `"md"` | `"lg"` (default: `"xs"`)

**Usage:**
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent size="sm">
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <DialogBody>Content here</DialogBody>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

### Input (`brdcomp-input`)

**Components:**
- `Input` - Simple input element
- `InputField` - Full field with label, icons, feedback

**InputField Props:**
- `variant`: `"primary"` | `"secondary"`
- `label`: `string`
- `feedback`: `{ message: string, type: "error" | "success" | "info" | "warning" }`
- `isInvalid`: `boolean`
- `leftIcon` / `icon`: Icon components
- `labelPosition`: `"top"` | `"left"`

**Usage:**
```tsx
<Input placeholder="Simple input" />
<InputField 
  label="Email" 
  placeholder="Enter email"
  feedback={{ message: "Valid email", type: "success" }}
/>
<InputField 
  label="Password" 
  isInvalid 
  errorMessage="Password is required"
/>
```

---

## Color Tokens

The design system uses CSS variables for colors. Key patterns:

- **Surface colors**: `--color-surface-*` (backgrounds)
- **Text colors**: `--color-text-*` (foreground)
- **Stroke colors**: `--color-stroke-*` (borders)

## Do NOT Use

❌ Standard shadcn variant names that don't exist:
- `variant="ghost"` (use `secondary` instead)
- `variant="link"` on Button (use `Link` component instead)
- Badge `variant="destructive"` (use `color="negative"` instead)
- Badge `variant="secondary"` (use `color="neutral"` or different color)

## Always Use

✅ BRD-specific patterns:
- Badge: Use `color` prop for semantic colors
- Button: Use `isLoading` for loading states
- IconButton: Always provide `ariaLabel`
- Alert: Use `variant` for semantic types (info/success/warning/critical)

