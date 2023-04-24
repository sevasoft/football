package com.tzn.football_manager.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table (name = "players")
@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "name")
    String name;
    @Column(name = "year_of_birth")
    int birthYear;
    @ManyToOne
    @JoinColumn(name = "team_id")
    Team team;

}
