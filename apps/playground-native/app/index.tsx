import { Link } from 'expo-router';
import { Box, Button, Card, Flex, Heading, Text, ThemeProvider } from '@radix-ui/themes-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PageBody, PageContainer } from '@/components/PageSection';

export default function App() {
  const insets = useSafeAreaInsets();

  return (
    <PageContainer>
      <PageBody>
        <Flex position={'absolute'} bottom={24} right={24} zIndex={20}>
          <ThemeToggle />
        </Flex>
        <Flex direction={'column'} gap={4} paddingHorizontal={16} paddingVertical={16}>
          <Heading align={'center'} size={7}>
            Copy Native UI
          </Heading>
          <Text color={'gray'} align={'center'} size={3}>
            A React Native port of the popular Radix Themes component library.
          </Text>
        </Flex>
        <Flex
          align={'center'}
          bottom={8}
          direction={'column'}
          flex={1}
          justify={'center'}
          position={'absolute'}
          width={'100%'}
        >
          <Text color={'gray'} align={'center'} size={3} weight={'light'}>
            This app in entirely built using Copy Native UI
          </Text>
          <Text color={'gray'} weight={'light'}>
            Copy &copy; {new Date().getFullYear()}
          </Text>
        </Flex>
        <Box padding={16}>
          {/*<Text align={'left'}>Visit these places to Explore Radix UI Native</Text>*/}
          <Card radius={'large'} size={3}>
            <Flex direction={'column'} gap={16} paddingTop={32}>
              <Text color={'gray'} size={8} weight={'light'}>
                Components
              </Text>
              <Text color={'gray'}>View all 40+ available components here and how to use them.</Text>
              <Link asChild href={'/demo'}>
                <Button size={3} variant={'solid'}>
                  All Components
                  <Button.Icon>
                    <Ionicons name={'arrow-forward'} />
                  </Button.Icon>
                </Button>
              </Link>
            </Flex>
          </Card>
          <Flex direction={'column'} gap={12} paddingVertical={12}>
            <Card radius={'large'} size={3}>
              <Flex direction={'column'} gap={16}>
                <Text color={'gray'} size={5} weight={'regular'}>
                  Twitter Profile Demo Example
                </Text>
                <Text color={'gray'}>
                  Check out a twitter profile demo built using Copy Native UI.
                </Text>
                <Link asChild href={'/profile'}>
                  <Button variant={'ghost'}>
                    Twitter Profile Demo
                    <Button.Icon>
                      <Ionicons name={'arrow-forward'} />
                    </Button.Icon>
                  </Button>
                </Link>
              </Flex>
            </Card>
            <Card radius={'large'} size={3}>
              <Flex direction={'column'} gap={16}>
                <Text color={'gray'} size={5} weight={'regular'}>
                  Default Expo Project Example
                </Text>
                <Text color={'gray'}>Visit the default Expo project example.</Text>
                <Link asChild href={'/tabs'}>
                  <Button variant={'ghost'}>
                    Default Expo Project
                    <Button.Icon>
                      <Ionicons name={'arrow-forward'} />
                    </Button.Icon>
                  </Button>
                </Link>
              </Flex>
            </Card>
          </Flex>
        </Box>
      </PageBody>
    </PageContainer>
  );
}
