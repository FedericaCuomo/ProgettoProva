import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Luogo } from './tipologiche.model';

@Injectable({ providedIn: 'root' })
export class TipologicheService {
  private http = inject(HttpClient);

  getNazioni(): Observable<Luogo[]> {
    return this.http.post<Luogo[]>(`${environment.apiUrl}/getNazioni`, {});
  }
  getCitta(): Observable<Luogo[]> {
    return this.http.post<Luogo[]>(`${environment.apiUrl}/getCitta`, {});
  }
}
