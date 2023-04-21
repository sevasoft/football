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
            throw new FetchNotFoundException("Team: ", new Team());
        }
        return myPlayer.get();
    }
    public Player saveNewPlayer(String playerData){
        String[] playerInfo = playerData.split(",");
        Player player = new Player();
        player.setPlayerName(playerInfo[0]);
        player.setBirthYear(Integer.parseInt(playerInfo[1]));
        Long teamId = Long.parseLong(playerInfo[2]);
        Team team = teamRepo.findById(teamId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.BAD_REQUEST, "Team with id " + teamId + " not found"));
        player.setTeam(team);

        return playerRepo.save(player);
    }

    public Player updatePlayer(Long playerId, String updatedPlayerData) throws ResponseStatusException{
        Player existingPlayer = playerRepo.findById(playerId).orElse(null);
        if (existingPlayer == null) {
            return null;
        }
        String[] updatedPlayerInfo = updatedPlayerData.split(",");

        // bijwerken van de player gegevens
        existingPlayer.setPlayerName(updatedPlayerInfo[0]);
        existingPlayer.setBirthYear(Integer.parseInt(updatedPlayerInfo[1]));

        Long teamId = Long.parseLong(updatedPlayerInfo[2]);
        Team team = teamRepo.findById(teamId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.BAD_REQUEST, "Team with id " + teamId + " not found"));
        existingPlayer.setTeam(team);

        // opslaan van de bijgewerkte gegevens en retourneren van het bijgewerkte playerobject
        return playerRepo.save(existingPlayer);
    }


    public void deletePlayerByID(Long id) throws FetchNotFoundException {
        Optional<Player> myPlayer = playerRepo.findById(id);
//        if (myPlayer.isEmpty()) {
//            throw new FetchNotFoundException("Player with ID: ", id + "not found");
//        }
        playerRepo.deleteById(id);
    }

    public void deleteAllPlayers() throws FetchNotFoundException{
//        List<Player> players = playerRepo.findAll();
//        if(playerRepo.findAll().isEmpty()){
//            throw new FetchNotFoundException("There are no players in the list", players);
//        }
        playerRepo.deleteAll();
    }
}
