import { Component } from '@angular/core';
import { DashboardComponent } from "../../Components/dashboard/dashboard.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [DashboardComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
