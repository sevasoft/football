import { TestBed } from '@angular/core/testing';

import { PlayerCreationService } from './player-creation.service';

describe('PlayerCreationService', () => {
  let service: PlayerCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
