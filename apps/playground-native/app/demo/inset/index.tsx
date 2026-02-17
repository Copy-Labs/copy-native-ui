import {
  Inset,
  Flex,
  ThemeProvider,
  Heading,
  Card,
  Box,
  Text,
  Strong,
} from '@radix-ui/themes-native';
import { ScrollView, View, Image } from 'react-native';

export default function InsetDemo() {
  return (
    <ThemeProvider
      mode="light"
      themeOptions={{ accentColor: 'blue', radius: 'medium', scaling: 1 }}
    >
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Flex direction="column" gap={20} padding={12}>
            <Heading size={6}>Inset Component</Heading>

            {/* Default Inset */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Default (side="all", p=4)</Heading>
              <Box style={{ backgroundColor: '#f0f0f0' }}>
                <Inset>
                  <Text>Content with default padding on all sides</Text>
                </Inset>
              </Box>
            </Flex>

            {/* Padding Sizes */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Padding Sizes (p=1-9)</Heading>
              {([1, 2, 3, 4, 5, 6, 7, 8, 9] as const).map((p) => (
                <Box key={p} style={{ backgroundColor: '#f0f0f0' }}>
                  <Inset p={p}>
                    <Text>p={p}</Text>
                  </Inset>
                </Box>
              ))}
            </Flex>

            {/* Side Prop */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Side Prop</Heading>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="all" p={4}>
                  <Text>side="all" - All sides</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="x" p={4}>
                  <Text>side="x" - Horizontal (left and right)</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="y" p={4}>
                  <Text>side="y" - Vertical (top and bottom)</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="top" p={4}>
                  <Text>side="top" - Top only</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="bottom" p={4}>
                  <Text>side="bottom" - Bottom only</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="left" p={4}>
                  <Text>side="left" - Left only</Text>
                </Inset>
              </Box>
              <Box style={{ backgroundColor: '#e8e8e8' }}>
                <Inset side="right" p={4}>
                  <Text>side="right" - Right only</Text>
                </Inset>
              </Box>
            </Flex>

            {/* Clip Prop */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Clip Prop</Heading>
              <Text color="gray" size={2}>
                The clip prop controls overflow behavior
              </Text>

              {/* Without clip - content overflows */}
              <Box style={{ backgroundColor: '#f0f0f0', borderRadius: 12, overflow: 'hidden' }}>
                <Text size={1} color="gray">
                  Without clip (image may overflow)
                </Text>
                <Inset p={3}>
                  <View
                    style={{
                      backgroundColor: '#3b82f6',
                      height: 60,
                      width: '150%',
                      marginLeft: -20,
                    }}
                  >
                    <Text style={{ color: 'white' }}>Wide content</Text>
                  </View>
                </Inset>
              </Box>

              {/* With clip="overflow" - content is clipped */}
              <Box style={{ backgroundColor: '#f0f0f0', borderRadius: 12, overflow: 'hidden' }}>
                <Text size={1} color="gray">
                  With clip="overflow"
                </Text>
                <Inset p={3} clip="overflow">
                  <View
                    style={{
                      backgroundColor: '#10b981',
                      height: 60,
                      width: '150%',
                      marginLeft: -20,
                    }}
                  >
                    <Text style={{ color: 'white' }}>Clipped content</Text>
                  </View>
                </Inset>
              </Box>
            </Flex>

            {/* In Card */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Inset in Card</Heading>
              <Card radius="large" variant="outline">
                <Inset p={4}>
                  <Flex direction="column" gap={8}>
                    <Text weight="bold">Card Title</Text>
                    <Text color="gray">Card content with consistent padding using Inset</Text>
                  </Flex>
                </Inset>
              </Card>
              <Card radius="large" variant="surface">
                <Inset side="x" p={4}>
                  <Text>Card with horizontal padding only (side="x")</Text>
                </Inset>
              </Card>
            </Flex>

            <Box maxWidth={240}>
              <Card size={2}>
                <Inset clip="padding-box" side="top">
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                      height: 140,
                  }}
                    alt="Bold typography"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: 140,
                      backgroundColor: 'var(--gray-5)',
                    }}
                  />
                </Inset>
                <Text size={3}>
                  <Strong>Typography</Strong> is the art and technique of arranging type to make
                  written language legible, readable and appealing when displayed.
                </Text>
              </Card>
            </Box>

            {/* Image with Inset and clip */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Image with Clip</Heading>
              <Card radius="large" variant="outline" style={{ overflow: 'hidden' }}>
                <Inset clip="overflow">
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400&h=200&fit=crop',
                    }}
                    style={{ width: '100%', height: 150 }}
                    resizeMode="cover"
                  />
                </Inset>
                <Inset p={4}>
                  <Text weight="bold">Image clipped to bounds</Text>
                  <Text color="gray" size={2}>
                    Using clip="overflow" to contain the image
                  </Text>
                </Inset>
              </Card>
            </Flex>

            {/* Nested Insets */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Nested Insets</Heading>
              <Box style={{ backgroundColor: '#d0d0d0' }}>
                <Inset p={6}>
                  <Box style={{ backgroundColor: '#e0e0e0' }}>
                    <Inset p={4}>
                      <Box style={{ backgroundColor: '#f0f0f0' }}>
                        <Inset p={2}>
                          <Text>Deeply nested content with layered padding</Text>
                        </Inset>
                      </Box>
                    </Inset>
                  </Box>
                </Inset>
              </Box>
            </Flex>

            {/* Practical Example - Section */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Practical Example - Section</Heading>
              <Box style={{ backgroundColor: '#f5f5f5', borderRadius: 8 }}>
                <Inset p={5}>
                  <Text size={5} weight="bold">
                    Section Title
                  </Text>
                </Inset>
                <Inset side="x" p={4}>
                  <Text color="gray">
                    Section content with horizontal padding. This pattern is useful for creating
                    distinct sections within a view.
                  </Text>
                </Inset>
                <Inset p={4}>
                  <Text>Additional content with full padding.</Text>
                </Inset>
              </Box>
            </Flex>

            {/* Combined with Flex */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Combined with Flex</Heading>
              <Box style={{ backgroundColor: '#f0f0f0', borderRadius: 8 }}>
                <Inset p={4}>
                  <Flex direction="row" gap={12} align="center">
                    <Box
                      style={{
                        backgroundColor: '#3b82f6',
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                      }}
                    />
                    <Flex direction="column">
                      <Text weight="bold">List Item</Text>
                      <Text color="gray" size={2}>
                        Description text
                      </Text>
                    </Flex>
                  </Flex>
                </Inset>
              </Box>
            </Flex>

            {/* Deprecated trim prop (still works) */}
            <Flex direction="column" gap={16}>
              <Heading size={4}>Deprecated: trim prop</Heading>
              <Box style={{ backgroundColor: '#fff3cd', borderRadius: 8 }}>
                <Inset trim={4}>
                  <Text>Using deprecated trim prop (shows warning in console)</Text>
                </Inset>
              </Box>
            </Flex>
          </Flex>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}
