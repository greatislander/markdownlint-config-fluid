/*
Copyright the markdownlint-config-fluid copyright holders.
See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/markdownlint-config-fluid/raw/main/AUTHORS.md.
Licensed under the New BSD license. You may not use this file except in compliance with this License.
You may obtain a copy of the New BSD License at
https://github.com/fluid-project/markdownlint-config-fluid/raw/main/LICENSE.md.
*/

"use strict";

var fluid = require("infusion");
var path = require("path");
var configPath = path.join(__dirname, ".markdownlintrc.json");

fluid.module.register("markdownlint-config-fluid", __dirname, require);

module.exports = require(configPath);
