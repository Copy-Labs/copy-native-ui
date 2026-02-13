import { Button, Dialog, Flex, ThemeProvider } from '@radix-ui/themes-native';
import { ScrollView, View } from 'react-native';
import { useState } from 'react';

export default function DialogDemo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ThemeProvider
      mode={'light'}
      themeOptions={{ accentColor: 'indigo', radius: 'large', scaling: 1 }}
    >
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Flex direction={'column'} gap={32} padding={12}>
            <Dialog.Root
              open={isOpen}
              onOpenChange={(open: boolean) => setIsOpen(open)}
            >
              <Dialog.Trigger>
                <Button variant={'soft'}>Show Dialog</Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay />
                <Dialog.Content size={3}>
                  <Dialog.Title size={6}>Action Dialog</Dialog.Title>
                  <Dialog.Description size={3}>
                    Are you sure? This application will no longer be accessible and any existing
                    sessions will be expired.
                  </Dialog.Description>
                  <Flex gap={12} justify="flex-end">
                    {/*<Dialog.Close>Cancel</Dialog.Close>*/}
                    {/*<Dialog.Action variant={'solid'}>Confirm</Dialog.Action>*/}
                  </Flex>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </Flex>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}
