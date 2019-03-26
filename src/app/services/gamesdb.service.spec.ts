import { TestBed } from '@angular/core/testing';

import { GamesdbService } from './gamesdb.service';

describe('GamesdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesdbService = TestBed.get(GamesdbService);
    expect(service).toBeTruthy();
  });
});
