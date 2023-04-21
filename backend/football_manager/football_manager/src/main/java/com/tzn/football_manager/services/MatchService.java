package com.tzn.football_manager.services;

import com.tzn.football_manager.entities.Match;
import com.tzn.football_manager.entities.Player;
import com.tzn.football_manager.entities.Team;
import com.tzn.football_manager.repos.MatchRepo;
import org.hibernate.FetchNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
