export type RegistryExample = {
  title: string
  code: string
}

export type RegistryDocs = {
  title: string
  description: string
  categories: string[]
  meta: {
    tags: string[]
    examples: RegistryExample[]
  }
}

export const registryMetadata: Record<string, RegistryDocs> = {
  accordion: {
    title: "Accordion",
    description:
      "A vertically stacked disclosure pattern that expands and collapses content panels. Use it to organize dense content while preserving keyboard navigation and ARIA semantics.",
    categories: ["disclosure", "layout"],
    meta: {
      tags: ["accordion", "collapse", "disclosure", "content"],
      examples: [
        {
          title: "Single item accordion",
          code:
            'import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"\n\n<Accordion type="single" collapsible>\n  <AccordionItem value="details">\n    <AccordionTrigger>Details</AccordionTrigger>\n    <AccordionContent>Expandable content goes here.</AccordionContent>\n  </AccordionItem>\n</Accordion>',
        },
      ],
    },
  },
  alert: {
    title: "Alert",
    description:
      "A status callout for important messages such as success, warning, or error states. Supports optional icons, dismissal, and inline actions.",
    categories: ["feedback", "status"],
    meta: {
      tags: ["alert", "status", "callout", "feedback"],
      examples: [
        {
          title: "Status variants",
          code:
            'import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"\n\n<Alert variant="warning">\n  <AlertTitle>Warning</AlertTitle>\n  <AlertDescription>Review changes before saving.</AlertDescription>\n</Alert>',
        },
      ],
    },
  },
  "alert-dialog": {
    title: "Alert Dialog",
    description:
      "A modal confirmation dialog that requires an explicit user decision before continuing. Ideal for destructive or high-impact actions.",
    categories: ["overlay", "confirmation"],
    meta: {
      tags: ["dialog", "alert-dialog", "modal", "confirmation"],
      examples: [
        {
          title: "Confirm action",
          code:
            'import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"\n\n<AlertDialog>\n  <AlertDialogTrigger>Delete</AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>Delete item?</AlertDialogTitle>\n      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Cancel</AlertDialogCancel>\n      <AlertDialogAction>Confirm</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>',
        },
      ],
    },
  },
  "aspect-ratio": {
    title: "Aspect Ratio",
    description:
      "A utility wrapper that preserves a consistent aspect ratio for media like images or videos across responsive layouts.",
    categories: ["layout", "media"],
    meta: {
      tags: ["aspect-ratio", "media", "responsive", "layout"],
      examples: [
        {
          title: "Responsive media",
          code:
            'import { AspectRatio } from "@/components/ui/aspect-ratio"\n\n<AspectRatio ratio={16 / 9}>\n  <img src="/placeholder.jpg" alt="Preview" />\n</AspectRatio>',
        },
      ],
    },
  },
  avatar: {
    title: "Avatar",
    description:
      "A compact identity component that displays a user image with a fallback when the image is missing or fails to load.",
    categories: ["identity", "data-display"],
    meta: {
      tags: ["avatar", "profile", "image", "fallback"],
      examples: [
        {
          title: "Image with fallback",
          code:
            'import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"\n\n<Avatar>\n  <AvatarImage src="/user.jpg" alt="User" />\n  <AvatarFallback>JD</AvatarFallback>\n</Avatar>',
        },
      ],
    },
  },
  badge: {
    title: "Badge",
    description:
      "A small label used to highlight status, categories, or counts. Supports semantic colors and filled or outline variants.",
    categories: ["data-display", "status"],
    meta: {
      tags: ["badge", "label", "status", "tag"],
      examples: [
        {
          title: "Semantic badge",
          code:
            'import { Badge } from "@/components/ui/badge"\n\n<Badge color="grass">Active</Badge>',
        },
      ],
    },
  },
  breadcrumb: {
    title: "Breadcrumb",
    description:
      "A hierarchical navigation trail that shows the user's location in a site or app, with clickable ancestor links.",
    categories: ["navigation"],
    meta: {
      tags: ["breadcrumb", "navigation", "hierarchy", "links"],
      examples: [
        {
          title: "Navigation trail",
          code:
            'import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"\n\n<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/">Home</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>',
        },
      ],
    },
  },
  button: {
    title: "Button",
    description:
      "An interactive control for actions and form submissions. Includes size variants, visual styles, loading states, and optional icons.",
    categories: ["forms", "actions"],
    meta: {
      tags: ["button", "action", "cta", "form"],
      examples: [
        {
          title: "Primary action",
          code:
            'import { Button } from "@/components/ui/button"\n\n<Button>Save changes</Button>',
        },
      ],
    },
  },
  calendar: {
    title: "Calendar",
    description:
      "A date selection calendar for single or range selections, with accessible keyboard navigation and month controls.",
    categories: ["forms", "date-time"],
    meta: {
      tags: ["calendar", "date-picker", "schedule", "input"],
      examples: [
        {
          title: "Single date",
          code:
            'import { Calendar } from "@/components/ui/calendar"\n\n<Calendar mode="single" selected={new Date()} />',
        },
      ],
    },
  },
  card: {
    title: "Card",
    description:
      "A flexible content container with optional header, body, and footer sections for grouping related information.",
    categories: ["layout", "data-display"],
    meta: {
      tags: ["card", "container", "layout", "surface"],
      examples: [
        {
          title: "Card layout",
          code:
            'import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"\n\n<Card>\n  <CardHeader>\n    <CardTitle>Card title</CardTitle>\n  </CardHeader>\n  <CardContent>Card content</CardContent>\n  <CardFooter>Card footer</CardFooter>\n</Card>',
        },
      ],
    },
  },
  carousel: {
    title: "Carousel",
    description:
      "A horizontally scrollable carousel for media or cards, with optional next/previous controls and snap alignment.",
    categories: ["media", "layout"],
    meta: {
      tags: ["carousel", "slider", "media", "scroll"],
      examples: [
        {
          title: "Image carousel",
          code:
            'import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"\n\n<Carousel>\n  <CarouselContent>\n    <CarouselItem>Slide 1</CarouselItem>\n    <CarouselItem>Slide 2</CarouselItem>\n  </CarouselContent>\n  <CarouselPrevious />\n  <CarouselNext />\n</Carousel>',
        },
      ],
    },
  },
  chart: {
    title: "Chart",
    description:
      "Data visualization primitives powered by Recharts, designed for consistent typography, spacing, and theming.",
    categories: ["data-visualization"],
    meta: {
      tags: ["chart", "data", "visualization", "graph"],
      examples: [
        {
          title: "Chart container",
          code:
            'import { ChartContainer } from "@/components/ui/chart"\n\n<ChartContainer config={{}}>\n  {/* Render Recharts components here */}\n</ChartContainer>',
        },
      ],
    },
  },
  checkbox: {
    title: "Checkbox",
    description:
      "A selectable checkbox for binary choices, supporting labels, supporting text, and an indeterminate state.",
    categories: ["forms"],
    meta: {
      tags: ["checkbox", "input", "form", "selection"],
      examples: [
        {
          title: "Checkbox with label",
          code:
            'import { Checkbox } from "@/components/ui/checkbox"\n\n<Checkbox label="Accept terms" />',
        },
      ],
    },
  },
  collapsible: {
    title: "Collapsible",
    description:
      "A simple show/hide disclosure pattern that toggles content visibility with a trigger control.",
    categories: ["disclosure"],
    meta: {
      tags: ["collapsible", "disclosure", "toggle", "content"],
      examples: [
        {
          title: "Collapsible content",
          code:
            'import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"\n\n<Collapsible>\n  <CollapsibleTrigger>Show details</CollapsibleTrigger>\n  <CollapsibleContent>Hidden content.</CollapsibleContent>\n</Collapsible>',
        },
      ],
    },
  },
  command: {
    title: "Command",
    description:
      "A command palette component for quick search and navigation, optimized for keyboard interaction.",
    categories: ["navigation", "input"],
    meta: {
      tags: ["command", "palette", "search", "navigation"],
      examples: [
        {
          title: "Command palette",
          code:
            'import { Command, CommandInput, CommandList, CommandItem } from "@/components/ui/command"\n\n<Command>\n  <CommandInput placeholder="Search..." />\n  <CommandList>\n    <CommandItem>Profile</CommandItem>\n    <CommandItem>Settings</CommandItem>\n  </CommandList>\n</Command>',
        },
      ],
    },
  },
  "context-menu": {
    title: "Context Menu",
    description:
      "A right-click or long-press menu with support for submenus, separators, and disabled items.",
    categories: ["navigation", "overlay"],
    meta: {
      tags: ["context-menu", "menu", "overlay", "actions"],
      examples: [
        {
          title: "Right-click menu",
          code:
            'import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu"\n\n<ContextMenu>\n  <ContextMenuTrigger>Right click me</ContextMenuTrigger>\n  <ContextMenuContent>\n    <ContextMenuItem>Edit</ContextMenuItem>\n    <ContextMenuItem>Delete</ContextMenuItem>\n  </ContextMenuContent>\n</ContextMenu>',
        },
      ],
    },
  },
  dialog: {
    title: "Dialog",
    description:
      "A modal dialog for focused tasks, with structured header, body, and footer regions and size variants.",
    categories: ["overlay"],
    meta: {
      tags: ["dialog", "modal", "overlay", "focus"],
      examples: [
        {
          title: "Modal dialog",
          code:
            'import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"\n\n<Dialog>\n  <DialogTrigger>Open</DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Dialog title</DialogTitle>\n      <DialogDescription>Dialog description</DialogDescription>\n    </DialogHeader>\n  </DialogContent>\n</Dialog>',
        },
      ],
    },
  },
  drawer: {
    title: "Drawer",
    description:
      "A slide-up drawer for supplemental content or actions, optimized for mobile and small screens.",
    categories: ["overlay"],
    meta: {
      tags: ["drawer", "sheet", "overlay", "mobile"],
      examples: [
        {
          title: "Bottom drawer",
          code:
            'import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer"\n\n<Drawer>\n  <DrawerTrigger>Open drawer</DrawerTrigger>\n  <DrawerContent>Drawer content</DrawerContent>\n</Drawer>',
        },
      ],
    },
  },
  "dropdown-menu": {
    title: "Dropdown Menu",
    description:
      "A menu anchored to a trigger element, with support for items, groups, and separators.",
    categories: ["navigation", "overlay"],
    meta: {
      tags: ["dropdown", "menu", "actions", "overlay"],
      examples: [
        {
          title: "Menu actions",
          code:
            'import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"\n\n<DropdownMenu>\n  <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuItem>Edit</DropdownMenuItem>\n    <DropdownMenuItem>Delete</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>',
        },
      ],
    },
  },
  "hover-card": {
    title: "Hover Card",
    description:
      "A lightweight preview panel that appears on hover or focus, useful for quick summaries.",
    categories: ["overlay", "data-display"],
    meta: {
      tags: ["hover-card", "preview", "overlay", "tooltip"],
      examples: [
        {
          title: "Hover preview",
          code:
            'import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"\n\n<HoverCard>\n  <HoverCardTrigger>Hover me</HoverCardTrigger>\n  <HoverCardContent>Preview content</HoverCardContent>\n</HoverCard>',
        },
      ],
    },
  },
  "icon-button": {
    title: "Icon Button",
    description:
      "An icon-only button with built-in accessibility labeling, size variants, and active states.",
    categories: ["actions", "icons"],
    meta: {
      tags: ["icon-button", "button", "action", "a11y"],
      examples: [
        {
          title: "Icon action",
          code:
            'import { IconButton } from "@/components/ui/icon-button"\n\n<IconButton ariaLabel="Edit">\n  <span>Edit</span>\n</IconButton>',
        },
      ],
    },
  },
  input: {
    title: "Input",
    description:
      "A text input and field wrapper with labels, icons, helper text, and validation feedback.",
    categories: ["forms"],
    meta: {
      tags: ["input", "text-field", "form", "validation"],
      examples: [
        {
          title: "Text input",
          code:
            'import { Input } from "@/components/ui/input"\n\n<Input placeholder="Enter your name" />',
        },
      ],
    },
  },
  "input-otp": {
    title: "Input OTP",
    description:
      "A segmented input for one-time passcodes with auto-advance and keyboard support.",
    categories: ["forms", "security"],
    meta: {
      tags: ["otp", "input", "verification", "security"],
      examples: [
        {
          title: "One-time code",
          code:
            'import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"\n\n<InputOTP maxLength={6}>\n  <InputOTPGroup>\n    <InputOTPSlot index={0} />\n    <InputOTPSlot index={1} />\n    <InputOTPSlot index={2} />\n    <InputOTPSlot index={3} />\n    <InputOTPSlot index={4} />\n    <InputOTPSlot index={5} />\n  </InputOTPGroup>\n</InputOTP>',
        },
      ],
    },
  },
  label: {
    title: "Label",
    description:
      "A form label component that pairs with inputs and supports accessible descriptions.",
    categories: ["forms"],
    meta: {
      tags: ["label", "form", "a11y", "input"],
      examples: [
        {
          title: "Labelled input",
          code:
            'import { Label } from "@/components/ui/label"\n\n<Label htmlFor="email">Email</Label>',
        },
      ],
    },
  },
  link: {
    title: "Link",
    description:
      "A styled anchor/link component with sizing and icon support, consistent with BRD typography.",
    categories: ["navigation"],
    meta: {
      tags: ["link", "anchor", "navigation", "text"],
      examples: [
        {
          title: "Inline link",
          code:
            'import { Link } from "@/components/ui/link"\n\n<Link href="/docs">Documentation</Link>',
        },
      ],
    },
  },
  menubar: {
    title: "Menubar",
    description:
      "A horizontal application menu bar with nested menus, shortcuts, and separators.",
    categories: ["navigation"],
    meta: {
      tags: ["menubar", "menu", "navigation", "app"],
      examples: [
        {
          title: "App menu",
          code:
            'import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"\n\n<Menubar>\n  <MenubarMenu>\n    <MenubarTrigger>File</MenubarTrigger>\n    <MenubarContent>\n      <MenubarItem>New</MenubarItem>\n      <MenubarItem>Open</MenubarItem>\n    </MenubarContent>\n  </MenubarMenu>\n</Menubar>',
        },
      ],
    },
  },
  "navigation-menu": {
    title: "Navigation Menu",
    description:
      "A top-level navigation component with triggers and panels for grouped links.",
    categories: ["navigation"],
    meta: {
      tags: ["navigation-menu", "menu", "links", "layout"],
      examples: [
        {
          title: "Navigation bar",
          code:
            'import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"\n\n<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuTrigger>Products</NavigationMenuTrigger>\n      <NavigationMenuContent>Links go here</NavigationMenuContent>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>',
        },
      ],
    },
  },
  pagination: {
    title: "Pagination",
    description:
      "Pagination controls to navigate between pages of content, including previous/next and page items.",
    categories: ["navigation"],
    meta: {
      tags: ["pagination", "navigation", "pages", "list"],
      examples: [
        {
          title: "Page navigation",
          code:
            'import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination"\n\n<Pagination>\n  <PaginationContent>\n    <PaginationItem>\n      <PaginationLink href="#">1</PaginationLink>\n    </PaginationItem>\n  </PaginationContent>\n</Pagination>',
        },
      ],
    },
  },
  popover: {
    title: "Popover",
    description:
      "A floating panel anchored to a trigger, useful for lightweight forms or contextual info.",
    categories: ["overlay"],
    meta: {
      tags: ["popover", "overlay", "floating", "context"],
      examples: [
        {
          title: "Popover content",
          code:
            'import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"\n\n<Popover>\n  <PopoverTrigger>Open</PopoverTrigger>\n  <PopoverContent>Popover content</PopoverContent>\n</Popover>',
        },
      ],
    },
  },
  progress: {
    title: "Progress",
    description:
      "A linear progress indicator for tasks or loading states, showing completion percentage.",
    categories: ["feedback"],
    meta: {
      tags: ["progress", "loading", "status", "bar"],
      examples: [
        {
          title: "Progress value",
          code:
            'import { Progress } from "@/components/ui/progress"\n\n<Progress value={65} />',
        },
      ],
    },
  },
  "radio-group": {
    title: "Radio Group",
    description:
      "An exclusive selection group for choosing one option from a list, with labels and helper text.",
    categories: ["forms"],
    meta: {
      tags: ["radio", "selection", "form", "input"],
      examples: [
        {
          title: "Radio options",
          code:
            'import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"\n\n<RadioGroup defaultValue="a">\n  <RadioGroupItem value="a" label="Option A" />\n  <RadioGroupItem value="b" label="Option B" />\n</RadioGroup>',
        },
      ],
    },
  },
  resizable: {
    title: "Resizable",
    description:
      "A resizable panel group with draggable handles for split views and adjustable layouts.",
    categories: ["layout"],
    meta: {
      tags: ["resizable", "split", "layout", "panels"],
      examples: [
        {
          title: "Split panels",
          code:
            'import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"\n\n<ResizablePanelGroup direction="horizontal">\n  <ResizablePanel>Left</ResizablePanel>\n  <ResizableHandle />\n  <ResizablePanel>Right</ResizablePanel>\n</ResizablePanelGroup>',
        },
      ],
    },
  },
  "scroll-area": {
    title: "Scroll Area",
    description:
      "A scrollable container with styled scrollbars for content that overflows its bounds.",
    categories: ["layout"],
    meta: {
      tags: ["scroll-area", "overflow", "scrollbar", "container"],
      examples: [
        {
          title: "Scrollable content",
          code:
            'import { ScrollArea } from "@/components/ui/scroll-area"\n\n<ScrollArea className="h-32 w-64">Long content...</ScrollArea>',
        },
      ],
    },
  },
  select: {
    title: "Select",
    description:
      "A custom select dropdown for choosing a single option, with groups and labels.",
    categories: ["forms"],
    meta: {
      tags: ["select", "dropdown", "form", "input"],
      examples: [
        {
          title: "Select options",
          code:
            'import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"\n\n<Select>\n  <SelectTrigger>\n    <SelectValue placeholder="Pick one" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="a">Option A</SelectItem>\n    <SelectItem value="b">Option B</SelectItem>\n  </SelectContent>\n</Select>',
        },
      ],
    },
  },
  separator: {
    title: "Separator",
    description:
      "A horizontal or vertical divider used to separate content and improve visual structure.",
    categories: ["layout"],
    meta: {
      tags: ["separator", "divider", "layout", "spacing"],
      examples: [
        {
          title: "Section divider",
          code:
            'import { Separator } from "@/components/ui/separator"\n\n<Separator />',
        },
      ],
    },
  },
  sheet: {
    title: "Sheet",
    description:
      "A side panel overlay that slides in from an edge, suitable for forms or contextual settings.",
    categories: ["overlay"],
    meta: {
      tags: ["sheet", "drawer", "overlay", "panel"],
      examples: [
        {
          title: "Side sheet",
          code:
            'import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"\n\n<Sheet>\n  <SheetTrigger>Open</SheetTrigger>\n  <SheetContent side="right">Sheet content</SheetContent>\n</Sheet>',
        },
      ],
    },
  },
  skeleton: {
    title: "Skeleton",
    description:
      "A placeholder shimmer used while content is loading, providing visual continuity.",
    categories: ["feedback"],
    meta: {
      tags: ["skeleton", "loading", "placeholder", "progress"],
      examples: [
        {
          title: "Loading placeholder",
          code:
            'import { Skeleton } from "@/components/ui/skeleton"\n\n<Skeleton className="h-4 w-40" />',
        },
      ],
    },
  },
  slider: {
    title: "Slider",
    description:
      "A range slider input for selecting a value within a continuous interval.",
    categories: ["forms"],
    meta: {
      tags: ["slider", "range", "input", "form"],
      examples: [
        {
          title: "Slider value",
          code:
            'import { Slider } from "@/components/ui/slider"\n\n<Slider defaultValue={[50]} max={100} />',
        },
      ],
    },
  },
  sonner: {
    title: "Sonner Toaster",
    description:
      "A toast renderer that mounts the Sonner toaster with theme-aware styling.",
    categories: ["feedback"],
    meta: {
      tags: ["toast", "sonner", "notifications", "feedback"],
      examples: [
        {
          title: "Toaster mount",
          code:
            'import { Toaster } from "@/components/ui/sonner"\n\n<Toaster />',
        },
      ],
    },
  },
  switch: {
    title: "Switch",
    description:
      "A toggle switch for binary settings, with optional label and size variants.",
    categories: ["forms"],
    meta: {
      tags: ["switch", "toggle", "input", "form"],
      examples: [
        {
          title: "Toggle setting",
          code:
            'import { Switch } from "@/components/ui/switch"\n\n<Switch label="Enable notifications" />',
        },
      ],
    },
  },
  table: {
    title: "Table",
    description:
      "A structured data table with header, body, rows, and cells for tabular content.",
    categories: ["data-display"],
    meta: {
      tags: ["table", "data", "rows", "columns"],
      examples: [
        {
          title: "Simple table",
          code:
            'import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"\n\n<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Name</TableHead>\n      <TableHead>Status</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>Project A</TableCell>\n      <TableCell>Active</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        },
      ],
    },
  },
  tabs: {
    title: "Tabs",
    description:
      "Tabbed navigation for switching between related sections without changing pages.",
    categories: ["navigation"],
    meta: {
      tags: ["tabs", "navigation", "content", "layout"],
      examples: [
        {
          title: "Tabbed content",
          code:
            'import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"\n\n<Tabs defaultValue="a">\n  <TabsList>\n    <TabsTrigger value="a">A</TabsTrigger>\n    <TabsTrigger value="b">B</TabsTrigger>\n  </TabsList>\n  <TabsContent value="a">Content A</TabsContent>\n  <TabsContent value="b">Content B</TabsContent>\n</Tabs>',
        },
      ],
    },
  },
  textarea: {
    title: "Textarea",
    description:
      "A multi-line text input with optional label and validation feedback via field wrapper.",
    categories: ["forms"],
    meta: {
      tags: ["textarea", "input", "form", "multiline"],
      examples: [
        {
          title: "Multiline input",
          code:
            'import { Textarea } from "@/components/ui/textarea"\n\n<Textarea rows={4} placeholder="Enter details..." />',
        },
      ],
    },
  },
  theme: {
    title: "Theme",
    description:
      "Global BRD theme tokens and CSS variables for colors, typography, spacing, and radius.",
    categories: ["theming"],
    meta: {
      tags: ["theme", "tokens", "css-vars", "design-system"],
      examples: [
        {
          title: "Theme file",
          code: '/* app/globals.css contains BRD tokens and theme variables */',
        },
      ],
    },
  },
  toast: {
    title: "Toast",
    description:
      "Toast primitives for transient notifications, including provider, viewport, and actions.",
    categories: ["feedback"],
    meta: {
      tags: ["toast", "notification", "feedback", "overlay"],
      examples: [
        {
          title: "Toast layout",
          code:
            'import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast"\n\n<ToastProvider>\n  <Toast>\n    <ToastTitle>Saved</ToastTitle>\n    <ToastDescription>Your changes were saved.</ToastDescription>\n  </Toast>\n  <ToastViewport />\n</ToastProvider>',
        },
      ],
    },
  },
  toggle: {
    title: "Toggle",
    description:
      "A standalone toggle button for on/off states with optional pressed styling.",
    categories: ["forms", "actions"],
    meta: {
      tags: ["toggle", "button", "input", "state"],
      examples: [
        {
          title: "Toggle pressed",
          code:
            'import { Toggle } from "@/components/ui/toggle"\n\n<Toggle pressed>Bold</Toggle>',
        },
      ],
    },
  },
  "toggle-group": {
    title: "Toggle Group",
    description:
      "A group of toggle buttons that supports single or multiple selection behavior.",
    categories: ["forms", "actions"],
    meta: {
      tags: ["toggle-group", "selection", "buttons", "input"],
      examples: [
        {
          title: "Toggle options",
          code:
            'import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"\n\n<ToggleGroup type="single" value="left">\n  <ToggleGroupItem value="left">Left</ToggleGroupItem>\n  <ToggleGroupItem value="right">Right</ToggleGroupItem>\n</ToggleGroup>',
        },
      ],
    },
  },
  tooltip: {
    title: "Tooltip",
    description:
      "A small contextual hint shown on hover or focus, with configurable placement and delay.",
    categories: ["feedback", "overlay"],
    meta: {
      tags: ["tooltip", "hint", "overlay", "a11y"],
      examples: [
        {
          title: "Tooltip hint",
          code:
            'import { SimpleTooltip } from "@/components/ui/tooltip"\n\n<SimpleTooltip content="More info">\n  <span>Hover me</span>\n</SimpleTooltip>',
        },
      ],
    },
  },
  widget: {
    title: "Widget",
    description:
      "A dashboard widget container with fixed S, M, and L sizes, header, body, and footer regions.",
    categories: ["layout", "data-display"],
    meta: {
      tags: ["widget", "dashboard", "card", "layout"],
      examples: [
        {
          title: "Widget sizes",
          code:
            'import { Widget } from "@/components/ui/widget"\n\n<Widget size="M" title="Sales" timestamp="Updated now">\n  Widget content\n</Widget>',
        },
      ],
    },
  },
}
