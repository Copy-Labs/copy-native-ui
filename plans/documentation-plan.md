# Comprehensive Documentation Plan for Radix Themes Native

## Overview

This plan outlines a comprehensive documentation strategy using **Mintlify** for the `@radix-ui/themes-native` component library. The documentation will serve developers building React Native applications with Radix Themes components.

## Why Mintlify?

Mintlify is an excellent choice for this project because:

1. **Modern Developer Experience** - Beautiful, responsive UI optimized for technical documentation
2. **MDX Support** - Write interactive component examples with live code blocks
3. **AI-Powered Search** - Built-in intelligent search functionality
4. **API Reference Generation** - Automatic API docs from TypeScript types
5. **Versioning** - Support for multiple package versions
6. **Analytics** - Understand what users are searching for
7. **llms.txt Support** - Generate AI-ready documentation for LLMs (Cursor, Claude Code, Codex)
8. **Copy with AI Context** - The "copy markdown" feature with options for different AI tools
9. **Open Source Friendly** - Free for open source projects

---

## Documentation Structure

```
docs/
├── mint.json                    # Mintlify configuration
├── docs.json                    # Alternative config (if needed)
├── index.mdx                    # Landing page
├── llms.txt                     # AI-ready consolidated documentation
│
├── getting-started/
│   ├── introduction.mdx         # What is Radix Themes Native
│   ├── installation.mdx         # Installation guide
│   ├── quick-start.mdx          # Quick start tutorial
│   └── migration.mdx            # Migration from web Radix Themes
│
├── theming/
│   ├── overview.mdx             # Theming overview
│   ├── theme-provider.mdx       # ThemeProvider API
│   ├── colors.mdx               # Color system
│   ├── typography.mdx           # Typography system
│   ├── spacing.mdx              # Spacing scale
│   └── dark-mode.mdx            # Dark mode implementation
│
├── components/
│   ├── layout/
│   │   ├── box.mdx
│   │   ├── flex.mdx
│   │   ├── grid.mdx
│   │   ├── container.mdx
│   │   └── inset.mdx
│   │
│   ├── typography/
│   │   ├── text.mdx
│   │   ├── heading.mdx
│   │   ├── strong.mdx
│   │   ├── em.mdx
│   │   ├── code.mdx
│   │   ├── kbd.mdx
│   │   ├── blockquote.mdx
│   │   └── link.mdx
│   │
│   ├── forms/
│   │   ├── button.mdx
│   │   ├── icon-button.mdx
│   │   ├── text-field.mdx
│   │   ├── text-area.mdx
│   │   ├── checkbox.mdx
│   │   ├── checkbox-group.mdx
│   │   ├── checkbox-cards.mdx
│   │   ├── radio.mdx
│   │   ├── radio-group.mdx
│   │   ├── radio-cards.mdx
│   │   ├── switch.mdx
│   │   ├── select.mdx
│   │   └── slider.mdx
│   │
│   ├── data-display/
│   │   ├── avatar.mdx
│   │   ├── badge.mdx
│   │   ├── callout.mdx
│   │   ├── card.mdx
│   │   ├── data-list.mdx
│   │   ├── fancy-list.mdx
│   │   ├── progress.mdx
│   │   ├── spinner.mdx
│   │   └── table.mdx
│   │
│   ├── navigation/
│   │   ├── tabs.mdx
│   │   ├── tab-nav.mdx
│   │   └── segmented-control.mdx
│   │
│   ├── overlays/
│   │   ├── dialog.mdx
│   │   ├── alert-dialog.mdx
│   │   ├── popover.mdx
│   │   ├── tooltip.mdx
│   │   ├── dropdown-menu.mdx
│   │   ├── context-menu.mdx
│   │   ├── toast.mdx
│   │   └── portal.mdx
│   │
│   ├── disclosure/
│   │   └── accordion.mdx
│   │
│   └── utilities/
│       ├── aspect-ratio.mdx
│       ├── scroll-area.mdx
│       ├── visually-hidden.mdx
│       └── slot.mdx
│
├── api-reference/
│   ├── theme-provider.mdx       # ThemeProvider props
│   ├── hooks.mdx                # useTheme, useThemeMode, etc.
│   ├── color-helpers.mdx        # getVariantColors, etc.
│   └── primitives.mdx           # Base React Native primitives
│
├── guides/
│   ├── styling.mdx              # Styling guide
│   ├── accessibility.mdx        # Accessibility best practices
│   ├── forms.mdx                # Building forms
│   ├── compound-components.mdx  # Working with compound components
│   └── performance.mdx          # Performance optimization
│
└── examples/
    ├── login-form.mdx           # Login form example
    ├── settings-page.mdx        # Settings page example
    ├── profile-card.mdx         # Profile card example
    └── dashboard.mdx            # Dashboard example
```

