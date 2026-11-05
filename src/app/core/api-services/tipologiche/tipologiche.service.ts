import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Opzioni } from './tipologiche.model';

@Injectable({ providedIn: 'root' })
export class TipologicheService {
  private http = inject(HttpClient);

  getNazioni(): Observable<Opzioni[]> {
    return this.http.post<Opzioni[]>(`${environment.apiUrl}/getNazioni`, {});
  }
  getCitta(): Observable<Opzioni[]> {
    return this.http.post<Opzioni[]>(`${environment.apiUrl}/getCitta`, {});
  }
  getGender(): Observable<Opzioni[]> {
    return this.http.post<Opzioni[]>(`${environment.apiUrl}/getGender`, {});
  }
}
