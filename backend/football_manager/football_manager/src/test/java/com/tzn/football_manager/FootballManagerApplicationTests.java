package com.tzn.football_manager;

import com.tzn.football_manager.entities.Match;
import com.tzn.football_manager.entities.Player;
import com.tzn.football_manager.repos.MatchRepo;
import com.tzn.football_manager.repos.PlayerRepo;
import com.tzn.football_manager.services.MatchService;
import com.tzn.football_manager.services.PlayerService;
import org.hibernate.FetchNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Assertions;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.*;

import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class FootballManagerApplicationTests {

    @Mock
    private PlayerRepo playerRepo;

    @InjectMocks
    private PlayerService playerService;

	FootballManagerApplicationTests(MatchService matchService, MatchRepo matchRepo) {
		this.matchService = matchService;
		this.matchRepo = matchRepo;
	}

	@Test
    public void testFindPlayerById() throws FetchNotFoundException {
        // Define the input and expected output of the method
        Long playerId = 1L;
        Player expectedPlayer = new Player();
        expectedPlayer.setId(playerId);

        // Mock the repository's findById method to return the expected player
        Mockito.when(playerRepo.findById(playerId))
                .thenReturn(Optional.of(expectedPlayer));

        // Call the service method and assert the result
        Player actualPlayer = playerService.findPlayerByID(playerId);
        assertEquals(expectedPlayer, actualPlayer);
    }

    @Test
    public void testFindPlayerByIdNotFound() {
        // Define the input of the method
        Long playerId = 1L;

        // Mock the repository's findById method to return an empty optional
        Mockito.when(playerRepo.findById(playerId))
                .thenReturn(Optional.empty());

        // Call the service method and assert that it throws a FetchNotFoundException
        Assertions.assertThrows(FetchNotFoundException.class, () -> playerService.findPlayerByID(playerId));
    }

    @Autowired
    private MatchService matchService;

    @MockBean
    private MatchRepo matchRepo;

    @Test
    void testFindMatchByTeamName() throws FetchNotFoundException {
        Match match1 = new Match();
        match1.setTeam1("team1");
        match1.setTeam2("team2");
        match1.setMatchDate(new Date());

        Match match2 = new Match();
        match2.setTeam1("team1");
        match2.setTeam2("team2");
        match2.setMatchDate(new Date());

        List<Match> expectedMatches = Arrays.asList(match1, match2);

        Mockito.when(matchRepo.findByTeam1OrTeam2(Mockito.anyString())).thenReturn(Optional.of(expectedMatches));

        Optional<List<Match>> actualMatches = matchService.findMatchByTeamName("team1");

        assertTrue(actualMatches.isPresent());
        assertEquals(expectedMatches.size(), actualMatches.get().size());
        assertEquals(expectedMatches.get(0), actualMatches.get().get(0));
        assertEquals(expectedMatches.get(1), actualMatches.get().get(1));
    }

}
