package com.tzn.football_manager.controllers;

import com.tzn.football_manager.entities.Player;
import com.tzn.football_manager.services.PlayerService;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class PlayerRestController {

    @RestController
    public class TeamRestController {

        @Autowired
        PlayerService playerService;

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
        @DeleteMapping("/players")
        public ResponseEntity<Player> deleteAllPlayers() {
            Player player = playerService.deleteAllPlayers();
            return new ResponseEntity<>(HttpStatus.OK);
        }

        @DeleteMapping("/players/{id}")
        public ResponseEntity<?> deleteTeambyID(@PathVariable Long playerID) {
            Player player = playerService.deleteByID(playerID);
            return ResponseEntity.ok().build();
        }
    }

}