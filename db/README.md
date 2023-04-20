# Database

First open PgAdmin and enter personal password if necessary.
On the lefthand side, click open Servers -> PostgreSQL -> Databases
Right click on Databases, choose Create -> Database...
Database: football
Owner: postgres
click save. (You can choose to close PgAdmin now)

Now start up DBeaver.
Create a new connection.
Choose PostgreSQL.
Database name: football.
Click finish. It will run on port 5432
Open the new football database -> Databases -> football -> Schemas -> public.
Right click on public -> SQL editor -> new SQL script.
Paste and run the following:

CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  club_name VARCHAR(255) NOT NULL,
  established_in INTEGER NOT NULL,
  is_international BOOLEAN NOT NULL
);

CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  year_of_birth INTEGER NOT NULL,
  team_id INTEGER NOT NULL,
  FOREIGN KEY (team_id) REFERENCES teams(id)
);

You now created the player and the teams table.
For some dummy data; open new SQL script (same as previous and paste and run the following:

INSERT INTO teams (club_name, established_in, is_international)
VALUES
  ('Manchester United', 1878, false),
  ('Real Madrid', 1902, false),
  ('FC Barcelona', 1899, false),
  ('Paris Saint-Germain', 1970, false),
  ('Brazil', 1914, true),
  ('Germany', 1900, true),
  ('Argentina', 1893, true);

INSERT INTO players (name, year_of_birth, team_id)
VALUES
  ('Cristiano Ronaldo', 1985, 2),
  ('Lionel Messi', 1987, 3),
  ('Neymar', 1992, 4),
  ('Kylian Mbappé', 1998, 4),
  ('David Beckham', 1975, 1),
  ('Zinedine Zidane', 1972, 2),
  ('Pele', 1940, 5),
  ('Diego Maradona', 1960, 7);
  
  Finally, add automated sequence generation for both tables by running the following queries:
  
  CREATE SEQUENCE team_id_seq START 1;
  CREATE SEQUENCE player_id_seq START 1;
  
