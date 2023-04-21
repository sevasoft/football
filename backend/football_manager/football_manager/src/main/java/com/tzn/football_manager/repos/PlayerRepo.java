package com.tzn.football_manager.repos;

import com.tzn.football_manager.entities.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface PlayerRepo extends JpaRepository<Player, Long> {
    public List<Player> findAll();

    public Optional<Player> findById(Long id);

    public Optional<Player> findByName(String name);
//    public List<Player> findPlayersByName(String name);

}
