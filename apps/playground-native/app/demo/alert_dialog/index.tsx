import {
  AlertDialog,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  ThemeProvider,
} from '@radix-ui/themes-native';
import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';

export default function AlertDialogDemo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ThemeProvider
      mode={'light'}
      themeOptions={{ accentColor: 'indigo', radius: 'large', scaling: 1 }}
    >
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Flex direction={'column'} gap={32} padding={12}>
            <Box>
              <Heading size={6}>Alert Dialog</Heading>
              <Text color={'gray'} size={4}>
                An alert dialog interrupts the user with important content and expects a response.
              </Text>
            </Box>

            <AlertDialog.Root open={isOpen} onOpenChange={(open: boolean) => setIsOpen(open)}>
              <AlertDialog.Trigger>
                <Button variant={'soft'}>Show Alert Dialog</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay />
                <AlertDialog.Content size={3}>
                  <AlertDialog.Title size={6}>Confirm Action</AlertDialog.Title>
                  <AlertDialog.Description size={3}>
                    Are you sure? This application will no longer be accessible and any existing
                    sessions will be expired.
                  </AlertDialog.Description>
                  <Flex gap={12} justify="flex-end">
                    <AlertDialog.Cancel color={'gray'} variant={'surface'}>
                      Cancel
                    </AlertDialog.Cancel>
                    <AlertDialog.Action variant={'solid'}>Confirm</AlertDialog.Action>
                  </Flex>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          </Flex>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}
