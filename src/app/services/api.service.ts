import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiMarketStackUrl;
  private apiKey = environment.apiMarketStackKey;

  constructor(private http: HttpClient) {}

  getTickers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tickers`, {
      params: { access_key: this.apiKey }
    });
  }

  getEmpresa(symbol: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tickers/${symbol}`, {
      params: { access_key: this.apiKey }
    });
  }
}