---

## Component Documentation Template

Each component documentation file should follow this structure:

```mdx
---
title: Button
description: Interactive button component with multiple variants for React Native
---

import { ButtonDemo } from './components/ButtonDemo';

# Button

<Description>
  Interactive button component with multiple variants including classic, solid, soft, outline, and ghost styles.
</Description>

## Overview

Buttons are used to trigger actions. They come in multiple variants to suit different visual hierarchies and use cases.

## Installation

<Install />

```bash
npm install @radix-ui/themes-native
```

## Basic Usage

```tsx
import { Button } from '@radix-ui/themes-native';

export default function Example() {
  return (
    <Button onPress={() => console.log('Pressed!')}>
      Click me
    </Button>
  );
}
```

## Demo

<ButtonDemo />

## Variants

### Classic (Default)

```tsx
<Button variant="classic">Classic</Button>
```

### Solid

```tsx
<Button variant="solid">Solid</Button>
```

### Soft

```tsx
<Button variant="soft">Soft</Button>
```

### Outline

```tsx
<Button variant="outline">Outline</Button>
```

### Ghost

```tsx
<Button variant="ghost">Ghost</Button>
```

## Sizes

```tsx
<Button size={1}>Small</Button>
<Button size={2}>Medium</Button>
<Button size={3}>Large</Button>
```

## States

### Disabled

```tsx
<Button disabled>Disabled</Button>
```

### Loading

```tsx
<Button loading>Loading</Button>
```

## High Contrast

```tsx
<Button highContrast>High Contrast</Button>
```

## API Reference

### Props

<PropTable>
  <Prop name="variant" type="'classic' | 'solid' | 'soft' | 'outline' | 'ghost'" default="'classic'">
    Visual style variant
  </Prop>
  <Prop name="size" type="1 | 2 | 3" default="2">
    Size of the button
  </Prop>
  <Prop name="disabled" type="boolean" default="false">
    Whether the button is disabled
  </Prop>
  <Prop name="loading" type="boolean" default="false">
    Shows loading spinner
  </Prop>
  <Prop name="highContrast" type="boolean" default="false">
    Uses high contrast colors
  </Prop>
  <Prop name="onPress" type="(event: GestureResponderEvent) => void">
    Called when button is pressed
  </Prop>
  <Prop name="color" type="string">
    Accent color name
  </Prop>
  <Prop name="width" type="number | string">
    Width of the button
  </Prop>
</PropTable>

## Accessibility

- Uses native `accessibilityRole="button"`
- Supports `accessibilityLabel` prop
- Disabled state is communicated to screen readers
- High contrast mode improves visibility

## See Also

- [IconButton](/components/forms/icon-button)
- [Theming](/theming/overview)
- [Colors](/theming/colors)
```

---

## Mintlify Configuration (mint.json)

