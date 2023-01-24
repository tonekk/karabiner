import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      { type: "basic",
        description: "Disable CMD + Tab to force Hyper Key usage",
        from: {
          key_code: "tab",
          modifiers: {
            mandatory: ["left_command"],
          },
        },
        to: [
          {
            key_code: "tab",
          },
        ],
      },
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
        description: "Open alacritty",
        from: {
          key_code: "a",
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
        description: "Open telegram",
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
        ...app("Telegram")
      },
      {
        type: "basic",
        description: "Open Chrome",
        from: {
          key_code: "c",
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
