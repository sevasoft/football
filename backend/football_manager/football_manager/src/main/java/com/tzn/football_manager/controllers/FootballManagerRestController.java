package com.tzn.football_manager.controllers;
import com.tzn.football_manager.entities.Player;
import com.tzn.football_manager.entities.Team;
import com.tzn.football_manager.services.PlayerService;
import com.tzn.football_manager.services.TeamService;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
@RestController
public class FootballManagerRestController {
    @Autowired
    TeamService teamService;
    @Autowired
    PlayerService playerService;

    @GetMapping("/teams")
    public List<Team> findAllTeams() {return teamService.findAllTeams();}

    @GetMapping("/teams/{teamID}")
    public ResponseEntity<Team> findTeamById(@PathVariable long teamID) throws FetchNotFoundException {
        ResponseEntity<Team> myResponse;
        try {
            myResponse = new ResponseEntity<>(teamService.findTeamByID(teamID), HttpStatus.OK);
        } catch (FetchNotFoundException e) {return new ResponseEntity<>(HttpStatus.NOT_FOUND);}
        return myResponse;
    }
    @PostMapping("/teams")
    public ResponseEntity<Team> saveNewTeam(@RequestBody String teamData) {
        Team team = teamService.saveNewTeam(teamData);
        return new ResponseEntity<Team>(team, HttpStatus.OK);
    }
    @PutMapping("/teams/{teamID}")
    public ResponseEntity<Team> updateTeam(@PathVariable long teamID, @RequestBody String updateTeamData) {
        Team teamToBeUpdated = teamService.updateTeam(teamID, updateTeamData);
        return new ResponseEntity<Team>(teamToBeUpdated, HttpStatus.OK);
    }

    @GetMapping("/players")
    public List<Player> findAllPlayers() {return playerService.findAllPlayers();}

    @GetMapping("/players/{playerID}")
    public ResponseEntity<Player> findPlayerById(@PathVariable long playerID) throws FetchNotFoundException {
        ResponseEntity<Player> myResponse;
        try {
            myResponse = new ResponseEntity<>(playerService.findPlayerByID(playerID), HttpStatus.OK);
        } catch (FetchNotFoundException e) {return new ResponseEntity<>(HttpStatus.NOT_FOUND);}
        return myResponse;
    }
    @PostMapping("/players")
    public ResponseEntity<Player> saveNewPlayer(@RequestBody String playerData) {
        Player player = playerService.saveNewPlayer(playerData);
        return new ResponseEntity<Player>(player, HttpStatus.OK);
    }
    @PutMapping("/players/{playerID}")
    public ResponseEntity<Player> updatePlayer(@PathVariable long playerID, @RequestBody String updatePlayerData) {
        Player playerToBeUpdated = playerService.updatePlayer(playerID, updatePlayerData);
        return new ResponseEntity<Player>(playerToBeUpdated, HttpStatus.OK);
    }
}