```json
{
  "name": "Radix Themes Native",
  "logo": {
    "light": "/logo/light.svg",
    "dark": "/logo/dark.svg"
  },
  "favicon": "/favicon.png",
  "colors": {
    "primary": "#6366f1",
    "light": "#818cf8",
    "dark": "#4f46e5"
  },
  "topbarLinks": [
    {
      "name": "GitHub",
      "url": "https://github.com/Copy-Labs/radix-ui-native-kilo"
    }
  ],
  "topbarCtaButton": {
    "name": "npm",
    "url": "https://www.npmjs.com/package/@radix-ui/themes-native"
  },
  "tabs": [
    {
      "name": "Getting Started",
      "url": "getting-started"
    },
    {
      "name": "Components",
      "url": "components"
    },
    {
      "name": "API Reference",
      "url": "api-reference"
    },
    {
      "name": "Guides",
      "url": "guides"
    }
  ],
  "anchors": [
    {
      "name": "GitHub",
      "icon": "github",
      "url": "https://github.com/Copy-Labs/radix-ui-native-kilo"
    },
    {
      "name": "Discord",
      "icon": "discord",
      "url": "https://discord.gg/..."
    }
  ],
  "navigation": [
    {
      "group": "Introduction",
      "pages": [
        "getting-started/introduction",
        "getting-started/installation",
        "getting-started/quick-start",
        "getting-started/migration"
      ]
    },
    {
      "group": "Theming",
      "pages": [
        "theming/overview",
        "theming/theme-provider",
        "theming/colors",
        "theming/typography",
        "theming/spacing",
        "theming/dark-mode"
      ]
    },
    {
      "group": "Layout",
      "pages": [
        "components/layout/box",
        "components/layout/flex",
        "components/layout/grid",
        "components/layout/container",
        "components/layout/inset"
      ]
    },
    {
      "group": "Typography",
      "pages": [
        "components/typography/text",
        "components/typography/heading",
        "components/typography/strong",
        "components/typography/em",
        "components/typography/code",
        "components/typography/kbd",
        "components/typography/blockquote",
        "components/typography/link"
      ]
    },
    {
      "group": "Forms",
      "pages": [
        "components/forms/button",
        "components/forms/icon-button",
        "components/forms/text-field",
        "components/forms/text-area",
        "components/forms/checkbox",
        "components/forms/checkbox-group",
        "components/forms/checkbox-cards",
        "components/forms/radio",
        "components/forms/radio-group",
        "components/forms/radio-cards",
        "components/forms/switch",
        "components/forms/select",
        "components/forms/slider"
      ]
    },
    {
      "group": "Data Display",
      "pages": [
        "components/data-display/avatar",
        "components/data-display/badge",
        "components/data-display/callout",
        "components/data-display/card",
        "components/data-display/data-list",
        "components/data-display/fancy-list",
        "components/data-display/progress",
        "components/data-display/spinner",
        "components/data-display/table"
      ]
    },
    {
      "group": "Navigation",
      "pages": [
        "components/navigation/tabs",
        "components/navigation/tab-nav",
        "components/navigation/segmented-control"
      ]
    },
    {
      "group": "Overlays",
      "pages": [
        "components/overlays/dialog",
        "components/overlays/alert-dialog",
        "components/overlays/popover",
        "components/overlays/tooltip",
        "components/overlays/dropdown-menu",
        "components/overlays/context-menu",
        "components/overlays/toast",
        "components/overlays/portal"
      ]
    },
    {
      "group": "Disclosure",
      "pages": [
        "components/disclosure/accordion"
      ]
    },
    {
      "group": "Utilities",
      "pages": [
        "components/utilities/aspect-ratio",
        "components/utilities/scroll-area",
        "components/utilities/visually-hidden",
        "components/utilities/slot"
      ]
    },
    {
      "group": "API Reference",
      "pages": [
        "api-reference/theme-provider",
        "api-reference/hooks",
        "api-reference/color-helpers",
        "api-reference/primitives"
      ]
    },
    {
      "group": "Guides",
      "pages": [
        "guides/styling",
        "guides/accessibility",
        "guides/forms",
        "guides/compound-components",
        "guides/performance"
      ]
    },
    {
      "group": "Examples",
      "pages": [
        "examples/login-form",
        "examples/settings-page",
        "examples/profile-card",
        "examples/dashboard"
      ]
    }
  ],
  "footerSocials": {
    "github": "https://github.com/Copy-Labs/radix-ui-native-kilo"
  },
  "analytics": {
    "ga4": {
      "measurementId": "G-XXXXXXXXXX"
    }
  }
}
```

---

## AI-Ready Documentation (llms.txt)

Mintlify supports generating `llms.txt` files that provide AI-ready documentation. This file will be placed at the root of the documentation site and will contain:

1. **Consolidated Component API** - All component props in a structured format
2. **Usage Examples** - Common patterns and examples
3. **Theming Reference** - Color scales, spacing, typography values
4. **Quick Reference** - Frequently needed information

### llms.txt Structure

```markdown
# Radix Themes Native Documentation

> A React Native port of Radix Themes - An open-source component library optimized for fast development, easy maintenance, and accessibility.

## Installation

npm install @radix-ui/themes-native

## Quick Start

```tsx
import { ThemeProvider, Button, Text, Flex, Card } from '@radix-ui/themes-native';

export default function App() {
  return (
    <ThemeProvider>
      <Card>
        <Flex direction="column" gap={3}>
          <Heading size={4}>Welcome</Heading>
          <Text>Build beautiful mobile apps with Radix Themes Native.</Text>
          <Button onPress={() => console.log('Pressed!')}>Get Started</Button>
        </Flex>
      </Card>
    </ThemeProvider>
  );
}
```

## Components

### Button

Interactive button with variants: classic, solid, soft, outline, ghost

Props:
- variant: 'classic' | 'solid' | 'soft' | 'outline' | 'ghost' (default: 'classic')
- size: 1 | 2 | 3 (default: 2)
- disabled: boolean
- loading: boolean
- highContrast: boolean
- onPress: (event: GestureResponderEvent) => void
- color: string (accent color name)
- width: number | string

[... continues with all components ...]

## Theming

### ThemeProvider Props
- mode: 'light' | 'dark' | undefined
- forcedMode: 'light' | 'dark'
- accentColor: string
- grayColor: string
- radius: 'none' | 'small' | 'medium' | 'large' | 'full'
- scaling: number

### Available Accent Colors
amber, blue, bronze, brown, crimson, cyan, gold, grass, green, indigo, iris, jade, lime, mint, orange, pink, plum, purple, red, ruby, sky, teal, tomato, violet, yellow

### Gray Scale Variants
gray, mauve, olive, sage, sand, slate

[... continues with theming reference ...]
```

