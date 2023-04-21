Back-End

Endpoints:

GET "/teams" : retrieves a list of all the teams in the database.

GET "/teams/{teamID}" : retrieves the team with the passed ID if it exists.

POST "/teams" : adds a team to the database. Use the body of the request to enter data using the following format: "(STRING)team_name,(INT)year_of_establishment,(BOOLEAN)is_international"

PUT "/teams/{teamID}" : updates the existing team with the passed ID. Use the body of the request to enter data using the following format: "(STRING)team_name,(INT)year_of_establishment,(BOOLEAN)is_international"

GET "/players" : retrieves a list of all the players in the database.

GET "/players/{playerID}" : retrieves the player with the passed ID if it exists.

POST "/players" : adds a player to the database. Use the body of the request to enter data using the following format: "(STRING)player_name,(INT)year_of_birth,(INT)team_id"

PUT "/players/{playerID}" : updates an existing player with the passed ID. Use the body of the request to enter data using the following format: "(STRING)player_name,(INT)year_of_birth,(INT)team_id"

All data retrieved is in JSON format.
