import { TestBed, inject } from '@angular/core/testing';

import { PlayersApiService } from './players-api.service';

describe('PlayersApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersApiService]
    });
  });

  it('should be created', inject([PlayersApiService], (service: PlayersApiService) => {
    expect(service).toBeTruthy();
  }));
});
