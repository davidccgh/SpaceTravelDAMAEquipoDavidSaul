import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLogin } from './auth-login';

describe('AuthLogin', () => {
  let component: AuthLogin;
  let fixture: ComponentFixture<AuthLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLogin],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle between login and signup modes', () => {
    expect(component.isLoginMode).toBe(true);
    component.toggleMode();
    expect(component.isLoginMode).toBe(false);
    component.toggleMode();
    expect(component.isLoginMode).toBe(true);
  });

  it('should reset forms when toggling mode', () => {
    component.loginData.email = 'test@example.com';
    component.toggleMode();
    expect(component.loginData.email).toBe('');
  });
});
