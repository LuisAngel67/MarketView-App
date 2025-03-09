import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-empresa',
  standalone: true,
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
  imports: [CommonModule, RouterModule],
})
export class EmpresaComponent implements OnInit {
  empresa: any;
  precio: any;
  symbol: string = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.symbol = this.route.snapshot.paramMap.get('symbol') || '';

    this.apiService.getEmpresa(this.symbol).subscribe((response) => {
      this.empresa = response;
    });

    const urlAlpha = `${environment.apiAlphaVantage}?function=GLOBAL_QUOTE&symbol=${this.symbol}&apikey=${environment.apiKeyAlphaVantage}`;

    this.http.get(urlAlpha).subscribe(
      (response: any) => {
        this.precio = response['Global Quote'];
      },
      (error) => {
        console.error('Error al obtener datos de Alpha Vantage', error);
      }
    );
  }
}
