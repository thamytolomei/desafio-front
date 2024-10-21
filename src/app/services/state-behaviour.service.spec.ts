import { TestBed } from '@angular/core/testing';

import { StateBehaviourService } from './state-behaviour.service';

describe('StateBehaviourService', () => {
  let service: StateBehaviourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateBehaviourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
