package com.tzn.football_manager.entities;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Table (name = "matches")
@Entity
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "team1_name")
    String team1;

    @Column(name = "team2_name")
    String team2;

    @Column(name = "team1_goals")
    int goalsTeam1;

    @Column(name = "team2_goals")
    int goalsTeam2;

    @Column(name = "date_match")
    Date matchDate;
}
