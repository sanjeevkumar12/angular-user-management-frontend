import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit , Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { TokenStorageService } from '../../core/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  form : FormGroup;
  authError: string|null = null;

  constructor(@Inject(DOCUMENT) private document: any, private authService : AuthService,private formBuilder: FormBuilder,
              private tokenService: TokenStorageService, private router: Router
              ) { 
                this.document.body.classList.add('app-login');
                this.document.body.classList.add('p-0')
                this.form = this.formBuilder.group({
                email: ['', Validators.email],
                password: ['']
    });
  }

  ngOnInit(): void {
    
  }

  get f() { return this.form.controls; }

  login(){
    if(this.form.valid){
      this.authService.login(this.f.email.value, this.f.password.value).subscribe((res) => {
        this.tokenService.saveToken(res.token)
        this.tokenService.saveUser(res.user)
        this.router.navigate(['/'])
      }, response => {
        if(response.status==422){
          this.authError = response.error.errors.auth_error;
        }
      });
    }
  }
  ngOnDestroy(){
    this.document.body.classList.remove('app-login');
    this.document.body.classList.remove('p-0')
  }

}
