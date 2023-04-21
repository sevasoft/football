package com.tzn.football_manager.repos;

import com.tzn.football_manager.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MatchRepo extends JpaRepository <Match, Long> {

    List<Match> findAll();

    Optional<Match> findById(Long matchID);

//    Optional<Match> findByName(String name);
}
