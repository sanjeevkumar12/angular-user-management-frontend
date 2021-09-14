import { Component, OnInit , Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { TokenStorageService } from '../../core/services/token-storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;
  authError: string|null = null;

  constructor(private renderer: Renderer2, private authService : AuthService,private formBuilder: FormBuilder,
              private tokenService: TokenStorageService, private router: Router
              ) { 
    this.renderer.addClass(document.body, 'app-login');
    this.renderer.addClass(document.body,'p-0')
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: [''],
      confirm_password: [''],
      first_name: [''],
      last_name: [''],
    });
  }

  ngOnInit(): void {
  }
  get f() { return this.form.controls; }

  register(){
    if(this.form.valid){
      this.authService.register(this.f.email.value, this.f.password.value, this.f.confirm_password.value, this.f.first_name.value, this.f.last_name.value).subscribe((res) => {
        //this.tokenService.saveToken(res.token)
        //this.tokenService.saveUser(res.user)
        //this.router.navigate(['/'])
      }, response => {
        if(response.status==422){
          this.authError = response.error.errors.auth_error;
        }
      });
    }
  }

}