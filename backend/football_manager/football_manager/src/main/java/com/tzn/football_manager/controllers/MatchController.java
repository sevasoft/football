package com.tzn.football_manager.controllers;

import com.tzn.football_manager.entities.Match;
import com.tzn.football_manager.services.MatchService;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
public class MatchController {
    @Autowired
    MatchService matchService;

    @GetMapping("/matches")
    public List<Match> findAllMatches() {
        return matchService.findAllMatches();
    }

    @GetMapping("/matches/{matchID}")
    public ResponseEntity<Match> findMatchByID(@PathVariable long matchID) throws FetchNotFoundException {
        ResponseEntity<Match> myResponse;
        try {
            myResponse = new ResponseEntity<>(matchService.findMatchByID(matchID), HttpStatus.OK);
        } catch (FetchNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return myResponse;
    }
//    @GetMapping("/matches/by_name/{matchName}")
//    public ResponseEntity<List<Match>> findMatchByTeamName(@PathVariable String matchName) throws FetchNotFoundException {
//        ResponseEntity<List<Match>> myResponse;
//        try {
//            myResponse = new ResponseEntity<>(matchService.findMatchByTeamName(matchName), HttpStatus.OK);
//        } catch (FetchNotFoundException e) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return myResponse;
//    }
    @GetMapping("/matches/by_name/{matchName}")
    public ResponseEntity<List<Match>> findMatchByTeamName(@PathVariable String matchName) {
        Optional<List<Match>> matches = matchService.findMatchByTeamName(matchName);
        if (matches.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(matches.get());
    }


    @PostMapping("/matches")
    public ResponseEntity<Match> saveNewMatch(@RequestBody String matchData) throws ParseException {
        Match match = matchService.saveNewMatch(matchData);
        return new ResponseEntity<Match>(match, HttpStatus.OK);
    }

    @PutMapping("/matches/{matchID}")
    public ResponseEntity<Match> updateMatch(@PathVariable long matchID, @RequestBody String updateMatchData) {
        Match matchToBeUpdated = matchService.updateMatch(matchID, updateMatchData);
        return new ResponseEntity<Match>(matchToBeUpdated, HttpStatus.OK);
    }

    @DeleteMapping("/matches")
    public ResponseEntity<Match> deleteAllMatch() {
        System.out.println("method called");
        matchService.deleteAllMatches();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/matches/{matchID}")
    public ResponseEntity<Match> deleteMatchByID(@PathVariable Long matchID) {
        matchService.deleteMatchByID(matchID);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
