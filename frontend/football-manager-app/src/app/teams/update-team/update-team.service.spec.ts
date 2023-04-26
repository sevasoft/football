import { TestBed } from '@angular/core/testing';

import { UpdateTeamService } from './update-team.service';

describe('UpdateTeamService', () => {
  let service: UpdateTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
