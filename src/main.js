const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

let sql = `
-- INSERT INTO Users (ID,Username,Email,DOB)
-- VALUES ("123","immy","timmy@fre.org","2005-00-28"),
-- ("4567","Tim","timmyilure.org","2005-19-28"),
-- ("678","mm","timmy@failorg","2005-16-28"),
-- ("910","my","timmy@fairg","2005-14-28"),
-- ("231","meme","timlure.org","21999-10-28");

-- ALTER TABLE Users
-- RENAME COLUMN Emali TO Email;
-- SELECT * FROM pragma_table_info("Users");
DOM DATE CHECK(DOM IS strftime(%Y-%m-%d)); 
-- SELECT * FROM Users 
-- WHERE ID = "231";
-- ;

-- DELETE FROM Users
-- WHERE id = "1234567";

-- UPDATE Users
-- SET Email = "timmy@success.org"
-- WHERE id = "1234567";

-- CREATE TABLE sixxx(
--    ID TEXT PRIMARY KEY,
--    Username TEXT,
--    Email TEXT,
--    DOB TEXT 
--);


`
/*SQL QUERY HERE*/
//how can we execute the sql query?
db.all(sql, (error, rows)  => {
    rows.forEach(row => console.log(row))
});