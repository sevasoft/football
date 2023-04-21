# Database

First open PgAdmin and enter master password if necessary.
On the lefthand side, click open Servers -> PostgreSQL -> Databases
Right click on Databases, choose Create -> Database...
Database: football
Owner: postgres
click save. (You can choose to close PgAdmin now)

If you wish to change your postgres password to be the same as the one included in version control:
Hit ALT+SHIFT+Q 
This should open your query tool in pgAdmin.
Enter the following query:
ALTER ROLE postgres WITH PASSWORD '12345';
Hit execute
Your new password is now: 12345
Note: this is also the master password you need to enter when you start up pgAdmin from now on.

Now start up DBeaver.
Create a new connection.
Choose PostgreSQL.
Database name: football.
Click finish. It will run on port 5432
Open the new football database -> Databases -> football -> Schemas -> public.
Right click on public -> SQL editor -> new SQL script.
Paste and run the following:

CREATE TABLE public.teams (
	id serial4 NOT NULL,
	club_name varchar(255) NOT NULL,
	established_in int4 NOT NULL,
	is_international bool NOT NULL,
	CONSTRAINT teams_pkey PRIMARY KEY (id)
);

CREATE TABLE public.players (
	id serial4 NOT NULL,
	"name" varchar(255) NOT NULL,
	year_of_birth int4 NOT NULL,
	team_id int4 NULL,
	CONSTRAINT players_pkey PRIMARY KEY (id),
	CONSTRAINT players_team_id_fkey FOREIGN KEY (team_id) REFERENCES public.teams(id) ON DELETE SET NULL ON UPDATE SET NULL
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
  
  When you have verified that everything works, you can add automated sequence generation for both tables by running the following queries:
  
  CREATE SEQUENCE team_id_seq START 1;
  CREATE SEQUENCE player_id_seq START 1;
  
  (Don't forget to delete the dummy data, otherwise you will get an error saying that the id the sequencer tries to generate already exists)
