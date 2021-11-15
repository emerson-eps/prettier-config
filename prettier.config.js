/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

// https://prettier.io/docs/en/options.html
module.exports = {
  // arrowParens default since Prettier v2.0.0 is "always"
  // "avoid" present to avoid reformatting pre v2.0 code.
  arrowParens: "avoid",
  // Cypress overrides: allow longer lines
  overrides: [
    {
      files: "cypress/**/*.ts",
      options: {
        printWidth: 180
      }
    }
  ]
};
