import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  IconButton,
  Popover,
  Text,
  ThemeProvider,
} from 'radix-native-ui';
import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { LucideX } from 'lucide-react-native';
import { PageBody, PageContainer, PageHeader, PageHeading } from '@/components/PageSection';
import { Ionicons } from '@expo/vector-icons';

export default function PopoverDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider themeOptions={{ accentColor: 'blue', radius: 'medium', scaling: 1 }}>
      <PageContainer>
        <PageHeader showBackButton>
          <PageHeading>
            <Box>
              <Heading size={6}>Popover</Heading>
            </Box>
          </PageHeading>
        </PageHeader>
        <PageBody>
          <ScrollView>
            <View>
              <Flex direction={'column'} gap={20} padding={12}>
                <Text color={'gray'}>
                  Floating element for displaying rich content, triggered by a Button.
                </Text>
                <Card radius={'full'}>
                  <Flex align={'center'} justify={'space-between'}>
                    <Ionicons name={'menu'} size={24} color={'gray'} />
                    <Popover.Root>
                      <Popover.Trigger asChild>
                        <Button color={'gray'} radius={'full'} size={1} variant={'ghost'}>
                          <Button.Label>
                            <Avatar
                              fallback="A"
                              radius={'full'}
                              size={2}
                              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                            />
                          </Button.Label>
                        </Button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Overlay />
                        <Popover.Content
                          align={'end'}
                          size={1}
                          sideOffset={5}
                          style={{ borderRadius: 16 }}
                        >
                          <Card size={1} variant={'surface'}>
                            <Popover.Title>Carol One</Popover.Title>
                            <Popover.Description>This is my Profile popover</Popover.Description>
                          </Card>
                          <Flex
                            align={'flex-start'}
                            direction={'column'}
                            gap={1}
                            justify={'center'}
                            marginTop={8}
                          >
                            <Button color={'gray'} size={2} variant={'ghost'}>
                              <Button.Label>Edit</Button.Label>
                            </Button>
                            <Button color={'gray'} size={2} variant={'ghost'}>
                              Duplicate
                            </Button>
                            <Button color={'gray'} size={2} variant={'ghost'}>
                              Archive
                            </Button>
                            <Button
                              color={'ruby'}
                              size={2}
                              variant={'soft'}
                              style={{ justifyContent: 'space-between' }}
                            >
                              <Button.Label style={{ flex: 1, flexShrink: 1 }}>Delete</Button.Label>
                              <Button.Icon>
                                <Ionicons name={'trash-outline'} />
                              </Button.Icon>
                            </Button>
                          </Flex>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                  </Flex>
                </Card>

                {/* Basic Popover */}
                <Flex direction={'column'} gap={16}>
                  <Heading size={4}>Basic Popover</Heading>
                  <Popover.Root>
                    <Popover.Trigger>
                      <Button variant={'soft'}>Open Popover</Button>
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Overlay />
                      <Popover.Content sideOffset={5}>
                        <Popover.Title>Popover Title</Popover.Title>
                        <Popover.Description>
                          This is a basic popover with a title and description.
                        </Popover.Description>
                        <Popover.Close>
                          <IconButton accessibilityLabel={''} size={1} variant={'soft'}>
                            <LucideX size={14} />
                          </IconButton>
                        </Popover.Close>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </Flex>

                {/* Popover with different sides */}
                <Flex direction={'column'} gap={16}>
                  <Heading size={4}>Popover Positioning</Heading>

                  <Flex gap={12} wrap="wrap">
                    <Popover.Root>
                      <Popover.Trigger>
                        <Button variant={'soft'} color={'gray'}>
                          Top
                        </Button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Overlay />
                        <Popover.Content side={'top'} sideOffset={5}>
                          <Text>Popover on top side</Text>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>

                    <Popover.Root>
                      <Popover.Trigger>
                        <Button variant={'soft'} color={'gray'}>
                          Bottom
                        </Button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Overlay />
                        <Popover.Content side={'bottom'} sideOffset={5}>
                          <Text>Popover on bottom side</Text>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>

                    <Popover.Root>
                      <Popover.Trigger>
                        <Button variant={'soft'} color={'gray'}>
                          Left
                        </Button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Overlay />
                        <Popover.Content side={'left'} sideOffset={5}>
                          <Text>Popover on left side</Text>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>

                    <Popover.Root>
                      <Popover.Trigger>
                        <Button variant={'soft'} color={'gray'}>
                          Right
                        </Button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Overlay />
                        <Popover.Content side={'right'} sideOffset={5}>
                          <Text>Popover on right side</Text>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                  </Flex>
                </Flex>

                {/* Popover with align */}
                <Flex direction={'column'} gap={16}>
                  <Heading size={4}>Popover Alignment</Heading>
                  <Text color="gray" size={2}>
                    Align determines where the popover is positioned relative to the anchor.
                  </Text>

                  <Flex gap={12} wrap="wrap">
                    <Popover.Root>
                      <Popover.Trigger>
                        <Button variant={'soft'} color={'indigo'}>
                          Align Start
                        </Button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Overlay />
                        <Popover.Content side={'bottom'} align={'start'} sideOffset={5}>
                          <Text>Aligned to start</Text>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>

                    <Popover.Root>
                      <Popover.Trigger>
                        <Button variant={'soft'} color={'indigo'}>
                          Align Center
                        </Button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Overlay />
                        <Popover.Content side={'bottom'} align={'center'} sideOffset={5}>
                          <Text>Aligned to center</Text>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>

                    <Popover.Root>
                      <Popover.Trigger>
                        <Button variant={'soft'} color={'indigo'}>
                          Align End
                        </Button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Overlay />
                        <Popover.Content side={'bottom'} align={'end'} sideOffset={5}>
                          <Text>Aligned to end</Text>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                  </Flex>
                </Flex>

                {/* Popover with custom content */}
                <Flex direction={'column'} gap={16}>
                  <Heading size={4}>Popover with Actions</Heading>
                  <Popover.Root>
                    <Popover.Trigger>
                      <Button variant={'solid'}>Open Menu</Button>
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Overlay />
                      <Popover.Content sideOffset={5} style={{ width: 200 }}>
                        <Box marginBottom={2}>
                          <Text weight={'bold'} size={2}>
                            Actions
                          </Text>
                        </Box>
                        <Box marginBottom={2}>
                          <Text size={2} color="gray">
                            Edit your profile settings
                          </Text>
                        </Box>
                        <Flex gap={2} marginTop={3}>
                          <Popover.Close>
                            <Button size={1} variant={'soft'} style={{ flex: 1 }}>
                              Cancel
                            </Button>
                          </Popover.Close>
                          <Button size={1} variant={'solid'} color="blue" style={{ flex: 1 }}>
                            Confirm
                          </Button>
                        </Flex>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </Flex>

                {/* Controlled Popover */}
                <Flex direction={'column'} gap={16}>
                  <Heading size={4}>Controlled Popover</Heading>
                  <Text size={2} color="gray">
                    Controlled using state: {isOpen ? 'Open' : 'Closed'}
                  </Text>
                  <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
                    <Popover.Trigger>
                      <Button variant={'outline'}>{isOpen ? 'Close' : 'Open'} Popover</Button>
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Overlay />
                      <Popover.Content sideOffset={5}>
                        <Popover.Title>Controlled Popover</Popover.Title>
                        <Popover.Description>
                          This popover is controlled by React state.
                        </Popover.Description>
                        <Flex justify="flex-end" marginTop={3}>
                          <Popover.Close>
                            <Button size={1} variant={'soft'}>
                              Close
                            </Button>
                          </Popover.Close>
                        </Flex>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </Flex>

                {/* Popover as context menu style */}
                <Flex direction={'column'} gap={16}>
                  <Heading size={4}>Popover as Quick Menu</Heading>
                  <Box maxWidth={300}>
                    <Popover.Root>
                      <Popover.Trigger>
                        <Button variant={'surface'}>
                          <Button.Label>Press the edit icon to see quick actions</Button.Label>
                        </Button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Overlay />
                        <Popover.Content sideOffset={5} style={{ width: 180 }}>
                          <Flex direction="column" gap={2}>
                            <Box style={{ borderRadius: 4 }}>
                              <Text size={2}>Copy</Text>
                            </Box>
                            <Box style={{ borderRadius: 4 }}>
                              <Text size={2}>Paste</Text>
                            </Box>
                            <Box style={{ borderRadius: 4 }}>
                              <Text size={2}>Delete</Text>
                            </Box>
                          </Flex>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                  </Box>
                </Flex>
              </Flex>
            </View>
          </ScrollView>
        </PageBody>
      </PageContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
