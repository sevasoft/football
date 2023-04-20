package com.tzn.football_manager.services;

import com.tzn.football_manager.entities.Player;
import com.tzn.football_manager.entities.Team;
import com.tzn.football_manager.repos.PlayerRepo;
import com.tzn.football_manager.repos.TeamRepo;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public class PlayerService {
    @Autowired
    PlayerRepo playerRepo;
    @Autowired
    TeamRepo teamRepo;

    public List<Player> findAllPlayers(){
        if(playerRepo.findAll().isEmpty()){
            System.out.println("List is empty!");
        }
        return playerRepo.findAll();
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
        Team team = teamRepo.findById(teamId).orElse(null);
        if (team == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Team with id " + teamId + " not found");
        }
        player.setTeam(team);

        return playerRepo.save(player);
    }
}
