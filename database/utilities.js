"use strict";
//.since we arenotusingadatabasewe'llcreate amethod forpersistingthe data.
const fs = require("fs");

const saveToDB = (DB) => {
  fs.writeFileSync("./database/db.json", json.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = { saveToDB };
