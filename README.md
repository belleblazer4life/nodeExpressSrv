## Testing ExpressJS using Node

With API data on covid-19 infections and deceased records in the Netherlands.

## Set-up the application

- [x] Set-up Express server
- [x] Test basic routes (/)
- [x] Add API data route (/data)
- [x] Create database connection (SQLite)
- [x] Test dummy database
- [ ] Add values to dummy database
- [ ] Custom error page (404.html)

**getdata.js** important part.
Return is of type "object"

```javascript
const sqlite3 = require("sqlite3").verbose();
let sql = "SELECT * FROM covidStats";
db.all(sql, [], (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
```

<div style="page-break-after: always;"></div>
**result** of console.log

```json
[
  {
    "id": 0,
    "date": "17-9-2020",
    "province": "Zuid-Holland",
    "infected": 24815,
    "deceased": 1357
  },
  {
    "id": 1,
    "date": "17-9-2020",
    "province": "Noord-Holland",
    "infected": 16580,
    "deceased": 836
  },
  {
    "id": 2,
    "date": "17-9-2020",
    "province": "Noord-Brabant",
    "infected": 13701,
    "deceased": 1551
  },
  {
    "id": 3,
    "date": "17-9-2020",
    "province": "Gelderland",
    "infected": 8689,
    "deceased": 692
  },
  {
    "id": 4,
    "date": "17-9-2020",
    "province": "Utrecht",
    "infected": 6774,
    "deceased": 437
  }
    ............
]
```
