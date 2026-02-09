import { Box, Flex, SegmentedControl, ThemeProvider, Text } from '@radix-ui/themes-native';
import { useState } from 'react';

export default function SegmentedControlDemo() {
  const [sg, setSg] = useState<string>('1');

  return (
    <ThemeProvider
      mode={'light'}
      themeOptions={{ accentColor: 'blue', radius: 'medium', scaling: 1 }}
    >
      <Flex direction={'column'} gap={12} padding={12} align={'center'} justify={'center'}>
        <Box padding={12}>
          <SegmentedControl.Root defaultValue={'option1'}>
            <SegmentedControl.Item value="option1">Option 1</SegmentedControl.Item>
            <SegmentedControl.Item value="option2">Option 2</SegmentedControl.Item>
            <SegmentedControl.Item value="option3">Option 3</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>

        {/* Size 1 - Segmented Control */}
        <Box padding={12}>
          <SegmentedControl.Root value={sg} onValueChange={setSg} size={1}>
            <SegmentedControl.Item value="apple">Apple</SegmentedControl.Item>
            <SegmentedControl.Item value="banana">Banana</SegmentedControl.Item>
            <SegmentedControl.Item value="carrot">Carrot</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>

        {/* Size 2 - Segmented Control */}
        <Box padding={12}>
          <SegmentedControl.Root value={sg} onValueChange={setSg} size={2}>
            <SegmentedControl.Item value="apple">Apple</SegmentedControl.Item>
            <SegmentedControl.Item value="banana">Banana</SegmentedControl.Item>
            <SegmentedControl.Item value="carrot">Carrot</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>

        {/* Size 3 - Segmented Control */}
        <Box padding={12}>
          <SegmentedControl.Root radius={'large'} value={sg} onValueChange={setSg} size={3}>
            <SegmentedControl.Item value="apple">Apple</SegmentedControl.Item>
            <SegmentedControl.Item value="banana">Banana</SegmentedControl.Item>
            <SegmentedControl.Item value="carrot">Carrot</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>

        {/* Size 4 - Segmented Control */}
        <Box padding={12}>
          <SegmentedControl.Root radius={'full'} value={sg} onValueChange={setSg} size={4}>
            <SegmentedControl.Item value="apple">Apple</SegmentedControl.Item>
            <SegmentedControl.Item value="banana">Banana</SegmentedControl.Item>
            <SegmentedControl.Item value="carrot">Carrot</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>

        {/* Colors - Segmented Control */}
        <Box padding={12}>
          <SegmentedControl.Root color={'grass'} defaultValue={'apple'} radius={'full'} value={sg} onValueChange={setSg}>
            <SegmentedControl.Item value="apple">Apple</SegmentedControl.Item>
            <SegmentedControl.Item value="banana">Banana</SegmentedControl.Item>
            <SegmentedControl.Item value="carrot">Carrot</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>

        <Box padding={12}>
          <SegmentedControl.Root color={'blue'} radius={'large'} value={sg} onValueChange={setSg}>
            <SegmentedControl.Item value="apple">Apple</SegmentedControl.Item>
            <SegmentedControl.Item value="banana">Banana</SegmentedControl.Item>
            <SegmentedControl.Item value="carrot">Carrot</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>

        {/* Per-item disabled */}
        <Box padding={12}>
          <SegmentedControl.Root value={sg} onValueChange={setSg}>
            <SegmentedControl.Item value="enabled">Enabled</SegmentedControl.Item>
            <SegmentedControl.Item value="disabled" disabled>Disabled</SegmentedControl.Item>
            <SegmentedControl.Item value="also-enabled">Also Enabled</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Box>
      </Flex>
    </ThemeProvider>
  );
}
