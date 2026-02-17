# Inset Component Examples

This document provides example usage patterns for the `Inset` component from `@radix-ui/themes-native`.

## Basic Usage

### Default Inset (all sides, trim=4)

```tsx
import { Inset, Box, Text, ThemeProvider } from '@radix-ui/themes-native';

<Inset>
  <Box style={{ backgroundColor: '#f0f0f0' }}>
    <Text>Content with default padding on all sides</Text>
  </Box>
</Inset>
```

### Custom Trim Size

```tsx
<Inset trim={1}>
  <Text>Extra small padding</Text>
</Inset>

<Inset trim={3}>
  <Text>Small padding</Text>
</Inset>

<Inset trim={5}>
  <Text>Medium padding</Text>
</Inset>

<Inset trim={7}>
  <Text>Large padding</Text>
</Inset>

<Inset trim={9}>
  <Text>Extra large padding</Text>
</Inset>
```

## Side Prop Examples

### Horizontal Padding Only

```tsx
<Inset side="horizontal" trim={4}>
  <Text>Left and right padding only</Text>
</Inset>
```

### Vertical Padding Only

```tsx
<Inset side="vertical" trim={4}>
  <Text>Top and bottom padding only</Text>
</Inset>
```

### Single Side Padding

```tsx
<Inset side="top" trim={3}>
  <Text>Top padding only</Text>
</Inset>

<Inset side="bottom" trim={3}>
  <Text>Bottom padding only</Text>
</Inset>

<Inset side="left" trim={3}>
  <Text>Left padding only</Text>
</Inset>

<Inset side="right" trim={3}>
  <Text>Right padding only</Text>
</Inset>
```

## Practical Use Cases

### Inset within a Card

```tsx
import { Card, Inset, Text, Flex } from '@radix-ui/themes-native';

<Card radius="large" variant="outline">
  <Inset trim={4}>
    <Flex direction="column" gap={2}>
      <Text weight="bold">Card Title</Text>
      <Text color="gray">Card content with consistent padding</Text>
    </Flex>
  </Inset>
</Card>
```

### Image with Inset

```tsx
import { Card, Inset, Image, Text } from '@radix-ui/themes-native';

<Card radius="large">
  <Inset side="top" trim={0}>
    <Image 
      source={{ uri: 'https://example.com/image.jpg' }}
      style={{ width: '100%', height: 200 }}
    />
  </Inset>
  <Inset trim={4}>
    <Text>Content below the image with padding</Text>
  </Inset>
</Card>
```

### Nested Insets

```tsx
<Box style={{ backgroundColor: '#e0e0e0' }}>
  <Inset trim={6}>
    <Box style={{ backgroundColor: '#f5f5f5' }}>
      <Inset trim={4}>
        <Text>Nested content with layered padding</Text>
      </Inset>
    </Box>
  </Inset>
</Box>
```

### List Item with Inset

```tsx
import { Flex, Inset, Text, Badge } from '@radix-ui/themes-native';

<Flex direction="column">
  {items.map((item) => (
    <Inset key={item.id} side="horizontal" trim={4}>
      <Flex justify="space-between" align="center">
        <Text>{item.name}</Text>
        <Badge>{item.status}</Badge>
      </Flex>
    </Inset>
  ))}
</Flex>
```

### Section Divider with Inset

```tsx
<Flex direction="column">
  <Inset trim={5}>
    <Text size={5} weight="bold">Section Title</Text>
  </Inset>
  <Inset side="horizontal" trim={4}>
    <Text>Section content with horizontal padding</Text>
  </Inset>
</Flex>
```

## Complete Demo Page Example

```tsx
import {
  Inset,
  Flex,
  ThemeProvider,
  Heading,
  Card,
  Box,
  Text,
} from '@radix-ui/themes-native';
import { ScrollView, View } from 'react-native';

export default function InsetDemo() {
  return (
    <ThemeProvider mode="light" themeOptions={{ accentColor: 'blue', radius: 'medium' }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Flex direction="column" gap={20} padding={12}>
            <Heading size={6}>Inset Component</Heading>

            {/* Trim Sizes */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Trim Sizes</Heading>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((trim) => (
                <Box key={trim} style={{ backgroundColor: '#f0f0f0' }}>
                  <Inset trim={trim}>
                    <Text>trim={trim}</Text>
                  </Inset>
                </Box>
              ))}
            </Flex>

            {/* Side Prop */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Side Prop</Heading>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="all" trim={4}>
                  <Text>side="all" - All sides</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="horizontal" trim={4}>
                  <Text>side="horizontal" - Left and right</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="vertical" trim={4}>
                  <Text>side="vertical" - Top and bottom</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="top" trim={4}>
                  <Text>side="top" - Top only</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="bottom" trim={4}>
                  <Text>side="bottom" - Bottom only</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="left" trim={4}>
                  <Text>side="left" - Left only</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="right" trim={4}>
                  <Text>side="right" - Right only</Text>
                </Inset>
              </Box>
            </Flex>

            {/* In Card */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Inset in Card</Heading>
              <Card radius="large" variant="outline">
                <Inset trim={4}>
                  <Text>Card content with Inset padding</Text>
                </Inset>
              </Card>
            </Flex>

            {/* Nested */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Nested Insets</Heading>
              <Box style={{ backgroundColor: '#d0d0d0' }}>
                <Inset trim={6}>
                  <Box style={{ backgroundColor: '#e0e0e0' }}>
                    <Inset trim={4}>
                      <Box style={{ backgroundColor: '#f0f0f0' }}>
                        <Inset trim={2}>
                          <Text>Deeply nested content</Text>
                        </Inset>
                      </Box>
                    </Inset>
                  </Box>
                </Inset>
              </Box>
            </Flex>
          </Flex>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}
```

## Notes

1. **Default Values**: `side="all"` and `trim={4}` are the defaults
2. **Trim Scale**: The `trim` prop accepts values 1-9, mapping to the theme's spacing scale
3. **Composition**: Inset works well with Card, Box, and Flex components
4. **Background**: Inset does not provide a background - wrap in a Box or Card if needed
