package com.tzn.football_manager.repos;

import com.tzn.football_manager.entities.Player;
import com.tzn.football_manager.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TeamRepo extends JpaRepository<Team, Long> {
    public List<Team> findAll();

    public Optional<Team> findById(Long id);

    public Optional<Team> findByTeamName(String name);
}
