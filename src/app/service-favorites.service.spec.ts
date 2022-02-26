import { TestBed } from '@angular/core/testing';

import { ServiceFavoritesService } from './service-favorites.service';

describe('ServiceFavoritesService', () => {
  let service: ServiceFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
