import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
=======
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

import { AdminCustomersBack } from './admin-customers-back';

describe('AdminCustomersBack', () => {
  let service: AdminCustomersBack;

  beforeEach(() => {
<<<<<<< HEAD
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
=======
    TestBed.configureTestingModule({});
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
    service = TestBed.inject(AdminCustomersBack);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
