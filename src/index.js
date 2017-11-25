// Move this after the @std/esm require and coverage for cjs goes away also
require("./cjs/main")();

require = require("@std/esm")(module, { esm: "js", cjs: true });
// No coverage for code called below here
require("./esm/main").default();
