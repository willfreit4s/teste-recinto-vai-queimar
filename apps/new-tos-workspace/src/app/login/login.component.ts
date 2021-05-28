import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.form = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  login() {
    const val = this.form.value;
    if (val.user && val.pass) {
      this.authService.auth(val.user, val.pass)
        .subscribe(res => {
          if (res.result.token) {
            this.authService.setToken(res.result.token)
            this.router.navigateByUrl('')
          }
        }, err => {
          this.authService.clearToken()
        })
    }
  }
}
