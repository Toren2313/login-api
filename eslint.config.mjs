import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/node_modules/", "**/build/", "dist/"],
  },
  ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "unused-imports": unusedImports,
      prettier,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname, // or import.meta.dirname for ESM
      },
    },
    rules: {
      "max-len": [
        "error",
        {
          ignoreUrls: true,
          ignoreComments: true,
          code: 120,
        },
      ],
      quotes: [
        "error",
        "double",
        {
          avoidEscape: true,
        },
      ],
      "no-mixed-spaces-and-tabs": "error",
      "eol-last": ["error", "always"],
      "brace-style": "off",
      //  "@typescript-eslint/brace-style": ["error", "1tbs"],
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-extraneous-class": "error",
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-duplicate-type-constituents": "error",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      "@typescript-eslint/no-array-delete": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      // "@typescript-eslint/func-call-spacing": ["error", "never"],
      "@typescript-eslint/no-non-null-assertion": "error",
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "no-whitespace-before-property": "error",
      semi: ["error", "always"],
      "semi-style": ["error", "last"],
      "space-in-parens": ["error", "never"],
      "block-spacing": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      eqeqeq: [
        "error",
        "always",
        {
          null: "ignore",
        },
      ],

      "spaced-comment": [
        "error",
        "always",
        {
          markers: ["!"],
        },
      ],
      yoda: "error",
      "prefer-destructuring": [
        "error",
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },

          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
      ],

      "operator-assignment": ["error", "always"],
      "no-useless-computed-key": "error",
      "no-unneeded-ternary": [
        "error",
        {
          defaultAssignment: false,
        },
      ],

      "no-invalid-regexp": "error",
      "no-constant-condition": [
        "error",
        {
          checkLoops: false,
        },
      ],
      "no-duplicate-imports": "error",
      "no-extra-semi": "error",
      "dot-notation": "error",
      "no-fallthrough": "error",
      "for-direction": "error",
      "no-async-promise-executor": "error",
      "no-cond-assign": "error",
      "no-dupe-else-if": "error",
      "no-duplicate-case": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-prototype-builtins": "error",
      "no-regex-spaces": "error",
      "no-shadow-restricted-names": "error",
      "no-unexpected-multiline": "error",
      "no-unsafe-optional-chaining": "error",
      "no-useless-backreference": "error",
      "use-isnan": "error",
      "no-plusplus": "error",
      "prefer-const": "error",
      "prefer-spread": "error",
      "unused-imports/no-unused-imports": "error",
      "prettier/prettier": [
        "error",
        {
          printWidth: 120,
          singleQuote: false,
          endOfLine: "auto",
        },
      ],
    },
  },
];
