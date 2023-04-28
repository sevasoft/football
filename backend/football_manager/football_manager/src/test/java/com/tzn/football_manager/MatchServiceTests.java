package com.tzn.football_manager;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.tzn.football_manager.entities.Match;
import com.tzn.football_manager.repos.MatchRepo;
import com.tzn.football_manager.services.MatchService;

import org.hibernate.FetchNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.server.ResponseStatusException;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class MatchServiceTests {

    @Mock
    private MatchRepo matchRepository;

    @InjectMocks
    private MatchService matchService;

    private Match match;

    @BeforeEach
    void setUp() {
        match = new Match();
        match.setId(1L);
        match.setTeam1("Team A");
        match.setTeam2("Team B");
        match.setGoalsTeam1(1);
        match.setGoalsTeam2(2);
        match.setMatchDate(new Date());
    }

    @Test
    @DisplayName("Test findAllMatches when there are matches")
    void testFindAllMatches() throws FetchNotFoundException {
        List<Match> matches = new ArrayList<>();
        matches.add(match);
        // Mock the repository method to return the list of matches
        when(matchRepository.findAll()).thenReturn(matches);
        // Call the service method
        List<Match> result = matchService.findAllMatches();
        // Check if the result is not null and contains the match object
        assertNotNull(result);
        assertFalse(result.isEmpty());
        assertEquals(1, result.size());
        assertEquals(match, result.get(0));
    }

    @Test
    @DisplayName("Test findAllMatches when there are no matches")
    void testFindAllMatchesWithNoMatches() {
        // Mock the repository method to return an empty list
        when(matchRepository.findAll()).thenReturn(new ArrayList<>());
        // Call the service method
        assertThrows(FetchNotFoundException.class, () -> matchService.findAllMatches());
    }

    @Test
    @DisplayName("Test findMatchByID with valid ID")
    void testFindMatchByIDWithValidId() throws FetchNotFoundException {
        // Mock the repository method to return the match object
        when(matchRepository.findById(1L)).thenReturn(Optional.of(match));
        // Call the service method
        Match result = matchService.findMatchByID(1L);
        // Check if the result is not null and equals to the match object
        assertNotNull(result);
        assertEquals(match, result);
    }

    @Test
    @DisplayName("Test findMatchByID with invalid ID")
    void testFindMatchByIDWithInvalidId() {
        // Mock the repository method to return an empty optional
        when(matchRepository.findById(1L)).thenReturn(Optional.empty());
        // Call the service method and check if it throws an exception
        assertThrows(FetchNotFoundException.class, () -> matchService.findMatchByID(1L));
    }

    @Test
    void testFindMatchByTeamName() throws FetchNotFoundException {
        List<Match> matches = new ArrayList<>();
        Match match1 = new Match();
        Match match2 = new Match();
        matches.add(match1);
        matches.add(match2);
        when(matchRepository.findByTeam1OrTeam2("test")).thenReturn(Optional.of(matches));
        Optional<List<Match>> result = matchService.findMatchByTeamName("test");
        assertEquals(matches, result.get());
    }

    @Test
    void testFindMatchByTeamNameThrowsFetchNotFoundException() throws FetchNotFoundException {
        assertThrows(FetchNotFoundException.class, () -> {
            when(matchRepository.findByTeam1OrTeam2("test")).thenReturn(Optional.empty());
            matchService.findMatchByTeamName("test");
        });
    }

    @Test
    void testSaveNewMatch() throws ParseException {
        String matchData = "team1,team2,1,2,2023-04-28";
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = dateFormat.parse("2023-04-28");
        Match match = new Match();
        match.setTeam1("team1");
        match.setTeam2("team2");
        match.setGoalsTeam1(1);
        match.setGoalsTeam2(2);
        match.setMatchDate(date);
        when(matchRepository.save(match)).thenReturn(match);
        Match result = matchService.saveNewMatch(matchData);
        assertEquals(match, result);
    }

    @Test
    void testUpdateMatch() throws ResponseStatusException {
        Match match = new Match();
        match.setId(1L);
        match.setTeam1("team1");
        match.setTeam2("team2");
        match.setGoalsTeam1(1);
        match.setGoalsTeam2(2);
        String updatedMatchData = "team1:DeMietjes,goalsTeam1:5";
        when(matchRepository.findById(1L)).thenReturn(Optional.of(match));
        when(matchRepository.save(match)).thenReturn(match);
        Match result = matchService.updateMatch(1L, updatedMatchData);
    }

    @Test
    public void testDeleteMatchByID() throws FetchNotFoundException {
        // create a new match
        Match match = new Match();
        match.setTeam1("team1");
        match.setTeam2("team2");
        match.setGoalsTeam1(2);
        match.setGoalsTeam2(1);
        matchRepository.save(match);

        // delete the match
        Long matchId = match.getId();
        when(matchRepository.findById(matchId)).thenReturn(Optional.of(match));
        matchService.deleteMatchByID(matchId);

        // verify that the match has been deleted
        verify(matchRepository, times(1)).deleteById(matchId);
    }



    @Test
    public void testDeleteAllMatches() throws FetchNotFoundException {
        // Check if there are any matches in the database
        List<Match> matches = matchRepository.findAll();
        if (matches.isEmpty()) {
            // If there are no matches, there is nothing to delete
            return;
        }

        // create some new matches
        Match match1 = new Match();
        match.setTeam1("team1");
        match.setTeam2("team2");
        match1.setGoalsTeam1(2);
        match1.setGoalsTeam2(1);
        matchRepository.save(match1);

        Match match2 = new Match();
        match2.setGoalsTeam1(3);
        match2.setGoalsTeam2(2);
        matchRepository.save(match2);

        // delete all the matches
        matchService.deleteAllMatches();

        // verify that all the matches have been deleted
        matches = matchRepository.findAll();
        assertTrue(matches.isEmpty());
    }


}
