import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth-service';

const userName = 'test@test.com';
const password = 'test@test1234'
describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should #login return true', () => {
    expect(service.login(userName, password)).toBeTrue();
  });
  it('should #isAuthenticatedUser return true', (done:DoneFn) => {
    service.login(userName, password);
    expect(service.isAuthenticatedUser()).toBeTrue();
    done();
  });
  it('should #isAuthenticatedUser return false', (done:DoneFn) => {
    service.logout();
    expect(service.isAuthenticatedUser()).toBeFalse();
    done();
  });


});
