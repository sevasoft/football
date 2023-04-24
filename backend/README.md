Back-End Endpoints

Teams:

      GET "/teams" : retrieves a list of all the teams in the database.

      GET "/teams/{teamID}" : retrieves the team with the passed ID if it exists.

      GET "/teams/by_name/{teamID}" : retrieves the team with the passed name if it exists.

      POST "/teams" : adds a team to the database. Use the body of the request to enter data using the following format: "(STRING)team_name,(INT)year_of_establishment,(BOOLEAN)is_international"

      PUT "/teams/{teamID}" : updates the existing team with the passed ID. Use the body of the request to enter data using the following format: "(STRING)club_name,(INT)year_of_establishment,(BOOLEAN)is_international"

Door gebruik te maken van de switch in de PUT "/teams/{teamID}" kan je wijzigen op 'key' ipv alles te moeten opgeven. Wil je dus alléén de naam en jaartal wijzigen kan je "club_name:FC Nagele,established_in:1957" opgeven.
Dit zou de club_name en established_in van het team bijwerken, terwijl het "is_international" ongewijzigd blijft.
De key's in de switch zijn zijn zoals hierboven: "(STRING)club_name,(INT)year_of_establishment,(BOOLEAN)is_international"

      DEL "/teams" deletes all teams in the database.
      
      DEL "/teams/{teamID}" deletes the team with the passed ID in the database.
      
Players:
      
      GET "/players" : retrieves a list of all the players in the database.

      GET "/players/{playerID}" : retrieves the player with the passed ID if it exists.
      
      GET "/players/by_name/{playerName}" : retrieves the player with the passed name if it exists.

      POST "/players" : adds a player to the database. Use the body of the request to enter data using the following format: "(STRING)player_name,(INT)year_of_birth,(INT)team_id"

      PUT "/players/{playerID}" : updates an existing player with the passed ID. Use the body of the request to enter data using the following format: "(STRING)name,(INT)year_of_birth,(INT)team_id"

Door gebruik te maken van de switch in de PUT "/players/{playerID}" kan je wijzigen op 'key' ipv alles te moeten opgeven. 
Wil je dus alléén de naam of geboortejaar wijzigen kan je de een "name:Han Balsem" of de ander "year_of_birth:1957" of allebei "name:Han Balsem,year_of_birth:1985" opgeven.
Dit zou de naam en/of year_of_birth van de speler bijwerken, terwijl de rest ongewijzigd blijft.
De key's in de switch zijn zijn zoals hierboven: "(STRING)name,(INT)year_of_birth,(INT)team_id"

      DEL "/players" deletes all players in the database.
      
      DEL "/players/{playerID}" deletes the player with the passed ID in the database.
      
Matches:

      GET "/matches" : retrieves a list of all the matches in the database.

      GET "/matches/{matchID}" : retrieves the matches with the passed ID if it exists.

      GET "/matches/by_name/{matchName}" : retrieves the match with the passed name if it exists.

      POST "/matches" : adds a team to the database. Use the body of the request to enter data using the following format: "(STRING)team1,(STRING)team2,(int)goalsTeam1,(int)goalsTeam2,(DATE)matchDate"

      PUT "/matches/{matchID}" : updates the existing match with the passed ID. Use the body of the request to enter data using the following format: "(STRING)team1,(STRING)team2,(int)goalsTeam1,(int)goalsTeam2,(DATE)matchDate"

Door gebruik te maken van de switch in de PUT "/matches/{matchID}" kan je wijzigen op 'key' ipv alles te moeten opgeven. Wil je dus alléén team1 en goalsTeam1 wijzigen kan je "team1:DeMietjes,goalsTeam1:5" opgeven.
Dit zou de team1 en goalsTeam1 bijwerken, terwijl het de rest ongewijzigd blijft.
De key's in de switch zijn zijn zoals hierboven: "(STRING)team1,(STRING)team2,(int)goalsTeam1,(int)goalsTeam2,(DATE)matchDate"

      DEL "/matches" deletes all teams in the database.
      
      DEL "/matches/{matchID}" deletes the team with the passed ID in the database.
      

All data retrieved is in JSON format.
