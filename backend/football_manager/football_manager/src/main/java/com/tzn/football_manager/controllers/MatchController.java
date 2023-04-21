package com.tzn.football_manager.controllers;

import com.tzn.football_manager.entities.Match;
import com.tzn.football_manager.services.MatchService;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
//    @PostMapping("/matches/{team1_ID}/{team2_ID}")
//    public ResponseEntity<Match> playAMatch(@PathVariable long team1_ID, @PathVariable long team2_ID){
//
//    }
}
