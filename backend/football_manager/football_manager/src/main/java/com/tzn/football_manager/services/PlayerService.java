package com.tzn.football_manager.services;

import com.tzn.football_manager.entities.Player;
import com.tzn.football_manager.entities.Team;
import com.tzn.football_manager.repos.PlayerRepo;
import com.tzn.football_manager.repos.TeamRepo;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {
    @Autowired
    PlayerRepo playerRepo;
    @Autowired
    TeamRepo teamRepo;

    public List<Player> findAllPlayers(){
        List<Player> players = playerRepo.findAll();
        if(playerRepo.findAll().isEmpty()){
            throw new FetchNotFoundException("There are no players in the list", players);
        }
        return players;
    }
    public Player findPlayerByID(Long id) throws FetchNotFoundException {
        Optional<Player> myPlayer = playerRepo.findById(id);
        if(myPlayer.isEmpty()){
            throw new FetchNotFoundException("Player: ", new Player());
        }
        return myPlayer.get();
    }

    public Player findPlayerByName(String name) throws FetchNotFoundException {
        Optional<Player> myPlayer = playerRepo.findByName(name);
        if(myPlayer.isEmpty()){
            throw new FetchNotFoundException("Player: ", new Player());
        }
        return myPlayer.get();
    }

//    public List<Player> findPlayersByName(String name) throws FetchNotFoundException {
//
//        List<Player> myPlayerList = playerRepo.findPlayersByName(name);
//        if(myPlayerList.isEmpty()){
//            throw new FetchNotFoundException("Player: ", new Player());
//        }
//        return myPlayerList;
//    }
    public Player saveNewPlayer(String playerData){

        String[] playerInfo = playerData.split(",");
        Player player = new Player();
        player.setName(playerInfo[0]);
        player.setBirthYear(Integer.parseInt(playerInfo[1]));

        Long teamId = null;
        if(!playerInfo[2].equalsIgnoreCase("null")){
            teamId = Long.parseLong(playerInfo[2]);
            Team team = teamRepo.findById(teamId).get();
            player.setTeam(team);
        }
        return playerRepo.save(player);
    }

    public Player updatePlayer(Long playerId, String updatedPlayerData) throws ResponseStatusException{
        Player existingPlayer = playerRepo.findById(playerId).orElse(null);
        if (existingPlayer == null) {
            return null;
        }
        String[] updatedPlayerInfo = updatedPlayerData.split(",");

        // bijwerken van de player gegevens
        for (String field : updatedPlayerInfo) {
            String[] keyValue = field.split(":");
            String key = keyValue[0];
            String value = keyValue[1];

//            Door gebruik te maken van de switch kan je bijvoorbeeld "name:Johan Cruijff,year_of_birth:1947" opgeven
//            Dit zou de "name" en "year_of_birth" van de speler bijwerken, terwijl het "team_id" ongewijzigd blijft.
            switch (key) {
                case "name":
                    existingPlayer.setName(value);
                    break;
                case "year_of_birth":
                    existingPlayer.setBirthYear(Integer.parseInt(value));
                    break;
                case "team_id":
                    Long teamId = Long.parseLong(value);
                    Team team = teamRepo.findById(teamId).orElseThrow(() ->
                            new ResponseStatusException(HttpStatus.BAD_REQUEST, "Team with id " + teamId + " not found"));
                    existingPlayer.setTeam(team);
                    break;
                default:
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid field: " + key);
            }
        }
//      opslaan van de bijgewerkte gegevens en retourneren van het bijgewerkte playerobject
        return playerRepo.save(existingPlayer);
    }


    public void deletePlayerByID(Long id) throws FetchNotFoundException {
        Optional<Player> myPlayer = playerRepo.findById(id);
        if (myPlayer.isEmpty()) {
            throw new FetchNotFoundException("Player with ID: ", id + "not found");
        }
        playerRepo.deleteById(id);
    }

    public void deleteAllPlayers() throws FetchNotFoundException{
        List<Player> players = playerRepo.findAll();
        if(playerRepo.findAll().isEmpty()){
            throw new FetchNotFoundException("There are no players in the list", players);
        }
        playerRepo.deleteAll();
    }
}
