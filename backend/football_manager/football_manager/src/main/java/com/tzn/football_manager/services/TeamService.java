package com.tzn.football_manager.services;

import com.tzn.football_manager.entities.Player;
import com.tzn.football_manager.entities.Team;
import com.tzn.football_manager.repos.TeamRepo;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;
@Service
public class TeamService {
    @Autowired
    TeamRepo teamRepo;


    public List<Team> findAllTeams() {
        if (teamRepo.findAll().isEmpty()) {
            System.out.println("List is empty!");
        }
        return teamRepo.findAll();
    }

    public Team findTeamByID(Long id) throws FetchNotFoundException {
        Optional<Team> myTeam = teamRepo.findById(id);
        if (myTeam.isEmpty()) {
            throw new FetchNotFoundException("Team: ", new Team());
        }
        return myTeam.get();
    }

    public Team saveNewTeam(String teamData) {
        String[] teamInfo = teamData.split(",");
        Team team = new Team();
        team.setTeamName(teamInfo[0]);
        team.setEstablishedIn(Integer.parseInt(teamInfo[1]));
        team.setInternational(Boolean.parseBoolean(teamInfo[2]));

        return teamRepo.save(team);
    }

    public Team updateTeam(Long teamId, String updatedTeamData) {
        Team existingTeam = teamRepo.findById(teamId).orElse(null);
        if (existingTeam == null) {
            return null;
        }
        String[] updatedTeamInfo = updatedTeamData.split(",");

        // bijwerken van de teamgegevens
        existingTeam.setTeamName(updatedTeamInfo[0]);
        existingTeam.setEstablishedIn(Integer.parseInt(updatedTeamInfo[1]));
        existingTeam.setInternational(Boolean.parseBoolean(updatedTeamInfo[2]));

        // opslaan van de bijgewerkte gegevens en retourneren van het bijgewerkte teamobject
        return teamRepo.save(existingTeam);
    }

    public TeamService(TeamRepo teamRepo) {
        this.teamRepo = teamRepo;
    }
    public void deleteTeamById (Long teamId) throws FetchNotFoundException{
        Optional<Team> myTeam = teamRepo.findById(teamId);
        if (myTeam.isEmpty()) {
            throw new FetchNotFoundException("Team: ", new Team());
        }
        teamRepo.deleteById(teamId);
    }
    public void deleteAllTeam () {
        if(teamRepo.findAll().isEmpty()){
            System.out.println("List is empty!");
        }
        teamRepo.deleteAll();
    }

}
