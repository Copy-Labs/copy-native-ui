import {Ionicons} from "@expo/vector-icons";
import {
  Button,
  Flex,
  IconButton,
  Text,
  useTheme,
  useThemeActions,
  useThemeMode,
  useToast,
} from '@radix-ui/themes-native';

export function ThemeToggle() {
  // const { isDarkColorScheme, setColorScheme } = useColorScheme();
  const toast = useToast()

  const theme = useTheme()
  const mode = useThemeMode();
  const { toggleMode } = useThemeActions();

  async function toggleThemeMode() {
    toggleMode();
    toast.success({title: 'Theme Change', description: 'Theme toggled successfully', position: 'top'});
  }

  return (
    <IconButton
      accessibilityLabel={'toggle theme'}
      color={'indigo'}
      radius={'large'}
      onPress={toggleThemeMode}
    >
      {mode === 'dark' ? (
        <Ionicons name={'moon'} className='text-foreground' size={24} strokeWidth={1.25} />
      ) : (
        <Ionicons name={'sunny'} className='text-foreground' size={24} strokeWidth={1.25} />
      )}
    </IconButton>
  );
}
