package com.tzn.football_manager.services;

import com.tzn.football_manager.entities.Match;
import com.tzn.football_manager.entities.Player;
import com.tzn.football_manager.entities.Team;
import com.tzn.football_manager.repos.MatchRepo;
import com.tzn.football_manager.repos.TeamRepo;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class MatchService {
    @Autowired
    MatchRepo matchRepo;


    public List<Match> findAllMatches(){
        List<Match> matches = matchRepo.findAll();
        if(matchRepo.findAll().isEmpty()){
            throw new FetchNotFoundException("There are no matches in the list", matches);
        }
        return matches;
    }
    public Match findMatchByID(Long id) throws FetchNotFoundException {
        Optional<Match> myMatch = matchRepo.findById(id);
        if(myMatch.isEmpty()){
            throw new FetchNotFoundException("Match: ", new Match());
        }
        return myMatch.get();
    }

    public Optional<List<Match>> findMatchByTeamName(String name) throws FetchNotFoundException {
        Optional<List<Match>> matches = matchRepo.findByTeam1OrTeam2(name);
        if(matches.isEmpty()){
            throw new FetchNotFoundException("Matches not found for team name: " + name, new ArrayList<>());
        }
        return matchRepo.findByTeam1OrTeam2(name);
    }



    public Match saveNewMatch(String matchData) throws ParseException {

        String[] matchInfo = matchData.split(",");
        Match match = new Match();
        match.setTeam1(matchInfo[0]);
        match.setTeam2(matchInfo[1]);
        match.setGoalsTeam1(Integer.parseInt(matchInfo[2]));
        match.setGoalsTeam2(Integer.parseInt(matchInfo[3]));

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        match.setMatchDate(dateFormat.parse(matchInfo[4]));

        return matchRepo.save(match);
    }

    public Match updateMatch(Long matchId, String updatedMatchData) throws ResponseStatusException {
        Match existingMatch = matchRepo.findById(matchId).orElse(null);

        String[] updatedMatchInfo = updatedMatchData.split(",");

        // bijwerken van de player gegevens
        existingMatch.setTeam1(updatedMatchInfo[0]);
        existingMatch.setTeam1(updatedMatchInfo[1]);
        existingMatch.setGoalsTeam1(Integer.parseInt(updatedMatchInfo[2]));
        existingMatch.setGoalsTeam1(Integer.parseInt(updatedMatchInfo[3]));

        // opslaan van de bijgewerkte gegevens en retourneren van het bijgewerkte matchobject
        return matchRepo.save(existingMatch);
    }

    public void deleteMatchByID(Long id) throws FetchNotFoundException {
        Optional<Match> myMatch = matchRepo.findById(id);
        if (myMatch.isEmpty()) {
            throw new FetchNotFoundException("Match with ID: ", id + "not found");
        }
        matchRepo.deleteById(id);
    }

    public void deleteAllMatches() throws FetchNotFoundException{
        List<Match> matches = matchRepo.findAll();
        if(matchRepo.findAll().isEmpty()){
            throw new FetchNotFoundException("There are no matches in the list", matches);
        }
        matchRepo.deleteAll();
    }

}
