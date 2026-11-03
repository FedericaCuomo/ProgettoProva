import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Nazioni } from './tipologiche.model';

@Injectable({ providedIn: 'root' })
export class TipologicheService {
  private http = inject(HttpClient);

  getNazioni(): Observable<Nazioni[]> {
    return this.http.post<Nazioni[]>(`${environment.apiUrl}/getNazioni`, {});
  }
}
