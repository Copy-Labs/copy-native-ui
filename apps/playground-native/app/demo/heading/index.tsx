import { Box, Flex, Heading, Text, ThemeProvider } from 'radix-native-ui';
import React, { useState } from 'react';
import { PageBody, PageContainer, PageHeader, PageHeading } from '@/components/PageSection';

export default function Headings() {
  const [textValue, setTextValue] = useState<string>('text example text');

  return (
    <ThemeProvider themeOptions={{ accentColor: 'blue', radius: 'large', scaling: 1 }}>
      <PageContainer>
        <PageHeader showBackButton>
          <PageHeading>
            <Box>
              <Heading size={6}>Heading</Heading>
              <Text color={'gray'}>Semantic heading element.</Text>
            </Box>
          </PageHeading>
        </PageHeader>
        <PageBody>
          <Flex direction="column" gap={24} padding={8}>
            <Heading size={1}>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size={2}>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size={3}>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size={4}>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size={5}>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size={6}>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size={7}>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size={8}>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size={9}>The quick brown fox jumps over the lazy dog</Heading>
          </Flex>
        </PageBody>
      </PageContainer>
    </ThemeProvider>
  );
}
