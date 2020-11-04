# markdownlint-config-fluid

[![License: BSD 3-Clause](https://badgen.net/github/license/fluid-project/markdownlint-config-fluid/)](https://github.com/fluid-project/markdownlint-config-fluid/blob/main/LICENSE.md)
[![Latest Release](https://badgen.net/github/release/fluid-project/markdownlint-config-fluid/)](https://github.com/fluid-project/markdownlint-config-fluid/releases/latest/)
[![NPM Package](https://badgen.net/npm/v/markdownlint-config-fluid)](https://www.npmjs.com/package/markdownlint-config-fluid)

Shareable markdownlint configuration for the Fluid Project.

## Using

To use the markdownlint configuration provided by this module, add it as a dev dependency to your project:

```bash
npm install markdownlint-config-fluid --save-dev --save-exact
```

### With [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)

If you are using [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli), you can pass this configuration
to the CLI directly:

```bash
markdownlint --config=node_modules/markdownlint-config-fluid/index.js
```

### With [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)

If you are using [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2), you can create a
`.markdownlintrc.js` file with the following contents:

```js
"use strict";

module.exports = require("markdownlint-config-fluid");
```

### With [grunt-markdownlint](https://github.com/sagiegurari/grunt-markdownlint)

If you are using Grunt and [grunt-markdownlint](https://github.com/sagiegurari/grunt-markdownlint), you can load the
JSON configuration into Grunt as follows:

```js
grunt.initConfig({
  markdownlint: {
    options: {
      config: grunt.file.readJSON("./node_modules/markdownlint-config-fluid/.markdownlintrc.json")
    }
  }
});
```

## Developing

See the [markdownlint documentation](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md) for full details
on available rules.

### Modifying configuration

To modify the markdownlint rules provided by this module, update the configuration in the
[.markdownlintrc.json](.markdownlintrc.json) file. See the [markdownlint
documentation](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md) for configuration options.

### Testing

To test your changes locally, link the package globally on your system.

```bash
# Run from the markdownlint-config-fluid directory.
# Depending on your system, you may need to use sudo.
npm link
```

Add your linked module to the package you want to test in.

```bash
# Run in the root directory for the package with which you want to test the configuration.
npm link markdownlint-config-fluid
```

Remove the links to clean up the test settings.

```bash
# Run from the markdownlint-config-fluid directory.
# Depending on your system, you may need to use sudo.
npm unlink

# Run in the root directory for the package with which you tested the configuration.
npm unlink markdownlint-config-fluid

# Run the install again to ensure that all the dependencies are properly installed.
npm install
```

### Releasing

This module uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), enforced with
[commitlint](https://commitlint.js.org/). This facilitates releasing new versions of the module. To cut a release, run:

```bash
npm run release
```

This will tag an appropriate [semantic version](https://semver.org) based on the nature of the recent commits to the
project and update [the changelog](CHANGELOG.md).

You will then need to publish the updated version to the [npm registry](http://npmjs.com). This requires an npm account
with appropriate maintainer permissions. To publish the module, run:

```bash
npm publish
```

For more information on publishing to npm, see the [npm publish documentation](https://docs.npmjs.com/cli/publish).
