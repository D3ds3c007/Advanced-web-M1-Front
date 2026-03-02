import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
=======
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

import { AdminCustomersPage } from './admin-customers-page';

describe('AdminCustomersPage', () => {
  let component: AdminCustomersPage;
  let fixture: ComponentFixture<AdminCustomersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [AdminCustomersPage],
      providers: [provideHttpClient(), provideHttpClientTesting()],
=======
      imports: [AdminCustomersPage]
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCustomersPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
