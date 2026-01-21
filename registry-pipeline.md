# Registry Pipeline (Templates and Components)

This document defines how to add new templates (blocks) and components (UI primitives)
to the BRD registry so they appear in the site, export correctly to `public/r/`,
and open in v0 with the correct dependencies.

## Concepts

- **Component (UI primitive)**: Single reusable UI unit (e.g. Button, Input).
- **Template (Block)**: Composition of multiple components for a full UI pattern
  (e.g. Widget, Dashboard panel, Form layout).

## Add a New Component

1. **Create the component implementation**
   - Add the file under `components/ui/` (example: `components/ui/your-component.tsx`).
   - Keep imports aligned with BRD components and tokens.

2. **Create the registry page**
   - Add a new page at `app/your-component/page.tsx`.
   - Export `meta` with required fields:
     - `$schema`, `name`, `type: "registry:ui"`, `title`, `description`,
       `files`, `dependencies`, `registryDependencies` (if needed).
   - Use the shared metadata map:
     - Add `...registryMetadata["your-component"]` to `meta`.

3. **Add metadata entry**
   - Update `lib/registry-metadata.ts` with:
     - `title`, `description`, `categories`, `meta.tags`, `meta.examples`.

4. **Add to navigation and Home**
   - Add the slug to the components list in `components/component-sidebar.tsx`.
   - Add the slug to the `COMPONENTS` list in `app/page.tsx`.

5. **Build registry artifacts**
   - Run `npm run build` to regenerate `public/r/` files.
   - Verify the item exists at `/r/brdcomp-your-component.json`.

## Add a New Template (Block)

1. **Create the template page**
   - Add a new page at `app/your-template/page.tsx`.
   - Use `type: "registry:block"` in `meta`.
   - Include all required `files` and list `registryDependencies`
     for each component used by the template.

2. **Add metadata entry**
   - Add a corresponding entry in `lib/registry-metadata.ts`
     with tags and example usage showing composition.

3. **Add to navigation and Home**
   - Add the slug to `components/component-sidebar.tsx`
     and the `COMPONENTS` list in `app/page.tsx`.

4. **Build registry artifacts**
   - Run `npm run build` and verify `/r/brdcomp-your-template.json`.

## Checklist Before Commit

- Page renders without errors.
- `meta` includes `$schema`, `name`, `type`, `title`, `description`, `files`.
- Registry dependencies point to `https://shad-brd-registery.vercel.app/r/...`.
- v0 open link works (use the "Open in v0" button).
- `public/r/` regenerated and includes the new item.
