package com.tzn.football_manager.services;

import com.tzn.football_manager.entities.Player;
import com.tzn.football_manager.entities.Team;
import com.tzn.football_manager.repos.TeamRepo;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
@Service
public class TeamService {
    @Autowired
    TeamRepo teamRepo;


    public List<Team> findAllTeams() throws FetchNotFoundException{
        List<Team> teams = teamRepo.findAll();
        if(teamRepo.findAll().isEmpty()){
            throw new FetchNotFoundException("There are no teams in the list", teams);
        }
        return teams;
    }

    public Team findTeamByID(Long id) throws FetchNotFoundException {
        Optional<Team> myTeam = teamRepo.findById(id);
        if (myTeam.isEmpty()) {
            throw new FetchNotFoundException("Team: ", new Team());
        }
        return myTeam.get();
    }
    public Team findTeamByName(String name) throws FetchNotFoundException {
        Optional<Team> myTeam = teamRepo.findByName(name);
        if(myTeam.isEmpty()){
            throw new FetchNotFoundException("Team: ", new Team());
        }
        return myTeam.get();
    }

    public Team saveNewTeam(String teamData) {
        String[] teamInfo = teamData.split(",");
        Team team = new Team();
        team.setName(teamInfo[0]);
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
        for (String field : updatedTeamInfo) {
            String[] keyValue = field.split(":");
            String key = keyValue[0];
            String value = keyValue[1];

//            Door gebruik te maken van de switch kan je bijvoorbeeld "club_name:FC Nagele,established_in:1957" opgeven
//            Dit zou de club_name en established_in van de speler bijwerken, terwijl het "is_international" ongewijzigd blijft.
            switch (key) {
                case "club_name":
                    existingTeam.setName(value);
                    break;
                case "established_in":
                    existingTeam.setEstablishedIn(Integer.parseInt(value));
                    break;
                case "is_international":
                    Boolean isInternational = Boolean.parseBoolean(value);
                    break;
                default:
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid field: " + key);
            }
        }

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
    public void deleteAllTeams () throws FetchNotFoundException{
        List<Team> teams = teamRepo.findAll();
        if(teamRepo.findAll().isEmpty()){
            throw new FetchNotFoundException("There are no teams in the list", teams);
        }
        teamRepo.deleteAll();
    }
}
