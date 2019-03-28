import { TestBed } from '@angular/core/testing';

import { YoutubedbService } from './youtubedb.service';

describe('YoutubedbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubedbService = TestBed.get(YoutubedbService);
    expect(service).toBeTruthy();
  });
});
