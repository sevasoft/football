package com.tzn.football_manager.controllers;

import java.util.List;

import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tzn.football_manager.entities.Player;
import com.tzn.football_manager.services.PlayerService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PlayerRestController {
    @Autowired
    PlayerService playerService;

    @GetMapping("/players")
    public List<Player> findAllPlayers() {
        return playerService.findAllPlayers();
    }

    @GetMapping("/players/{playerID}")
    public ResponseEntity<Player> findPlayerById(@PathVariable long playerID) throws FetchNotFoundException {
        ResponseEntity<Player> myResponse;
        try {
            myResponse = new ResponseEntity<>(playerService.findPlayerByID(playerID), HttpStatus.OK);
        } catch (FetchNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return myResponse;
    }
    @GetMapping("/players/by_name/{playerName}")
    public ResponseEntity<Player> findPlayerByName(@PathVariable String playerName) throws FetchNotFoundException {
        ResponseEntity<Player> myResponse;
        try {
            myResponse = new ResponseEntity<>(playerService.findPlayerByName(playerName), HttpStatus.OK);
        } catch (FetchNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return myResponse;
    }

//    @GetMapping("/players/by_name_list/{playerName}")
//    public List<Player> findPlayerByName(@PathVariable String playerName) throws FetchNotFoundException {
//        List<Player> myResponse = playerService.findPlayersByName(playerName) ;
////        try {
////            myResponse = new ResponseEntity<>(playerService.findPlayersByName(playerName), HttpStatus.OK);
////        } catch (FetchNotFoundException e) {
////            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////        }
//        return myResponse;
//    }

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
        System.out.println("method called");
        playerService.deleteAllPlayers();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/players/{playerID}")
    public ResponseEntity<Player> deletePlayerByID(@PathVariable Long playerID) {
        playerService.deletePlayerByID(playerID);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
