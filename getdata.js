//https://www.sqlitetutorial.net/sqlite-nodejs/query/
//https://stackabuse.com/a-sqlite-tutorial-with-node-js/
//www.tutlane.com/tutorial/sqlite/sqlite-date-function

const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

let db = new sqlite3.Database(
  "./public/covidLog.db3",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the database.");
  }
);

let sql = "SELECT * FROM covidStats";
db.all(sql, [], (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection.");
});
