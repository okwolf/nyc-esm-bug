require("./cjs/main")();

require = require("@std/esm")(module);
require("./esm/main").default();