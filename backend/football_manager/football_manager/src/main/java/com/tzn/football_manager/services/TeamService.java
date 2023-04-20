package com.tzn.football_manager.services;

import com.tzn.football_manager.entities.Team;
import com.tzn.football_manager.repos.TeamRepo;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TeamService {
    @Autowired
    TeamRepo teamRepo;

    public List<Team> findAllTeams(){
        if(teamRepo.findAll().isEmpty()){
            System.out.println("List is empty!");
        }
        return teamRepo.findAll();
    }
    public Team findTeamByID(Long id) throws FetchNotFoundException {
        Optional<Team> myTeam = teamRepo.findById(id);
        if(myTeam.isEmpty()){
            throw new FetchNotFoundException("Team: ", new Team());
        }
        return myTeam.get();
    }
    public Team saveNewTeam(String teamData){
        String[] teamInfo = teamData.split(",");
        Team team = new Team();
        team.setTeamName(teamInfo[0]);
        team.setEstablishedIn(Integer.parseInt(teamInfo[1]));
        team.setInternational(Boolean.parseBoolean(teamInfo[2]));

        return teamRepo.save(team);
    }

}
