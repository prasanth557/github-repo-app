import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;
  let spy: { calls: { reset: () => void; }; };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        AuthService,
        Router,
        // other dependencies
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

     spyOn(authService, 'login').and.returnValue(200);
  });

  it('should set errorMsg if username is empty', () => {
    component.username = '';
    component.password = '1234';
    component.login();
    expect(component.errorMsg).toBe('Username is required');
  });

  it('should set errorMsg if password is empty', () => {
    component.username = 'prash';
    component.password = '';
    component.login();
    expect(component.errorMsg).toBe('Password is required');
  });

  it('should navigate to home if login is successful', () => {  
    // Spy on the navigate method of the Router service
    const navigateSpy = spyOn(router, 'navigate');
  
    component.username = 'validUsername';
    component.password = 'validPassword';
    component.login();
  
    expect(component.errorMsg).toBe('');
    
    // Use the toHaveBeenCalledWith matcher on the spy object
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });
});
