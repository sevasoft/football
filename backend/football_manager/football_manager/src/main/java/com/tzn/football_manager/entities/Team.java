package com.tzn.football_manager.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "teams")
@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "club_name")
    String name;
    @Column(name = "established_in")
    int establishedIn;
    @Column(name = "is_international")
    boolean isInternational;

}
