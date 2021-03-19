# discord-styles

Simplified text styling for discord.

# Installation

```bash
# with npm
npm install discord-styles

# or with yarn
yarn add discord-styles
```

# Usage

````js
const styles = require("discord-styles"); // import

styles.bold("Hey there!"); // -> **Hey there!**
styles.italic("Hey there!"); // -> *Hey there!*
styles.underline("Hey there!"); // -> __Hey there!__
styles.strikethrough("Hey there!"); // -> ~~Hey there!~~
styles.block("Hey there!"); // -> `Hey there!`
styles.quote("Hey there!"); // -> > Hey there!
styles.multilineQuote("Hey there!"); // -> >>> Hey there!
styles.spolier("Hey there!"); // -> ||Hey there!||

styles.codeblock(
  "const name = 'squik';" /* Content */,
  "javascript" /* <-- Optional Coding Lang Option*/
); /* -> ```javascript
    const name = 'squik';
    ```*/
````
