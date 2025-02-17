import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open } from "./utils";

const rules: KarabinerRules[] = [
  {
    description: "Make interal keyboard behave like moonlander",
    manipulators: [
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "left_command",
        },
        to: [
          {
            key_code: "right_command",
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "d",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "9",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "f",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "0",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "c",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "open_bracket",
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "v",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "close_bracket",
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "e",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "open_bracket",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "r",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "close_bracket",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "q",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "quote",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "w",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "quote",
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "m",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "hyphen",
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "j",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "hyphen",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "i",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "backslash",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "h",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "3",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "g",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "equal_sign",
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "b",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "1",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "p",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "5",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "k",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "7",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "l",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "2",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "n",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "equal_sign",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "t",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "4",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "y",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "backslash",
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "x",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "8",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "z",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "6",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "comma",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "comma",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "period",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "period",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "slash",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "slash",
            modifiers: ["shift"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "a",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "a",
            modifiers: ["left_option"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "o",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "o",
            modifiers: ["left_option"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "u",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "u",
            modifiers: ["left_option"],
          },
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "s",
          modifiers: {
            mandatory: ["right_command"],
          },
        },
        to: [
          {
            key_code: "s",
            modifiers: ["left_option"],
          },
        ],
      },
    ]
  },
  {
    description: "Hyper & Meh Key",
    manipulators: [
      {
        description: "Backslash -> Hyper Key",
        from: {
          key_code: "backslash",
        },
        to: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_control", "left_option"],
          },
        ],
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
      },
      {
        description: "Left option -> Left command",
        from: {
          key_code: "left_option",
        },
        to: [
          {
            key_code: "left_command",
          },
        ],
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
      },
      {
        type: "basic",
        conditions: [
          {
            type: "device_if",
            identifiers: [
              {
                is_built_in_keyboard: true,
              }
            ]
          }
        ],
        from: {
          key_code: "fn",
        },
        to: [
          {
            key_code: "left_shift",
            modifiers: ["left_control", "left_option"],
          },
        ],
      },
    ],
  },
  {
    description: "Hyper Key Apps",
    manipulators: [
      {
        type: "basic",
        description: "Open slack",
        from: {
          key_code: "s",
          modifiers: {
            mandatory: [
              "left_command",
              "left_control",
              "left_shift",
              "left_option",
            ],
          },
        },
        ...app("Slack")
      },
      {
        type: "basic",
        description: "Open terminal",
        from: {
          key_code: "t",
          modifiers: {
            mandatory: [
              "left_command",
              "left_control",
              "left_shift",
              "left_option",
            ],
          },
        },
        ...app("Alacritty")
      },
      {
        type: "basic",
        description: "Open teleGram",
        from: {
          key_code: "g",
          modifiers: {
            mandatory: [
              "left_command",
              "left_control",
              "left_shift",
              "left_option",
            ],
          },
        },
        ...app("Telegram")
      },
      {
        type: "basic",
        description: "Open browser",
        from: {
          key_code: "b",
          modifiers: {
            mandatory: [
              "left_command",
              "left_control",
              "left_shift",
              "left_option",
            ],
          },
        },
        ...app("Google Chrome")
      },
      {
        type: "basic",
        description: "Open Notion",
        from: {
          key_code: "n",
          modifiers: {
            mandatory: [
              "left_command",
              "left_control",
              "left_shift",
              "left_option",
            ],
          },
        },
        ...app("Notion")
      },
      {
        type: "basic",
        description: "Open Linear",
        from: {
          key_code: "l",
          modifiers: {
            mandatory: [
              "left_command",
              "left_control",
              "left_shift",
              "left_option",
            ],
          },
        },
        ...app("Linear")
      },
    ]
  },
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
