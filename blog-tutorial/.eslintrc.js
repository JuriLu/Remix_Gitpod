/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "prettier",
  ],
  env: {
    "cypress/globals": true,
  },
  plugins: ["cypress"],
  // we're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but it means we have to explicitly
  // set the jest version.
  settings: {
    jest: {
      version: 28,
    },
  },
    "root": true,
    "ignorePatterns": [
      "**/*"
    ],
    "plugins": [
      "@nrwl/nx"
    ],
    "overrides": [
      {
        "files": [
          "*.ts",
          "*.tsx",
          "*.js",
          "*.jsx"
        ],
        "rules": {
          //        "@nrwl/nx/enforce-module-boundaries": [
          //          "error",
          //          {
          //            "enforceBuildableLibDependency": true,
          //            "allow": [],
          //            "depConstraints": [
          //              {
          //                "sourceTag": "*",
          //                "onlyDependOnLibsWithTags": [
          //                  "*"
          //                ]
          //              }
          //            ]
          //          }
          //        ]
        }
      },
      {
        "files": [
          "*.ts",
          "*.tsx"
        ],
        "extends": [
          "plugin:@nrwl/nx/typescript"
        ],
        "rules": {
          "quotes": [
            "error",
            "single",
            {
              "allowTemplateLiterals": true
            }
          ],
          "@typescript-eslint/no-empty-function": [
            "error",
            {
              "allow": [
                "methods",
                "constructors"
              ]
            }
          ],
          "no-var": [
            "error"
          ],
          "no-console": [
            "error"
          ],
          "no-duplicate-imports": "error",
          "indent": [
            "error",
            2,
            {
              "SwitchCase": 1
            }
          ],
          "max-len": [
            "error",
            140
          ],
          "semi": "error",
          "space-before-function-paren": [
            "error",
            {
              "anonymous": "never",
              "named": "never",
              "asyncArrow": "always"
            }
          ],
          "consistent-return": [
            "error"
          ],
          "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
              "allowConciseArrowFunctionExpressionsStartingWithVoid": false,
              "allowExpressions": true
            }
          ],
          "no-restricted-imports": [
            "error",
            {
              "paths": [
                "rxjs/Rx"
              ]
            }
          ],
          "curly": "error",
          "no-trailing-spaces": "error"
        }
      },
      {
        "files": [
          "*.js",
          "*.jsx"
        ],
        "extends": [
          "plugin:@nrwl/nx/javascript"
        ],
        "rules": {}
      }
    ]

};

