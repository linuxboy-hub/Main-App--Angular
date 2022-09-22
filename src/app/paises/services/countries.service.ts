import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/pipes/interfaces/country';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/countries`);
  }

  getCountry(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.baseUrl}/countries/${id}`);
  }
  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/countries?q=${name}`);
  }
  addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(`${this.baseUrl}/countries`, country);
  }
  updateCountry(country: Country): Observable<Country> {
    return this.http.put<Country>(
      `${this.baseUrl}/countries/${country.id}`,
      country
    );
  }
  deleteCountry(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/countries/${id}`);
  }
}
