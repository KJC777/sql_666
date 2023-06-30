# sql_666
FOR 六角龍

### sql語法

```sql
SELECT * FROM pragma_table_info("Users")
```
```sql
SELECT * FROM Users
```

```sql
DELETE FROM Users WHERE id = "1234567";
```

```sql
UPDATE Users
SET Email = "timmy@success.org"
WHERE id = "1234567";
```

```sql
CREATE TABLE sixxx(
    ID TEXT PRIMARY KEY,
    Username TEXT,
    Email TEXT,
    DOB TEXT 
)```

```sql
INSERT INTO Users (ID,Username,Email,DOB)
-- VALUES ("123","immy","timmy@fre.org","2005-00-28"),
-- ("4567","Tim","timmyilure.org","2005-19-28"),
-- ("678","mm","timmy@failorg","2005-16-28"),
-- ("910","my","timmy@fairg","2005-14-28"),
-- ("231","meme","timlure.org","21999-10-28");

-- ALTER TABLE Users
-- RENAME COLUMN Emali TO Email;```
