package com.tzn.football_manager.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table (name = "players")
@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "player_id_seq")
    @SequenceGenerator(name = "player_id_seq", sequenceName = "player_id_seq", allocationSize = 1)
    Long id;
    @Column(name = "name")
    String playerName;
    @Column(name = "year_of_birth")
    int birthYear;
    @ManyToOne
    @JoinColumn(name = "team_id")
    Team team;

}
