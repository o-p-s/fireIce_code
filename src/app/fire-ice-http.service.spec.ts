import { TestBed, inject } from '@angular/core/testing';

import { FireIceHttpService } from './fire-ice-http.service';

describe('FireIceHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireIceHttpService]
    });
  });

  it('should be created', inject([FireIceHttpService], (service: FireIceHttpService) => {
    expect(service).toBeTruthy();
  }));
});
