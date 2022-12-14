import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  data = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.login(this.data).subscribe((res) => {
      if (res.status === 'success') this.router.navigate(['/items']);
    });
  }
}
