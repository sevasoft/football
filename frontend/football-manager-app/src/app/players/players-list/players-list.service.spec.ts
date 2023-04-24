import { TestBed } from '@angular/core/testing';

import { PlayersListService } from './players-list.service';

describe('PlayerService', () => {
  let service: PlayersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
