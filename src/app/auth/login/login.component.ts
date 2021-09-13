import { Component, OnInit , Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { TokenStorageService } from '../../core/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  authError: string|null = null;

  constructor(private renderer: Renderer2, private authService : AuthService,private formBuilder: FormBuilder,
              private tokenService: TokenStorageService, private router: Router
              ) { 
    this.renderer.addClass(document.body, 'app-login');
    this.renderer.addClass(document.body,'p-0')
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

}
