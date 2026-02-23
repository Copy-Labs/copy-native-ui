# TextArea Multiline Fix Plan

## Current Problems

### 1. Text doesn't wrap/break properly
The nested Flex containers with `flex: 1` and `width: '100%'` are conflicting with TextInput's natural text wrapping behavior.

### 2. Text doesn't expand vertically
The `alignItems: 'center'` on line 375 and 444 centers content vertically instead of allowing expansion.

### 3. Commented-out user TextInput handling
Lines 459-468 are commented out, removing the ability to use custom TextInput elements.

## Root Cause Analysis

React Native TextInput with `multiline={true}` requires:
- `textAlignVertical: 'top'` ✅ (line 400)
- NO fixed height constraint
- NO `alignItems: 'center'` on parent containers
- NO unnecessary Flex wrapping that constrains expansion

Current issues:
- Line 375: `alignItems: 'center'` - wrong for multiline
- Line 444: `<Flex align={'center'}` - wrong for multiline
- Lines 469-474: Extra Flex wrapper unnecessary for multiline

## Solution

### Step 1: Remove double-border logic

The current design has:
- Outer View with `borderWidth: 2`
- Inner Flex with `borderWidth: 1`

Simplify to just the outer border.

### Step 2: Handle multiline differently

```tsx
// For single-line: alignItems: 'center'
// For multiline: alignItems: 'stretch' or 'flex-start'
const inputContainerStyle: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: multiline ? 'flex-start' : 'center', // Key fix
  justifyContent: 'space-between',
  borderWidth: 2,
  borderColor: inputContainerBorderColor(),
  backgroundColor: inputContainerBackgroundColor(),
  borderRadius: sizeValues.borderRadius,
  opacity: disabled ? 0.6 : 1,
};
```

### Step 3: Simplify TextInput container

Remove the extra Flex wrappers for multiline:

```tsx
{/* Text Input */}
{textInput ? (
  isValidElement(textInput)
    ? React.cloneElement(textInput as React.ReactElement<any>, {
        ...commonInputProps,
        style: [inputStyle, (textInput as React.ReactElement<any>).props?.style],
      })
    : null
) : multiline ? (
  <RadixTextInputPrimitive
    {...commonInputProps}
    style={[styles.input, inputStyle]}
  />
) : (
  <Flex direction={'row'} style={{ flex: 1 }}>
    <RadixTextInputPrimitive
      {...commonInputProps}
      style={[styles.input, inputStyle]}
    />
  </Flex>
)}
```

### Step 4: Fix styles for multiline

```tsx
const inputStyle = {
  flex: multiline ? 0 : 1, // Don't flex for multiline
  fontSize: sizeValues.fontSize,
  color: color !== 'gray' ? variantColors.textColor : grayScale[12],
  paddingVertical: sizeValues.paddingVertical / 4,
  paddingHorizontal: sizeValues.paddingHorizontal / 2,
  minHeight: multiline ? sizeValues.height : undefined,
  height: multiline ? undefined : sizeValues.height,
  textAlignVertical: multiline ? ('top' as const) : ('center' as const),
  // Remove border - outer container has it
};
```

## Files to Modify

| File | Changes |
|------|---------|
| `packages/radix-ui-themes-native/src/components/forms/TextField.tsx` | Fix multiline styling |

## Implementation Steps

### 1. Fix inputContainerStyle (line 371)

```tsx
const inputContainerStyle: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: multiline ? 'flex-start' : 'center', // Changed
  justifyContent: 'space-between',
  borderWidth: 2,
  borderColor: inputContainerBorderColor(),
  backgroundColor: inputContainerBackgroundColor(),
  borderRadius: sizeValues.borderRadius,
  opacity: disabled ? 0.6 : 1,
};
```

### 2. Remove inputInnerContainerStyle (lines 384-391)

Delete or simplify this since we removed the double border.

### 3. Fix inputStyle (lines 393-401)

```tsx
const inputStyle = {
  flex: multiline ? 0 : 1,
  fontSize: sizeValues.fontSize,
  color: color !== 'gray' ? variantColors.textColor : grayScale[12],
  paddingVertical: sizeValues.paddingVertical / 4,
  paddingHorizontal: sizeValues.paddingHorizontal / 2,
  minHeight: multiline ? sizeValues.height : undefined,
  height: multiline ? undefined : sizeValues.height,
  textAlignVertical: multiline ? ('top' as const) : ('center' as const),
};
```

### 4. Fix the TextInput rendering (lines 459-474)

Uncomment the user-provided TextInput branch and fix the default:

```tsx
{/* Text Input */}
{textInput ? (
  isValidElement(textInput)
    ? React.cloneElement(textInput as React.ReactElement<any>, {
        ...commonInputProps,
        style: [inputStyle, (textInput as React.ReactElement<any>).props?.style],
      })
    : null
) : multiline ? (
  <RadixTextInputPrimitive
    {...commonInputProps}
    style={[styles.input, inputStyle]}
  />
) : (
  <Flex direction={'row'} style={{ flex: 1 }}>
    <RadixTextInputPrimitive
      {...commonInputProps}
      style={[styles.input, inputStyle]}
    />
  </Flex>
)}
```

### 5. Remove slotWrapperStyle (lines 408-412)

Delete or uncomment the padding.

### 6. Simplify Flex wrapping

Line 444: Remove the `align={'center'}` for multiline or change to:

```tsx
<Flex
  align={multiline ? 'flex-start' : 'center'}
  direction={'row'}
  style={inputInnerContainerStyle}
>
```

## Testing Checklist

- [ ] Single-line TextField works as before
- [ ] TextArea text wraps properly
- [ ] TextArea expands vertically when typing long text
- [ ] Left/right slots still work in both modes
- [ ] Focus states work correctly
- [ ] Disabled state works
- [ ] Error state displays correctly

## Risk Assessment

| Risk | Level | Mitigation |
|------|-------|------------|
| Regression on single-line | Medium | Test both modes thoroughly |
| Slots positioning | Low | Unchanged for single-line |
| Style changes | Low | Only multiline behavior changes |
