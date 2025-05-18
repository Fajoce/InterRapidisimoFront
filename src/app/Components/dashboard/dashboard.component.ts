import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router'; 
import { AuthLogService } from '../../Services/auth-log.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userName: string = '';
  userId: string = '';
  esAdmin: boolean = false;

  constructor(private authService: AuthLogService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.esAdmin = this.authService.isAdmin();
    const decoded = this.authService.getDecodedToken();
    if (decoded) {
      this.userId = decoded.nameid;
    this.userName = decoded.given_name; 
    }
    
  }
  logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
}
