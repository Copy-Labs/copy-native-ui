# TextField Slot Implementation Plan

## Overview
Implement compound component pattern for TextField with Slot functionality, allowing icons and buttons to be positioned on the left or right side of the input field.

## Requirements
- **Backward Compatibility**: Existing `<TextField />` usage must continue to work
- **Compound Components**: `TextField.Root`, `TextField.Slot` pattern
- **Slot Props**: `side` ("left" | "right"), `color`, `gap`, `paddingHorizontal`, `paddingLeft`, `paddingRight`
- **Use Existing Utilities**: Leverage existing `Slot` component from utilities

## Architecture

### Component Structure
```
TextField (main export - backward compatible)
├── TextField.Root (container for slots + input)
├── TextField.Slot (wrapper for icons/buttons)
```

### Props Interfaces

#### TextFieldRootProps
Extends `TextFieldProps` and adds:
- `children`: React.ReactNode (slots + TextInput)

#### TextFieldSlotProps
- `side`: "left" | "right" (optional - auto-detected if not provided)
- `color`: Color (optional)
- `gap`: number (optional)
- `paddingHorizontal`: number (optional)
- `paddingLeft`: number (optional)
- `paddingRight`: number (optional)
- `children`: React.ReactNode
- Inherits from SlotProps for merge behavior

## Implementation Steps

### Step 1: Update TextField.tsx

#### Add new imports
```typescript
import { Slot } from '../utilities/Slot';
```

#### Define TextFieldSlotProps interface
```typescript
interface TextFieldSlotProps {
  side?: "left" | "right"; // Optional - auto-detected if not provided
  color?: Color;
  gap?: number;
  paddingHorizontal?: number;
  paddingLeft?: number;
  paddingRight?: number;
  children: React.ReactNode;
}
```

#### Create TextFieldSlot component
- Wraps children with existing `Slot` utility
- Applies side-specific styling (margin/padding)
- Applies color theming if provided
- Merges with existing Slot behavior

#### Create TextFieldRoot component
- Accepts all existing TextFieldProps
- Accepts children (slots + input)
- Renders slots on left/right sides
- Maintains focus state management
- Handles accessibility

#### Refactor TextField main export
- Keeps existing single-component API
- Internally uses TextField.Root with no slots
- Maintains all existing props and behavior

### Step 2: Update exports in forms/index.ts
```typescript
export { TextField } from './TextField';
export type { TextFieldProps } from './TextField';
export type { TextFieldSlotProps } from './TextField';
```

### Step 3: Add examples to playground demo

#### Example 1: Search input with icon
```tsx
<TextField.Root placeholder="Search the docs…" size="2">
  <TextField.Slot side="left">
    <MagnifyingGlassIcon height="16" width="16" />
  </TextField.Slot>
</TextField.Root>
```

#### Example 2: Input with clear button
```tsx
<TextField.Root placeholder="Enter text" size="2">
  <TextField.Slot side="right">
    <IconButton size="1" variant="ghost">
      <CrossIcon height="14" width="14" />
    </IconButton>
  </TextField.Slot>
</TextField.Root>
```

#### Example 3: Input with both sides
```tsx
<TextField.Root placeholder="Search" size="2">
  <TextField.Slot side="left">
    <SearchIcon />
  </TextField.Slot>
  <TextField.Slot side="right">
    <Button size="1">Go</Button>
  </TextField.Slot>
</TextField.Root>
```

## Layout Considerations

### Slot Positioning
- Left slots: positioned before input with margin/padding
- Right slots: positioned after input with margin/padding
- Vertical alignment: center (textAlignVertical: center for single-line)

### Spacing
- Use theme space scale for gap, paddingHorizontal, paddingLeft, paddingRight
- Default spacing based on size variant
- Custom spacing can override via props

### Color Application
- Slot color applies to contained icon/button
- Uses theme color tokens if provided
- Falls back to default styling

## Backward Compatibility
- `TextField` remains the main export
- All existing props work unchanged
- Existing usage: `<TextField placeholder="Search" />` still works
- New usage: `<TextField.Root><TextField.Slot /></TextField.Root>`

## Testing Checklist
- [ ] Single-component usage still works
- [ ] Compound component usage works
- [ ] Left slots render correctly
- [ ] Right slots render correctly
- [ ] Multiple slots on same side work
- [ ] Color prop applies correctly
- [ ] Spacing props (gap, paddingHorizontal, paddingLeft, paddingRight) work
- [ ] Focus state works with slots
- [ ] Disabled state works with slots
- [ ] All size variants work
- [ ] All color variants work

## Files Modified
1. `packages/radix-ui-themes-native/src/components/forms/TextField.tsx`
2. `packages/radix-ui-themes-native/src/components/forms/index.ts`
3. `apps/playground-native/app/demo/text_fields/index.tsx`
