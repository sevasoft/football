package com.tzn.football_manager.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "teams")
@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "team_id_seq")
    @SequenceGenerator(name = "team_id_seq", sequenceName = "team_id_seq", allocationSize = 1)
    Long id;
    @Column(name = "club_name")
    String teamName;
    @Column(name = "established_in")
    int establishedIn;
    @Column(name = "is_international")
    boolean isInternational;

}
