/*
Copyright the markdownlint-config-fluid copyright holders.
See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/markdownlint-config-fluid/raw/main/AUTHORS.md.
Licensed under the New BSD license. You may not use this file except in compliance with this License.
You may obtain a copy of the New BSD License at
https://github.com/fluid-project/markdownlint-config-fluid/raw/main/LICENSE.md.
*/
"use strict";

var markdownlint = require("markdownlint");
var test = require("ava");

var options = {
    "config":  markdownlint.readConfigSync(".markdownlintrc.json")
};

test("Valid file passes linting", function (t) {
    options.files = ["./tests/fixtures/good.md"];
    var result = markdownlint.sync(options);
    t.is(result["./tests/fixtures/good.md"].length, 0);
});

test("Invalid file fails linting", function (t) {
    options.files = ["./tests/fixtures/bad.md"];
    var result = markdownlint.sync(options);
    t.not(result["./tests/fixtures/bad.md"].length, 0);
});
