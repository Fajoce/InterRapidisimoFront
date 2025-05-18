import { Component, OnInit } from '@angular/core';
import { AuthLogService } from '../../Services/auth-log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  imports: [],
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css'
})
export class LogOutComponent implements OnInit {
  constructor(private authService: AuthLogService, private router: Router) {}

  ngOnInit(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}


