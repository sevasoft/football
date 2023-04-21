package com.tzn.football_manager.controllers;

import com.tzn.football_manager.entities.Team;
import com.tzn.football_manager.services.TeamService;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class TeamRestController {
    @Autowired
    TeamService teamService;

    @GetMapping("/teams")
    public List<Team> findAllTeams() {
        return teamService.findAllTeams();
    }

    @GetMapping("/teams/{teamID}")
    public ResponseEntity<Team> findTeamById(@PathVariable long teamID) throws FetchNotFoundException {
        ResponseEntity<Team> myResponse;
        try {
            myResponse = new ResponseEntity<>(teamService.findTeamByID(teamID), HttpStatus.OK);
        } catch (FetchNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
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

    @DeleteMapping("/teams")
    public ResponseEntity<Team> deleteAllTeams() {
        teamService.deleteAllTeams();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/teams/{teamID}")
    public ResponseEntity<Team> deleteTeamByID(@PathVariable Long teamID) {
        teamService.deleteTeamById(teamID);
        return ResponseEntity.ok().build();
    }
}
