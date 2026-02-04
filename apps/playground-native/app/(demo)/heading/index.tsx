import { Badge, Flex, ThemeProvider, Heading, TextField, TextArea, Text, Strong, Code } from '@radix-ui/themes-native';
import { useState } from 'react';

export default function Headings() {
  const [textValue, setTextValue] = useState<string>('text example text');

  return (
    <ThemeProvider
      mode={'light'}
      themeOptions={{ accentColor: 'blue', radiusFactor: 4, scaling: 1 }}
    >
      <Flex direction="column" gap={8} padding={8}>
        <Heading size={1}>The quick brown fox jumps over the lazy dog</Heading>
        <Heading size={2}>The quick brown fox jumps over the lazy dog</Heading>
        <Heading size={3}>The quick brown fox jumps over the lazy dog</Heading>
        <Heading size={4}>The quick brown fox jumps over the lazy dog</Heading>
        <Heading size={5}>The quick brown fox jumps over the lazy dog</Heading>
        {/*<Heading size={6}>The quick brown fox jumps over the lazy dog</Heading>*/}
        {/*<Heading size={7}>The quick brown fox jumps over the lazy dog</Heading>*/}
        {/*<Heading size={8}>The quick brown fox jumps over the lazy dog</Heading>*/}
        {/*<Heading size={9}>The quick brown fox jumps over the lazy dog</Heading>*/}
      </Flex>
    </ThemeProvider>
  );
}
