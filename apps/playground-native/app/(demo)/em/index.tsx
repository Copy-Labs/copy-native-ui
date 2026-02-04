import { Em, Flex, Strong, Text, ThemeProvider } from '@radix-ui/themes-native';

export default function Texts() {
  return (
    <ThemeProvider
      mode={'light'}
      themeOptions={{ accentColor: 'blue', radiusFactor: 4, scaling: 1 }}
    >
      <Flex direction={'column'} gap={12} padding={12}>
        <Flex align={'baseline'} gap={8}>
          <Text size={7} weight={'bold'}>
            Em
          </Text>
          <Text size={4} weight={'medium'}>
            (Marks text to stress emphasis)
          </Text>
        </Flex>

        <Flex direction={'column'} gap={12}>
          <Text>
            We <Em>had</Em> to do something about it.
          </Text>
          <Flex maxWidth={300}>
            <Em>
              The goal of typography is to relate font size, line height, and line width in a
              proportional way that maximizes beauty and makes reading easier and more pleasant.
            </Em>
          </Flex>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}
