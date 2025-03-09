import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule],
})
export class HomeComponent implements OnInit {
  tickers: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTickers().subscribe((response) => {
      this.tickers = response.data;
    });
  }
}
