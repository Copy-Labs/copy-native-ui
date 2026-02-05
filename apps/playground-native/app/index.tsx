import { Link, Redirect } from 'expo-router';
import { Box, Button, Flex, Heading, Text, ThemeProvider } from '@radix-ui/themes-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider
        mode={'light'}
        themeOptions={{ accentColor: 'blue', radius: 'medium', scaling: 1 }}
      >
        <Box padding={8}>
          <Heading align={'center'} size={5}>Radix UI Native</Heading>
          <Text align={'center'} size={4}>Visit these places to Explore Radix UI Native</Text>
          <Flex direction={'column'} gap={12} padding={12}>
            <Button size={3} variant={'soft'}>
              <Link href={'/demo'}>All Components</Link>
            </Button>
            <Button variant={'soft'}>
              <Link href={'/profile'}>Twitter Profile Demo</Link>
            </Button>
            <Button size={1} variant={'soft'}>
              <Link href={'/tabs'}>Default Expo Project</Link>
            </Button>
          </Flex>
        </Box>
      </ThemeProvider>
    </SafeAreaView>
  );
}
