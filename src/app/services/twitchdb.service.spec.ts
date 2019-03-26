import { TestBed } from '@angular/core/testing';

import { TwitchdbService } from './twitchdb.service';

describe('TwitchdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitchdbService = TestBed.get(TwitchdbService);
    expect(service).toBeTruthy();
  });
});
