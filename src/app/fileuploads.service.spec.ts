import { TestBed } from '@angular/core/testing';

import { FileuploadsService } from './fileuploads.service';

describe('FileuploadsService', () => {
  let service: FileuploadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileuploadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