---

## Implementation Steps

### Phase 1: Setup

1. Create `docs/` directory in project root
2. Initialize Mintlify configuration (`mint.json`)
3. Set up MDX components for interactive demos
4. Configure deployment (Vercel, Netlify, or Mintlify hosting)

### Phase 2: Core Documentation

1. Create Getting Started section
   - Introduction
   - Installation
   - Quick Start
   - Migration Guide

2. Create Theming section
   - Theme Provider
   - Colors
   - Typography
   - Spacing
   - Dark Mode

### Phase 3: Component Documentation

1. Create documentation for each component following the template
2. Add interactive demos using MDX
3. Generate API reference tables from TypeScript types
4. Add accessibility notes for each component

### Phase 4: Advanced Content

1. Create Guides section
2. Create Examples section
3. Generate llms.txt for AI assistants
4. Add search analytics

### Phase 5: Polish

1. Add logo and branding
2. Configure analytics
3. Set up versioning (if needed)
4. Add contribution guidelines

---

## Interactive Demo Setup

For interactive component demos, we'll use a combination of:

1. **Code Hike** - For interactive code examples with syntax highlighting
2. **React Native Web** - To render components in the browser
3. **Expo Snack** integration - For editable examples

### Example Demo Component

```tsx
// docs/components/ButtonDemo.tsx
import React, { useState } from 'react';
import { Button, Flex, Text } from '@radix-ui/themes-native';

export function ButtonDemo() {
  const [count, setCount] = useState(0);

  return (
    <Flex direction="column" gap={3}>
      <Flex direction="row" gap={2}>
        <Button variant="classic" onPress={() => setCount(c => c + 1)}>
          Classic
        </Button>
        <Button variant="solid" onPress={() => setCount(c => c + 1)}>
          Solid
        </Button>
        <Button variant="soft" onPress={() => setCount(c => c + 1)}>
          Soft
        </Button>
        <Button variant="outline" onPress={() => setCount(c => c + 1)}>
          Outline
        </Button>
        <Button variant="ghost" onPress={() => setCount(c => c + 1)}>
          Ghost
        </Button>
      </Flex>
      <Text>Pressed {count} times</Text>
    </Flex>
  );
}
```

---

## Copy with AI Context Feature

Mintlify supports a "Copy" button on code blocks that can be configured to provide context for different AI tools. This is achieved through:

1. **Custom Copy Formats** - Configure different copy formats for Cursor, Claude Code, Codex, etc.
2. **Context Injection** - Include relevant imports and context when copying
3. **File Path Hints** - Add file path suggestions for where to paste the code

### Configuration for AI Copy

```json
{
  "codeBlock": {
    "copyFormats": [
      {
        "name": "Cursor",
        "format": "// File: {{suggestedPath}}\n// Component: {{componentName}}\n{{code}}"
      },
      {
        "name": "Claude Code",
        "format": "```{{language}}\n// {{componentName}} - {{description}}\n{{code}}\n```"
      },
      {
        "name": "Codex",
        "format": "{{code}}"
      }
    ]
  }
}
```

---

## Estimated File Count

| Section | Files |
|---------|-------|
| Getting Started | 4 |
| Theming | 6 |
| Layout Components | 5 |
| Typography Components | 8 |
| Form Components | 13 |
| Data Display Components | 9 |
| Navigation Components | 3 |
| Overlay Components | 8 |
| Disclosure Components | 1 |
| Utility Components | 4 |
| API Reference | 4 |
| Guides | 5 |
| Examples | 4 |
| Config Files | 3 |
| **Total** | **~77 files** |

---

## Next Steps

1. **Approve this plan** - Review and confirm the documentation structure
2. **Set up Mintlify** - Create the docs directory and configuration
3. **Create content** - Start writing documentation files
4. **Build interactive demos** - Set up React Native Web for demos
5. **Deploy** - Configure hosting and domain

---

## Questions to Consider

1. Do you want to host on Mintlify's platform or self-host?
2. Do you have a logo/branding ready for the documentation?
3. Would you like to integrate with existing Radix Themes documentation?
4. Do you need versioning support for multiple package versions?
5. Would you like to add a contribution section with guidelines?
