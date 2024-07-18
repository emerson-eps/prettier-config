/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

// https://prettier.io/docs/en/options.html
module.exports = {
  // trailingComma default since Prettier v3 is "all"
  // setting to "es5" for nicer formatting of JSX and less formatting changes.
  trailingComma: "es5",
  // Cypress overrides: allow longer lines
  overrides: [
    {
      files: "cypress/**/*.ts",
      options: {
        printWidth: 150,
      },
    },
  ],
};
