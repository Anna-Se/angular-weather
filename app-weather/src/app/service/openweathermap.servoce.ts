import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule }   from '@angular/common/http';

const API_URL = "https://api.openweathermap.org/data/2.5/forecast?";
const API_KEY = "70a21360959a07d4ec257e63e598fa6b";

@Injectable({
  providedIn: 'root'
})
export class OpenWeather {

  constructor(private httpClient: HttpClient) { }

  public getWeather(q: string): Observable<any> {
    const queryParams = {
      appid: API_KEY,
      q: q || 'Minsk',
      units: "metric",
    };
    return this.httpClient.get<any>(API_URL + new URLSearchParams(queryParams));
  }
}