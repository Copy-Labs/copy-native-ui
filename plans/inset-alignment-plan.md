# Inset Component Alignment Plan

## Understanding the Inset Component

### What Inset Does in Radix UI Themes

The **Inset** component in Radix UI Themes serves two primary purposes:

1. **Apply Consistent Padding**: Adds spacing using the theme's spacing scale via the `p` prop
2. **Clip Overflow Content**: Controls how content is clipped within the padding area via the `clip` prop

### Key Use Cases

```tsx
// 1. Basic padding within a container
<Card>
  <Inset p="4">
    <Text>Content with padding</Text>
  </Inset>
</Card>

// 2. Clipping an image within a card
<Card>
  <Inset clip="padding-box">
    <img src="..." />
  </Inset>
  <Inset p="4">
    <Text>Image is clipped, text has padding</Text>
  </Inset>
</Card>

// 3. Side-specific padding
<Inset side="x" p="4">
  <Text>Horizontal padding only</Text>
</Inset>
```

### The `clip` Prop Explained

The `clip` prop is crucial for containing content:

- **`clip="overflow"`**: Clips content that overflows the container (sets `overflow: hidden`)
- **`clip="padding-box"`**: Clips content to the padding box boundary, useful for images that should be contained within rounded corners

In React Native, this translates to:
- `overflow: 'hidden'` for clipping
- Works with `borderRadius` for rounded corner clipping

---

## Current Implementation Issues

### 1. Wrong Prop Name
| Current | Radix UI Themes |
|---------|-----------------|
| `trim` | `p` |

### 2. Missing `clip` Prop
No overflow control in current implementation.

### 3. Missing `asChild` Support
Cannot delegate rendering to child component.

### 4. Missing ViewProps Extension
No TypeScript support for native View props.

---

## Alignment Plan

### Phase 1: Update Props Interface

```tsx
interface InsetProps extends ViewProps {
  /**
   * Whether to merge props onto the immediate child
   */
  asChild?: boolean;
  
  /**
   * Children components
   */
  children?: React.ReactNode;
  
  /**
   * Style prop for the Inset
   */
  style?: StyleProp<ViewStyle>;
  
  /**
   * Side(s) to apply padding to
   * @default 'all'
   */
  side?: 'all' | 'x' | 'y' | 'top' | 'bottom' | 'left' | 'right';
  
  /**
   * Padding size (1-9)
   * @default 4
   */
  p?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  
  /**
   * Clip behavior for overflow content
   */
  clip?: 'overflow' | 'padding-box';
}
```

### Phase 2: Update Implementation

```tsx
const Inset = React.memo(
  React.forwardRef<React.ComponentRef<typeof RNView>, InsetProps>(
    ({ asChild = false, children, style, side = 'all', p = 4, clip, ...rest }, ref) => {
      const theme = useTheme();
      const spacing = theme.space[p] ?? theme.space[4]; // Fallback
      
      // Padding lookup object (moved outside component for performance)
      const paddingStyles: Record<string, ViewStyle> = {
        all: { padding: spacing },
        x: { paddingHorizontal: spacing },
        y: { paddingVertical: spacing },
        top: { paddingTop: spacing },
        bottom: { paddingBottom: spacing },
        left: { paddingLeft: spacing },
        right: { paddingRight: spacing },
      };
      
      const insetStyle: ViewStyle = useMemo(() => ({
        ...paddingStyles[side] ?? paddingStyles.all,
        ...(clip ? { overflow: 'hidden' } : {}),
      }), [side, spacing, clip]);
      
      const Comp = asChild ? Slot : View;
      
      return (
        <Comp ref={ref} style={[insetStyle, style]} {...rest}>
          {children}
        </Comp>
      );
    }
  ),
  areEqual
);
```

### Phase 3: Update Side Values

Change from verbose to shorthand (matching Radix):
- `'horizontal'` → `'x'`
- `'vertical'` → `'y'`
- Keep `'all'`, `'top'`, `'bottom'`, `'left'`, `'right'`

### Phase 4: Add Deprecation Warning

For backward compatibility, support `trim` with deprecation:

```tsx
// Support deprecated trim prop
const padding = p ?? (trim as any) ?? 4;
if (trim) {
  console.warn('Inset: `trim` prop is deprecated. Use `p` instead.');
}
```

---

## Implementation Checklist

- [ ] Rename `trim` prop to `p`
- [ ] Add `clip` prop with `overflow` and `padding-box` options
- [ ] Add `asChild` support using Slot
- [ ] Extend `ViewProps` for proper TypeScript support
- [ ] Update `side` values: `horizontal` → `x`, `vertical` → `y`
- [ ] Add fallback for spacing value
- [ ] Move padding lookup outside component
- [ ] Add deprecation warning for `trim`
- [ ] Update documentation
- [ ] Update demo page

---

## Files to Modify

1. `packages/radix-ui-themes-native/src/components/layout/Inset.tsx`
2. `packages/radix-ui-themes-native/docs/component-api.md`
3. `apps/playground-native/app/demo/inset/index.tsx`
