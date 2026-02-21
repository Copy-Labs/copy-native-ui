> ## Documentation Index
> Fetch the complete documentation index at: https://www.mintlify.com/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Navigation

> Design information architecture that aligns with user needs.

The [navigation](/organize/settings#param-navigation) property in `docs.json` controls the structure and information hierarchy of your documentation.

With proper navigation configuration, you can organize your content so that users can find exactly what they're looking for.

Choose one primary organizational pattern at the root level of your navigation. Once you've chosen your primary pattern, you can nest other navigation elements within it.

## Pages

Pages are the most fundamental navigation component. Each page is an MDX file in your documentation repository.

<img className="block dark:hidden pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-light.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=d9531be8cc28553992a6513ff09fc6ed" alt="Decorative graphic of pages." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/pages-light.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-light.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=2db8f5216fadbc2529e0ec8a743265fd 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-light.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=09dc67755d46ceb3ff911a45d95058c4 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-light.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=5749283323eb0c3208abe91a5a14e96c 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-light.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=e73de07a1cbb558c6ff95bf97b6bc207 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-light.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=8ad884255a152beafea0322628bac7db 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-light.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=bf21f5b898cb841789f22af13036bed7 2500w" />

<img className="hidden dark:block pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-dark.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=ec51691241465e13d49afafcd30748f8" alt="Decorative graphic of pages." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/pages-dark.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-dark.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=f8dff2891983f25a79a40bc3f63de2f9 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-dark.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=1f774800d8d7d836752108d9a926cf61 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-dark.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=432a25d6688814580c3394da4d2b6bec 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-dark.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=846592b3661ae28ea096e1dc04adba5c 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-dark.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=99dadd626309bc4e84c980683b695fc6 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/pages-dark.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=f0c4200e87a8a6d9e33909e069f87709 2500w" />

In the `navigation` object, `pages` is an array where each entry must reference the path to a [page file](/organize/pages).

```json  theme={null}
{
  "navigation": {
    "pages": [
      "settings",
      "pages",
      "navigation",
      "themes",
      "custom-domain"
    ]
  }
}
```

## Groups

Use groups to organize your sidebar navigation into sections. You can nest groups within each other, label them with tags, and style them with icons.

<img className="block dark:hidden pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-light.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=393243b71cd60407c0ea883359592699" alt="Decorative graphic of groups." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/groups-light.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-light.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=74dbceb9ce6466142c566504f13308ea 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-light.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=a497f8d624e78db7163b87bcdcd725ed 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-light.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=486ed936edbcd3f3c82fd41112b29795 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-light.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=a564870b1080b14bce2956e5fb21bfb7 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-light.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=aa090b3dcc5e7615be9403f5a96176df 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-light.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=3f36a5e50324061e25c1a4b5623f1e5d 2500w" />

<img className="hidden dark:block pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-dark.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=834d116249fcd1484808f1a534ea2892" alt="Decorative graphic of groups." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/groups-dark.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-dark.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=c500fba607a47351c01156cab3f33588 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-dark.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=f18b00a1000374cf1f081f711c12bddf 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-dark.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=2153226cd1a1f161c0acdeb9cc5b9a9b 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-dark.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=785a70ef27c7445fc32cef464a9470a3 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-dark.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=54ce58ea6498d8ccdcdda831244a7174 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/groups-dark.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=4cb4198b9ee2a646880d84085a79e5f0 2500w" />

In the `navigation` object, `groups` is an array where each entry is an object that requires a `group` field and a `pages` field. The `icon`, `tag`, `root`, and `expanded` fields are optional.

```json  theme={null}
{
  "navigation": {
    "groups": [
      {
        "group": "Getting started",
        "icon": "play",
        "pages": [
          "quickstart",
          {
            "group": "Editing",
            "expanded": false,
            "icon": "pencil",
            "pages": [
              "installation",
              "editor"
            ]
          }
        ]
      },
      {
        "group": "Writing content",
        "icon": "notebook-text",
        "tag": "NEW",
        "pages": [
          "writing-content/page",
          "writing-content/text"
        ]
      }
    ]
  }
}
```

### Root page

Use the `root` property to designate a main page for a group. When a group has a root page, clicking the group title in the sidebar navigation opens the root page. Root pages work for top-level and nested groups.

```json Example group with a root page theme={null}
{
  "navigation": {
    "groups": [
      {
        "group": "API pages",
        "root": "api-overview",
        "pages": [
          "api-reference/get",
          "api-reference/post",
          "api-reference/delete"
        ]
      }
    ]
  }
}
```

### Default expanded state

Use the `expanded` property to control the default state of a nested group in the navigation sidebar.

* `expanded: true`: Group is expanded by default.
* `expanded: false` or omitted: Group is collapsed by default.

<Note>
  The `expanded` property only affects nested groups--groups within groups. Top-level groups are always expanded and cannot be collapsed.
</Note>

```json  theme={null}
{
  "group": "Getting started",
  "pages": [
    "quickstart",
    {
      "group": "Advanced",
      "expanded": false,
      "pages": ["installation", "configuration"]
    }
  ]
}
```

## Tabs

Tabs create distinct sections of your documentation with separate URL paths. Tabs create a horizontal navigation bar at the top of your documentation that lets users switch between sections.

<img className="block dark:hidden pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-light.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=aeec785d0771a3a7a87d941e318bf8e7" alt="Decorative graphic of a tab navigation." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/tabs-light.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-light.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=44db3a117e4dadba2812ed026293ec4c 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-light.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=95d524a76d02b4dd6e4b9c2e5157910a 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-light.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=a5e0660b664cabb23a4188a1b2099279 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-light.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=5d043ab331323f717bf74f8ac50bc837 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-light.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=dc1e6dc28cd92f5daf912a41cad7efe0 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-light.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=2571ac691b6b25902b7e4805f2b1f2ad 2500w" />

<img className="hidden dark:block pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-dark.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=20637c7abbe07ee7b2c41c4df26d2ffd" alt="Decorative graphic of a tab navigation." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/tabs-dark.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-dark.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=65ff357d8274ee8832b87ad372277d22 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-dark.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=60521760176a9858cdda38e996527977 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-dark.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=3d92566559ae7a0242f70c15b07b3b4e 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-dark.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=e920865af94c8b1818fe99e8e5479373 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-dark.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=86077985af94418f2ed9d00ed0bf5c5e 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/tabs-dark.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=49df42625a3ed21b24af7c0a1669b020 2500w" />

In the `navigation` object, `tabs` is an array where each entry is an object that requires a `tab` field and can contain other navigation fields such as groups, pages, icons, or links to external pages.

```json  theme={null}
{
  "navigation": {
    "tabs": [
      {
        "tab": "API reference",
        "icon": "square-terminal",
        "pages": [
          "api-reference/get",
          "api-reference/post",
          "api-reference/delete"
        ]
      },
      {
        "tab": "SDKs",
        "icon": "code",
        "pages": [
          "sdk/fetch",
          "sdk/create",
          "sdk/delete"
        ]
      },
      {
        "tab": "Blog",
        "icon": "newspaper",
        "href": "https://external-link.com/blog"
      }
    ]
  }
}
```

### Menus

Menus add dropdown navigation items to a tab. Use menus to help users go directly to specific pages within a tab.

In the `navigation` object, `menu` is an array where each entry is an object that requires an `item` field and can contain other navigation fields such as groups, pages, icons, or links to external pages.

Menu items can only contain groups, pages, and external links.

```json  theme={null}
{
  "navigation": {
    "tabs": [
      {
        "tab": "Developer tools",
        "icon": "square-terminal",
        "menu": [
          {
            "item": "API reference",
            "icon": "rocket",
            "groups": [
              {
                "group": "Core endpoints",
                "icon": "square-terminal",
                "pages": [
                  "api-reference/get",
                  "api-reference/post",
                  "api-reference/delete"
                ]
              }
            ]
          },
          {
            "item": "SDKs",
            "icon": "code",
            "description": "SDKs are used to interact with the API.",
            "pages": [
              "sdk/fetch",
              "sdk/create",
              "sdk/delete"
            ]
          }
        ]
      }
    ]
  }
}
```

## Anchors

Anchors add persistent navigation items to the top of your sidebar. Use anchors to section your content, provide quick access to external resources, or create prominent calls to action.

<img className="block dark:hidden pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-light.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=e66255f62fc5d17ca135f21f84ed9325" alt="Decorative graphic of an anchor navigation." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/anchors-light.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-light.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=b90cb42b0ef8075f692d641b220088ed 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-light.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=f077f98104937faf380d95b78d7ab8d8 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-light.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=96d89000a37a0d340f83a4c86148b7ac 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-light.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=810ae36f9529585b203c24017b6e7c62 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-light.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=c39bf3a59a82449b6edc0a42861fa57f 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-light.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=ff075ec9fa56e20fc0ce20ab33363ba2 2500w" />

<img className="hidden dark:block pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-dark.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=734e33b5fd52071d6f4019b273f2a0e8" alt="Decorative graphic of an anchor navigation." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/anchors-dark.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-dark.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=804138b1020a62c366c8c9046a7a177f 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-dark.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=9f1af6862f67c1cf5f574ffd5965b2e1 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-dark.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=3923b75a837e054f951db502674a6405 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-dark.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=b7ecfdff230eb3bcaa6d9b533ccbf7eb 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-dark.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=49605385448f433f5574fb14465aceed 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/anchors-dark.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=099c378f13564d1546543d2ff480d64f 2500w" />

In the `navigation` object, `anchors` is an array where each entry is an object that requires an `anchor` field and can contain other navigation fields such as groups, pages, icons, or links to external pages.

```json  theme={null}
{
  "navigation": {
    "anchors": [
      {
        "anchor": "Documentation",
        "icon": "book-open",
        "pages": [
          "quickstart",
          "development",
          "navigation"
        ]
      },
      {
        "anchor": "API reference",
        "icon": "square-terminal",
        "pages": [
          "api-reference/get",
          "api-reference/post",
          "api-reference/delete"
        ]
      },
      {
        "anchor": "Blog",
        "href": "https://external-link.com/blog"
      }
    ]
  }
}
```

### Global anchors

Use global anchors for links that should appear on all pages, regardless of which section of your navigation the user is viewing. Global anchors are particularly useful for linking to resources outside your documentation (such as a blog, community forum, or support portal) or for providing consistent access to important internal pages (such as a changelog or status page).

Global anchors support both external URLs and relative paths to pages within your documentation.

```json  theme={null}
{
  "navigation": {
    "global":  {
      "anchors": [
        {
          "anchor": "Changelog",
          "icon": "list",
          "href": "/changelog"
        },
        {
          "anchor": "Blog",
          "icon": "pencil",
          "href": "https://mintlify.com/blog"
        }
      ]
    },
    "tabs": /*...*/
  }
}
```

## Dropdowns

Dropdowns are an expandable menu at the top of your sidebar navigation. Each item in a dropdown directs to a section of your documentation.

<img className="block dark:hidden pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-light.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=f04faa13e4a15c6866b8ceee98362018" alt="Decorative graphic of a dropdown navigation." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/dropdowns-light.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-light.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=4f76a3334a021376fa3703230756af7f 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-light.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=46d76650848da47b6894b38d2ee09d67 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-light.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=62f1fa1374af947e513865fb759cce18 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-light.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=266e5e1d0f27c3f97609bc032e88c5f6 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-light.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=e952ce2feffff6b8df559c071d82797b 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-light.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=aeba010d1750c1fa480dc32c2e797fa1 2500w" />

<img className="hidden dark:block pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-dark.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=4ee16248cae08fee00fe98952b599041" alt="Decorative graphic of a dropdown navigation." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/dropdowns-dark.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-dark.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=beeffd3bc490ceaaf9a237720af031c3 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-dark.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=9c4af73b3edc62f679088374b3723e67 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-dark.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=ba5f681e6c738465482317465f784c83 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-dark.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=18631bc961347d5b7df58ccc96ef395b 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-dark.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=2db34a0c9628cfa8078b7e7783bae65e 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/dropdowns-dark.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=599243e7328fc167f6cb3a30a5d89dca 2500w" />

In the `navigation` object, `dropdowns` is an array where each entry is an object that requires a `dropdown` field and can contain other navigation fields such as groups, pages, icons, or links to external pages.

```json  theme={null}
{
  "navigation": {
    "dropdowns": [
      {
        "dropdown": "Documentation",
        "icon": "book-open",
        "pages": [
          "quickstart",
          "development",
          "navigation"
        ]
      },
      {
        "dropdown": "API reference",
        "icon": "square-terminal",
        "pages": [
          "api-reference/get",
          "api-reference/post",
          "api-reference/delete"
        ]
      },
      {
        "dropdown": "Blog",
        "href": "https://external-link.com/blog"
      }
    ]
  }
}
```

## Products

<img className="block dark:hidden pointer-events-none" src="https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-light.png?fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=ab051b15c6e533eb2d723fed8f400704" alt="Decorative graphic of a product switcher." data-og-width="2368" width="2368" data-og-height="640" height="640" data-path="images/navigation/product-switcher-light.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-light.png?w=280&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=ab0cab024ea2ba147c709581fe05593e 280w, https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-light.png?w=560&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=2f99b0edb5713eb3ce9e9810613b918d 560w, https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-light.png?w=840&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=a9de96b748368e9c2a651d4767dca8de 840w, https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-light.png?w=1100&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=d0e118dc2a52723c807a9f25e4bca7fa 1100w, https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-light.png?w=1650&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=4a246f9af58fa9872aa9d9ecd5f814c9 1650w, https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-light.png?w=2500&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=c260adc6ec6a1cb96c4f34918f954247 2500w" />

<img className="hidden dark:block pointer-events-none" src="https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-dark.png?fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=4827f6913945eeadb2c54362ee0f748d" alt="Decorative graphic of a product switcher." data-og-width="2368" width="2368" data-og-height="640" height="640" data-path="images/navigation/product-switcher-dark.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-dark.png?w=280&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=1edb6aab64d778cc2d10b6a1c72b12e3 280w, https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-dark.png?w=560&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=1c874eba389a7ad3ef7634fee0ded793 560w, https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-dark.png?w=840&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=2c9437698f48abc836011225f11eb6e8 840w, https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-dark.png?w=1100&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=b702859f95c5cf07af8a4c8bf7e9005f 1100w, https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-dark.png?w=1650&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=99dc0116c85aeaf30cca5857e6fa8d21 1650w, https://mintcdn.com/mintlify/uTIQZECUoznwRp7Y/images/navigation/product-switcher-dark.png?w=2500&fit=max&auto=format&n=uTIQZECUoznwRp7Y&q=85&s=7da59a7b3a1e4c24f27a23eba89728af 2500w" />

Products create a dedicated navigation division for organizing product-specific documentation. Use products to separate different offerings, services, or major feature sets within your documentation.

In the `navigation` object, `products` is an array where each entry is an object that requires a `product` field and can contain other navigation fields such as groups, pages, icons, or links to external pages.

```json  theme={null}
{
  "navigation": {
    "products": [
      {
        "product": "Core API",
        "description": "Core API description",    
        "icon": "api",
        "groups": [
          {
            "group": "Getting started",
            "pages": [
              "core-api/quickstart",
              "core-api/authentication"
            ]
          },
          {
            "group": "Endpoints",
            "pages": [
              "core-api/users",
              "core-api/orders"
            ]
          }
        ]
      },
      {
        "product": "Analytics Platform",
        "description": "Analytics Platform description",
        "icon": "chart-bar",
        "pages": [
          "analytics/overview",
          "analytics/dashboard",
          "analytics/reports"
        ]
      },
      {
        "product": "Mobile SDK",
        "description": "Mobile SDK description",
        "icon": "smartphone",
        "href": "https://mobile-sdk-docs.example.com"
      }
    ]
  }
}
```

## OpenAPI

Integrate OpenAPI specifications directly into your navigation structure to automatically generate API documentation. Create dedicated API sections or place endpoint pages within other navigation components.

Set a default OpenAPI specification at any level of your navigation hierarchy. Child elements inherit the specification unless they define their own.

<Note>
  When you add the `openapi` property to a navigation element (such as an anchor, tab, or group) without specifying any pages, Mintlify automatically generates pages for **all endpoints** defined in your OpenAPI specification.

To control which endpoints appear, explicitly list the desired endpoints in a `pages` array.
</Note>

For more information about referencing OpenAPI endpoints in your docs, see the [OpenAPI setup](/api-playground/openapi-setup).

```json  theme={null}
{
  "navigation": {
    "groups": [
      {
        "group": "API reference",
        "openapi": "/path/to/openapi-v1.json",
        "pages": [
          "overview",
          "authentication",
          "GET /users",
          "POST /users",
          {
            "group": "Products",
            "openapi": "/path/to/openapi-v2.json",
            "pages": [
              "GET /products",
              "POST /products"
            ]
          }
        ]
      }
    ]
  }
}
```

## Versions

Partition your navigation into different versions. Versions are selectable from a dropdown menu.

<img className="block dark:hidden pointer-events-none" src="https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-light.png?fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=85e9cca71a814be044a285028cf9a2a1" alt="Decorative graphic of a version switcher." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/versions-light.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-light.png?w=280&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=ac805634940d94b93cc01a83a3415dd2 280w, https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-light.png?w=560&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=13947eced5db93445dde66307c3d3e16 560w, https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-light.png?w=840&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=21f433086887df65435159f7670f866b 840w, https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-light.png?w=1100&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=f8790919d989067244f4d665b336f25c 1100w, https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-light.png?w=1650&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=1594a9a194f551f2f4405c03081128e4 1650w, https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-light.png?w=2500&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=e68f97860eff952ff6ae1df1bf8f6edc 2500w" />

<img className="hidden dark:block pointer-events-none" src="https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-dark.png?fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=fdb637aea218b4035afdaca14dae7d38" alt="Decorative graphic of a version switcher." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/versions-dark.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-dark.png?w=280&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=e356cb4cda5308acb74d38dcbbae20b3 280w, https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-dark.png?w=560&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=cbcd2c50c462bd4cb4a5d1317bdbabeb 560w, https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-dark.png?w=840&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=2dcd524d9a5fd747e2e116762f39aab7 840w, https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-dark.png?w=1100&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=b9c98a5dd0ba5b89a3949cc661b5b7e1 1100w, https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-dark.png?w=1650&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=0fa61ac6d2bfba325311cf4b74d0b2e8 1650w, https://mintcdn.com/mintlify/f7fo9pnTEtzBD70_/images/navigation/versions-dark.png?w=2500&fit=max&auto=format&n=f7fo9pnTEtzBD70_&q=85&s=5bc24be7ca5c34fe22bf06cf2b731bfd 2500w" />

In the `navigation` object, `versions` is an array where each entry is an object that requires a `version` field and can contain any other navigation fields.

```json  theme={null}
{
  "navigation": {
    "versions": [
      {
        "version": "1.0.0",
        "groups": [
          {
            "group": "Getting started",
            "pages": ["v1/overview", "v1/quickstart", "v1/development"]
          }
        ]
      },
      {
        "version": "2.0.0",
        "groups": [
          {
            "group": "Getting started",
            "pages": ["v2/overview", "v2/quickstart", "v2/development"]
          }
        ]
      }
    ]
  }
}
```

## Languages

Partition your navigation into different languages. Languages are selectable from a dropdown menu.

<img className="block dark:hidden pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-light.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=e451ef6550588674e26e264ce2cbe399" alt="Decorative graphic of a language switcher." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/languages-light.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-light.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=730e80df21d3d766d12500a4a4db02bf 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-light.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=3a6020f155b338b2dcb0f559c1deee70 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-light.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=4c95cc19da42b4d689fcbe302c1245e4 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-light.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=2fe4a55a4099d7262803494ea394e653 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-light.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=6d6d1d80dda01c1f877fc3a8cfda52d4 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-light.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=a61d49e3f45e2fe237afc311edf3eec0 2500w" />

<img className="hidden dark:block pointer-events-none" src="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-dark.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=99a90032d57cfefe2b46fb0d191391c7" alt="Decorative graphic of a language switcher." data-og-width="1184" width="1184" data-og-height="320" height="320" data-path="images/navigation/languages-dark.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-dark.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=956fc78d0e5662ae6bd067980858ad9e 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-dark.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=b1c776d783a92c7051b683b2bdbafd05 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-dark.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=57963c4b57d0db62470034130bc1ed97 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-dark.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=5c3f84e653fbe81a2ed81f706e71a7d9 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-dark.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=604f830763dd441731d828ed13f106c3 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages-dark.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=6574b753a6501b38f8c5455ab1482ec5 2500w" />

In the `navigation` object, `languages` is an array where each entry is an object that requires a `language` field and can contain any other navigation fields, including language-specific banner configurations.

We currently support the following languages for localization:

<CardGroup cols={2}>
  <Card title="Arabic (ar)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ar.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=3d848d9025b508f338803a8ec6e0cfcf" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/ar.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ar.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=8dfdeb41f11bd5d87dd9d71b352b37a9 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ar.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=cc4f66252c7c561a081f5a8b7894810a 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ar.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=a32ea32bf9c25371d931e5f8314244ad 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ar.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=508093f20eac309932e4c0e7b11d7d52 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ar.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=768d6d7cea317bc3b1f9de9865c4b8ca 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ar.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=0bc0f2586122ee278f4668a42fef52f7 2500w" />

  <Card title="Czech (cs)" icon="https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/cs.png?fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=b880294f53cff62c04d639e8e281f4dc" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/cs.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/cs.png?w=280&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=94b60d88c9ee0d3f36199e6e85b43037 280w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/cs.png?w=560&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=f272a29b43f5936cb10021805e4cf544 560w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/cs.png?w=840&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=4ebff4754fa1720271f2c7b29cc339ab 840w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/cs.png?w=1100&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=06b2d50aa1c3ef50e19db1aafc7639b0 1100w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/cs.png?w=1650&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=d7f963b9ca284d94ff17029ee2723ce1 1650w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/cs.png?w=2500&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=62f5edc59db806960e6b5700c940b275 2500w" />

  <Card title="Chinese (cn)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=77d74a80d5ef3abcbef683a48c26c799" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/cn.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=7cb7ff85b0e1c5a75565d9d7b1b6712e 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=53ef4b2cf40db6adb541f3f872345ac6 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=85e97e67d9c09ad6b82a6f6322a8d823 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=9166562056e9f317b652ff1f5f0581e1 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=fc158ef1bf896dd095691baf59dbf9f7 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=60a98106733e83cdee438dbf838f60b6 2500w" />

  <Card title="Chinese (zh-Hant)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=77d74a80d5ef3abcbef683a48c26c799" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/cn.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=7cb7ff85b0e1c5a75565d9d7b1b6712e 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=53ef4b2cf40db6adb541f3f872345ac6 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=85e97e67d9c09ad6b82a6f6322a8d823 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=9166562056e9f317b652ff1f5f0581e1 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=fc158ef1bf896dd095691baf59dbf9f7 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/cn.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=60a98106733e83cdee438dbf838f60b6 2500w" />

  <Card title="Dutch (nl)" icon="https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/nl.png?fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=da927dcce7501df5f80aba862868355b" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/nl.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/nl.png?w=280&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=2954f43a3433008f1f41d8212b52fe0c 280w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/nl.png?w=560&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=4603169369caecb169581b0b198579aa 560w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/nl.png?w=840&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=c293b8cca82bc6882466ba28ae13d42f 840w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/nl.png?w=1100&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=3298bd1eee26212480821e128e12b56c 1100w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/nl.png?w=1650&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=adabb0f5148fd14fa653828d79d970a1 1650w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/nl.png?w=2500&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=58306cdd89068e5c4ba996b72922e5c0 2500w" />

  <Card title="English (en)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/en.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=25d8b8c6c7473091d33c16b602eb381a" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/en.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/en.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=43106e4828f671a2d331c4299c9f0d12 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/en.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=cb8a3627918c9b91d97701a13fa48752 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/en.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=f2f0129cf09f2f42b1438c41677c20b5 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/en.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=eb307cc1a7c16c269210dd3e4a4c1c84 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/en.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=26f3353ea1d6d00513952b4ef1318080 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/en.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=8232059d9a40f4b1f5295ad0a1e9b162 2500w" />

  <Card title="French (fr)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/fr.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=ccf6b50a06031c5961d642aeb92d87b1" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/fr.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/fr.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=b5bf15c776c532cb02cf1224c09d7ac8 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/fr.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=7bf1aefa07fc7eb8a5a535129acab6b9 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/fr.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=f1be5f66929a98c8afe99cd5f0f17c5d 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/fr.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=dd7fe27741fd9e388ee5fa359c8dff59 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/fr.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=725fe0c93f776c6296409757af0b51a5 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/fr.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=3ebaece21b7ca56dc078eb1eeadfee99 2500w" />

  <Card title="German (de)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/de.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=831c61a2dfd61b73164938b664507542" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/de.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/de.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=9774c0f321e007df81b72a8502ae77f7 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/de.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=c4247e53a88be8ebdbe11288e35efd11 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/de.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=72683cee9d5b6b8c6b32cb3f9560b01e 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/de.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=1e518b486fd0ab639fbd3d2205b18cef 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/de.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=a89ab9b85bf0ee3310e6f65e8e2192f8 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/de.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=a02a775133711263b19637fce28aed17 2500w" />

  <Card title="Hebrew (he)" icon="https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/he.png?fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=e51655c25bcdf50287eb43dbade78598" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/he.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/he.png?w=280&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=ca0a800add5a935ceb3cb040467d70ba 280w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/he.png?w=560&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=6500c4f074685168a94ceda9bc6a7320 560w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/he.png?w=840&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=9018fdd2dc36a59d59cffba3072fe863 840w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/he.png?w=1100&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=56b945f61aa0ca259c5097707a7a5df0 1100w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/he.png?w=1650&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=7c4eef75118a282ef20f2ba851e4eb8f 1650w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/he.png?w=2500&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=636d9f48582a34279e565ef144dce5b8 2500w" />

  <Card title="Hindi (hi)" icon="https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/hi.png?fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=9bb83682ddc748abb1e6be010852f9d1" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/hi.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/hi.png?w=280&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=19f0b9de54beb32988af2ad8186886cd 280w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/hi.png?w=560&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=5b84b3fb4f6865074667bf6c98564afd 560w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/hi.png?w=840&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=f51d4e72e0269ecd386ec43b4d169a7a 840w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/hi.png?w=1100&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=3e87aa1407b59c81c794781089edc57e 1100w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/hi.png?w=1650&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=79680fe6447e9e87b2c382cf26a88130 1650w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/hi.png?w=2500&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=b51a52bdb5c445aa2392f0f36261febb 2500w" />

  <Card title="Indonesian (id)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/id.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=8fbde287fb60df0d0712f3d0db7aba1b" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/id.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/id.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=d4f6a0d243652adba7712da0c0618c6d 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/id.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=f11703204f6d568383ae42954cbf5a02 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/id.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=c029de7357afc5b6b0b9d24c766f0568 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/id.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=79c20714c86b9121ef8f8d179488f498 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/id.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=00fe1fd6c1bfb206be0e0e819f58052d 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/id.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=bac23dc437ac6442cb8e71b32069818c 2500w" />

  <Card title="Italian (it)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/it.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=dc39bd6cd67e91394e03842e588681df" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/it.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/it.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=c2363c4e60de0cbf8882217ee1d493cd 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/it.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=9c893803ca199432fb048f668d5b508c 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/it.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=6131d392d9ca9f1697b8c01c607a187e 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/it.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=1d0af0f39688bb30d672ae07216769e0 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/it.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=61192618f5a18aa1ed7c612d09385f4e 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/it.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=cae2ebab5f04bf39ca71676879f98bda 2500w" />

  <Card title="Japanese (jp)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/jp.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=69b17ac2f3202e4bf28945e8408f67e3" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/jp.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/jp.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=515b8cd6c9cc4d0c2fbdcda9e4d03566 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/jp.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=e224c98305cd827c29922ecef85f073b 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/jp.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=dc46b21d09daf0296566fef11893a6a8 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/jp.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=37dbe287e55ba730932e6e51b1178612 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/jp.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=676675bbdab27bce259d02c27ef1a295 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/jp.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=b527890f1d528856b2af89329eeba943 2500w" />

  <Card title="Korean (ko)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ko.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=a555f0a68a4beb076b3556a7f0264b5e" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/ko.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ko.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=f0049a59c540b61522bf373767c2ec4f 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ko.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=06a5563faecb730441bef9d6bf4e145e 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ko.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=e0e89730373372e99b93524e3a98d9e5 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ko.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=7b74ae76e0562908eb0949c117ecc0a1 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ko.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=f72a3a03edb5c859805223e0b59e3762 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ko.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=b57dae2cf9913209850e392eec1f4896 2500w" />

  <Card title="Latvian (lv)" icon="https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/lv.png?fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=61c384db51dc61621e62f4c565935b02" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/lv.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/lv.png?w=280&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=f137bcc24a4cb7e590d507e14ef5d48b 280w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/lv.png?w=560&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=09f96fe2b02bff20f93a5e2f82d8eea4 560w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/lv.png?w=840&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=49549c2dcc9941724797a7a2d4411a25 840w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/lv.png?w=1100&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=89cd30014733c980364048f6965a8ffd 1100w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/lv.png?w=1650&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=47ff00cd21608e3a50a74019084ae142 1650w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/lv.png?w=2500&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=7380e95741cc0b4916f2942480554df1 2500w" />

  <Card title="Norwegian (no)" icon="https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/no.png?fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=993784e6321e0da6be58d4b8451a9425" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/no.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/no.png?w=280&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=4c01e553f1d016c8127f79e8f992d098 280w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/no.png?w=560&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=82fa617b7244c3ef905b505aebdf184d 560w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/no.png?w=840&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=6aff9976cbe49416c96aab2f0bbc5fea 840w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/no.png?w=1100&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=1eee250237671f18cf908e62a8eb0d5a 1100w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/no.png?w=1650&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=71ef4c5e51afceccf983bad349800140 1650w, https://mintcdn.com/mintlify/4vDiMoxdniYs_vyk/images/navigation/languages/no.png?w=2500&fit=max&auto=format&n=4vDiMoxdniYs_vyk&q=85&s=856db890494c6af2b60031de5b5a12fa 2500w" />

  <Card title="Polish (pl)" icon="https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/pl.png?fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=c032c7a1341941978d80307821c82c34" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/pl.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/pl.png?w=280&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=cc1a82af7710633b4e4b46573ebe2b1d 280w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/pl.png?w=560&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=3e53866a2081040966f05ef8799e421a 560w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/pl.png?w=840&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=6c095a21cda297951003b355e2cd085b 840w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/pl.png?w=1100&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=c25b7b3a4f19c01ea5c5db62b306ff46 1100w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/pl.png?w=1650&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=d8ece25bae73a0b89ecdf6a4812d7f80 1650w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/pl.png?w=2500&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=55a28baf25ca9190b8dd0ddfddb67ac1 2500w" />

  <Card title="Portuguese (pt-BR)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/pt-br.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=96a015424865291e54cefc8633cc8d78" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/pt-br.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/pt-br.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=3525bfcf2bb95304c1ed63022a1c37b6 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/pt-br.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=616f16566a7b664cec324ee891855397 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/pt-br.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=dde63286da0a42f62a9df1f00ab72743 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/pt-br.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=4b6c453f871ec5d10fc52430f62fbb3b 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/pt-br.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=0df8d0132693370190cccb03f18a76e9 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/pt-br.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=e416cc093a778465f1d02cf304ad9c57 2500w" />

  <Card title="Romanian (ro)" icon="https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/ro.png?fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=5a3925857c9de6c3c818edde060f51c9" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/ro.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/ro.png?w=280&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=ad6052518f69f36333cf9ccdbaecdf18 280w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/ro.png?w=560&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=c3542e8f21254f29e179076546f92ad2 560w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/ro.png?w=840&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=d00b8d09478b98e9857084ec866284ce 840w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/ro.png?w=1100&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=fa932c259e3de70df5ffe78d4ed1e778 1100w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/ro.png?w=1650&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=ec49f50d3e98d2a2e86c20b6ec1ea4d4 1650w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/ro.png?w=2500&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=0806d20336b1dd2c19accdc0b7d2e88d 2500w" />

  <Card title="Russian (ru)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ru.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=0f52006163f89fe293525925000eb554" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/ru.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ru.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=070e0ec6bebb4a79dffa3e2f2d187dbc 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ru.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=a40c6f0973c34293655ebbeba57e31a4 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ru.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=263c30bbc1658f720d23b73851560734 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ru.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=32a6f903bce0cf5df373f229668fad94 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ru.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=66997201548c8095cfd3986891f8f7a8 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/ru.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=4326c6ce2649805214ea8615f23d05de 2500w" />

  <Card title="Spanish (es)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/es.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=14af4f5bf5e19c20d2062465ca6b9011" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/es.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/es.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=89d7f6c2106f2e8b70c0e66c53fad279 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/es.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=96210753a16d61705cd67a5df2d4bb3c 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/es.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=ca7be75f469bec964e90a7a0e2750415 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/es.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=2bc2d75129f3846646a00cb0cf30d662 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/es.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=c57b12eb043a297b953cd1dae38db985 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/es.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=497a3d025fdebd8f839241fd28fa2abd 2500w" />

  <Card title="Swedish (sv)" icon="https://mintcdn.com/mintlify/bbYdWMDGyp4158HR/images/navigation/languages/sv.png?fit=max&auto=format&n=bbYdWMDGyp4158HR&q=85&s=b62a991d880845b46daa65220ca451b5" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/sv.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/bbYdWMDGyp4158HR/images/navigation/languages/sv.png?w=280&fit=max&auto=format&n=bbYdWMDGyp4158HR&q=85&s=d186128df23f1fa94917eeaf3c0a31f2 280w, https://mintcdn.com/mintlify/bbYdWMDGyp4158HR/images/navigation/languages/sv.png?w=560&fit=max&auto=format&n=bbYdWMDGyp4158HR&q=85&s=a61e5c8032736d15638b29d2069c4303 560w, https://mintcdn.com/mintlify/bbYdWMDGyp4158HR/images/navigation/languages/sv.png?w=840&fit=max&auto=format&n=bbYdWMDGyp4158HR&q=85&s=8e969cc3f2efc135938aeaabe552f4c3 840w, https://mintcdn.com/mintlify/bbYdWMDGyp4158HR/images/navigation/languages/sv.png?w=1100&fit=max&auto=format&n=bbYdWMDGyp4158HR&q=85&s=b48089ab9a10516117eff6d6a33c3fd0 1100w, https://mintcdn.com/mintlify/bbYdWMDGyp4158HR/images/navigation/languages/sv.png?w=1650&fit=max&auto=format&n=bbYdWMDGyp4158HR&q=85&s=00c8309ae0fdf8020576b1593c01f0bb 1650w, https://mintcdn.com/mintlify/bbYdWMDGyp4158HR/images/navigation/languages/sv.png?w=2500&fit=max&auto=format&n=bbYdWMDGyp4158HR&q=85&s=76ef53b965bb4069e4e19f922908b0f1 2500w" />

  <Card title="Turkish (tr)" icon="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/tr.png?fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=e52a73a891fa250497c853c557b0a91f" horizontal data-og-width="60" width="60" data-og-height="60" height="60" data-path="images/navigation/languages/tr.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/tr.png?w=280&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=1c866ff160da61a0f05b563a5c615ce6 280w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/tr.png?w=560&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=827c78ee57518688cc09b77dff22083f 560w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/tr.png?w=840&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=b65aa07cd206d1081afe8d9684cbd06d 840w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/tr.png?w=1100&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=768ca64d1cc99b5f242219beeb9e3aa2 1100w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/tr.png?w=1650&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=17dee5e3bb9056e1f4b4ca5aadcda720 1650w, https://mintcdn.com/mintlify/Y6rP0BmbzgwHuEoU/images/navigation/languages/tr.png?w=2500&fit=max&auto=format&n=Y6rP0BmbzgwHuEoU&q=85&s=7479495e964c43795d15871fcb23268d 2500w" />

  <Card title="Ukrainian (ua)" icon="https://mintcdn.com/mintlify/8p1xhF2gnPXDMRE_/images/navigation/languages/ua.png?fit=max&auto=format&n=8p1xhF2gnPXDMRE_&q=85&s=2e0f017cadda1fa0305e0e57c9de2860" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/ua.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/8p1xhF2gnPXDMRE_/images/navigation/languages/ua.png?w=280&fit=max&auto=format&n=8p1xhF2gnPXDMRE_&q=85&s=1aaeec586ad08b6e07e61215119b0c19 280w, https://mintcdn.com/mintlify/8p1xhF2gnPXDMRE_/images/navigation/languages/ua.png?w=560&fit=max&auto=format&n=8p1xhF2gnPXDMRE_&q=85&s=977061bd38ec364007cf98ac8c124c58 560w, https://mintcdn.com/mintlify/8p1xhF2gnPXDMRE_/images/navigation/languages/ua.png?w=840&fit=max&auto=format&n=8p1xhF2gnPXDMRE_&q=85&s=419eefaeea56bd5219a8a7d37e9d15e6 840w, https://mintcdn.com/mintlify/8p1xhF2gnPXDMRE_/images/navigation/languages/ua.png?w=1100&fit=max&auto=format&n=8p1xhF2gnPXDMRE_&q=85&s=cb5042d9edfdd2704356613e9a1bae38 1100w, https://mintcdn.com/mintlify/8p1xhF2gnPXDMRE_/images/navigation/languages/ua.png?w=1650&fit=max&auto=format&n=8p1xhF2gnPXDMRE_&q=85&s=87995753a9ef16414a1a2808a8a227b9 1650w, https://mintcdn.com/mintlify/8p1xhF2gnPXDMRE_/images/navigation/languages/ua.png?w=2500&fit=max&auto=format&n=8p1xhF2gnPXDMRE_&q=85&s=ec31f2540a4bb07df155cb786f30ab50 2500w" />

  <Card title="Uzbek (uz)" icon="https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/uz.png?fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=dd6427a746dcfc6e8972e8ea0b5dc20f" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/uz.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/uz.png?w=280&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=83fc1c58dd295aa2c8b584daa9fa9be5 280w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/uz.png?w=560&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=4c437bdc6d64836e9cf58a107de7e370 560w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/uz.png?w=840&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=c91ddab70de0c7d1656fb29f003a4e69 840w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/uz.png?w=1100&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=3ffadcb141af5f05ac0a8e57475b43c9 1100w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/uz.png?w=1650&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=8e6164a632034ecac4a848e45523c93b 1650w, https://mintcdn.com/mintlify/Xr3wiklTC3GE1PaM/images/navigation/languages/uz.png?w=2500&fit=max&auto=format&n=Xr3wiklTC3GE1PaM&q=85&s=fa6d1b9240507ebaa60c2daeaf787e4c 2500w" />

  <Card title="Vietnamese (vi)" icon="https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/vi.png?fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=970f4a7e12c0dd29f3980c22cbddad9e" horizontal data-og-width="480" width="480" data-og-height="480" height="480" data-path="images/navigation/languages/vi.png" data-optimize="true" data-opv="3" srcset="https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/vi.png?w=280&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=7d576c0f343ff4aa0fc03f00fc30677f 280w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/vi.png?w=560&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=8d3ab6dda4a1e47ad9fac543ed0dfabe 560w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/vi.png?w=840&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=4e9a7246d40485c19d4853bf40984d3a 840w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/vi.png?w=1100&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=b21bca637e31391b2f20ccf4dcbf03bd 1100w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/vi.png?w=1650&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=c270b5b719f4a53488c136440313c48e 1650w, https://mintcdn.com/mintlify/BTaDCk_Uxbf62Se-/images/navigation/languages/vi.png?w=2500&fit=max&auto=format&n=BTaDCk_Uxbf62Se-&q=85&s=467b96d0cfce66a220265a63347913a5 2500w" />
</CardGroup>

```json  theme={null}
{
  "navigation": {
    "languages": [
      {
        "language": "en",
        "banner": {
          "content": "🚀 Version 2.0 is now live! See our [changelog](/en/changelog) for details.",
          "dismissible": true
        },
        "groups": [
          {
            "group": "Getting started",
            "pages": ["en/overview", "en/quickstart", "en/development"]
          }
        ]
      },
      {
        "language": "es",
        "banner": {
          "content": "🚀 ¡La versión 2.0 ya está disponible! Consulta nuestro [registro de cambios](/es/changelog).",
          "dismissible": true
        },
        "groups": [
          {
            "group": "Getting started",
            "pages": ["es/overview", "es/quickstart", "es/development"]
          }
        ]
      }
    ]
  }
}
```

For automated translations, [contact our sales team](mailto:gtm@mintlify.com) to discuss solutions.

## Nesting

Navigation elements can be nested within each other to create complex hierarchies. You must have one root-level parent navigation element such as tabs, groups, or a dropdown. You can nest other types of navigation elements within your primary navigation pattern.

Each navigation element can contain one type of child element at each level of your navigation hierarchy. For example, a tab can contain anchors that contain groups, but a tab cannot contain both anchors and groups at the same level.

<CodeGroup>
  ```json Tabs containing anchors theme={null}
  {
    "navigation": {
      "tabs": [
        {
          "tab": "Documentation",
          "anchors": [
            {
              "anchor": "Guides",
              "icon": "book-open",
              "pages": ["quickstart", "tutorial"]
            },
            {
              "anchor": "API Reference",
              "icon": "code",
              "pages": ["api/overview", "api/endpoints"]
            }
          ]
        },
        {
          "tab": "Resources",
          "groups": [
            {
              "group": "Help",
              "pages": ["support", "faq"]
            }
          ]
        }
      ]
    }
  }
  ```

  ```json Anchors containing tabs theme={null}
  {
    "navigation": {
      "anchors": [
        {
          "anchor": "Documentation",
          "icon": "book-open",
          "tabs": [
            {
              "tab": "Guides",
              "pages": ["quickstart", "tutorial"]
            },
            {
              "tab": "API",
              "pages": ["api/overview", "api/endpoints"]
            }
          ]
        },
        {
          "anchor": "Community",
          "icon": "users",
          "href": "https://community.example.com"
        }
      ]
    }
  }
  ```

  ```json Products containing tabs theme={null}
  {
    "navigation": {
      "products": [
        {
          "product": "Platform",
          "icon": "server",
          "tabs": [
            {
              "tab": "Documentation",
              "groups": [
                {
                  "group": "Getting started",
                  "pages": ["platform/quickstart"]
                }
              ]
            },
            {
              "tab": "API Reference",
              "pages": ["platform/api"]
            }
          ]
        },
        {
          "product": "Mobile SDK",
          "icon": "mobile",
          "pages": ["mobile/overview"]
        }
      ]
    }
  }
  ```

  ```json Multi-product SaaS with tabs and menu theme={null}
  {
    "navigation": {
      "products": [
        {
          "product": "Platform",
          "icon": "cloud",
          "tabs": [
            {
              "tab": "Documentation",
              "menu": [
                {
                  "item": "Getting Started",
                  "icon": "rocket",
                  "groups": [
                    {
                      "group": "Setup",
                      "pages": ["platform/install", "platform/config"]
                    },
                    {
                      "group": "Core Concepts",
                      "pages": ["platform/concepts/auth", "platform/concepts/data"]
                    }
                  ]
                },
                {
                  "item": "Guides",
                  "icon": "book",
                  "pages": ["platform/guides/deployment", "platform/guides/scaling"]
                }
              ]
            },
            {
              "tab": "API Reference",
              "groups": [
                {
                  "group": "REST API",
                  "pages": ["platform/api/users", "platform/api/projects"]
                },
                {
                  "group": "GraphQL",
                  "pages": ["platform/api/graphql/queries", "platform/api/graphql/mutations"]
                }
              ]
            }
          ]
        },
        {
          "product": "Analytics",
          "icon": "chart-bar",
          "tabs": [
            {
              "tab": "Documentation",
              "groups": [
                {
                  "group": "Getting Started",
                  "pages": ["analytics/quickstart", "analytics/setup"]
                }
              ]
            },
            {
              "tab": "API",
              "pages": ["analytics/api/events", "analytics/api/reports"]
            }
          ]
        }
      ]
    }
  }
  ```

  ```json Versioned docs with tabs theme={null}
  {
    "navigation": {
      "versions": [
        {
          "version": "v2.0",
          "tabs": [
            {
              "tab": "Documentation",
              "groups": [
                {
                  "group": "Getting Started",
                  "pages": ["v2/quickstart", "v2/migration-from-v1"]
                },
                {
                  "group": "Features",
                  "pages": ["v2/features/auth", "v2/features/api"]
                }
              ]
            },
            {
              "tab": "API Reference",
              "pages": ["v2/api/overview", "v2/api/endpoints"]
            }
          ]
        },
        {
          "version": "v1.0",
          "tabs": [
            {
              "tab": "Documentation",
              "groups": [
                {
                  "group": "Getting Started",
                  "pages": ["v1/quickstart"]
                }
              ]
            },
            {
              "tab": "API Reference",
              "pages": ["v1/api/overview"]
            }
          ]
        }
      ]
    }
  }
  ```
</CodeGroup>

## Breadcrumbs

Breadcrumbs display the full navigation path at the top of pages. Some themes have breadcrumbs enabled by default and others do not. You can control whether breadcrumbs display on your site using the `styling` property in your `docs.json`.

<CodeGroup>
  ```json Display full breadcrumbs theme={null}
  "styling": {
    "eyebrows": "breadcrumbs"
  }
  ```

  ```json Display parent section only theme={null}
  "styling": {
    "eyebrows": "section"
  }
  ```
</CodeGroup>

## Interaction configuration

Control how users interact with navigation elements using the `interaction` property in your `docs.json`.

### Enable auto-navigation for groups

When a user expands a navigation group, some themes automatically navigate to the first page in the group. You can override a theme's default behavior using the `drilldown` option.

* Set to `true` to force automatic navigation to the first page when a user selects a navigation group.
* Set to `false` to prevent navigation and only expand or collapse the group when a user selects a navigation group.
* Leave unset to use the theme's default behavior.

<CodeGroup>
  ```json Force navigation theme={null}
  "interaction": {
    "drilldown": true  // Force navigation to first page when a user expands a dropdown
  }
  ```

  ```json Prevent navigation theme={null}
  "interaction": {
    "drilldown": false // Never navigate, only expand or collapse the group
  }
  ```
</CodeGroup>
