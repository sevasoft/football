package com.tzn.football_manager.repos;

import com.tzn.football_manager.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MatchRepo extends JpaRepository <Match, Long> {

    List<Match> findAll();

    Optional<Match> findById(Long matchID);

    @Query("SELECT m FROM Match m WHERE m.team1 = :teamName OR m.team2 = :teamName")
    Optional<List<Match>> findByTeam1OrTeam2(@Param("teamName") String teamName);

}
