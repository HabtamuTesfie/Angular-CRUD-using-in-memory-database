import { TestBed } from '@angular/core/testing';

import { ShareService } from 'src/app/srv/share.service';

describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule
  ({

  }));

  it('should be created', () => {
    const service: ShareService = TestBed.get(ShareService);
    expect(service).toBeTruthy();
  });
});
