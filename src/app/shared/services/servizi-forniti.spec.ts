import { TestBed } from '@angular/core/testing';

import { ServiziForniti } from './servizi-forniti';

describe('ServiziForniti', () => {
  let service: ServiziForniti;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiziForniti);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
